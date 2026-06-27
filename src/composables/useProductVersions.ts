import { ref, shallowRef } from "vue";
import { sortVersionKeys } from "~/utils/version";
import { getChangelogUrl } from "~/data/api";
import { CACHE_TTL } from "~/data/constants";

/**
 * 产品版本管理 Composable
 * 从 alist 存储获取各产品最新版本号
 * 包含缓存和防抖优化
 */

export interface VersionData {
  xl: string;
  lx: string;
  pml: string;
  zl: string;
  fm: string;
  fd: string; // FrpDash（面向安卓端的 ME-Frp 第三方客户端）版本号
  mgc: string; // MeFrp-GR-Client（PySide6 + Qt WebEngine 桌面客户端）版本号
}

interface ChangelogData {
  [version: string]: any;
}

interface VersionCache {
  data: VersionData | null;
  timestamp: number;
  ttl: number;
}

// 全局缓存
const versionCache: VersionCache = {
  data: null,
  timestamp: 0,
  ttl: CACHE_TTL,
};

let fetchPromise: Promise<void> | null = null;

/** 默认版本号回退值（与 useProductVersions 初始值保持一致） */
const DEFAULT_VERSIONS: VersionData = {
  xl: "v1.5.5",
  lx: "v2.3.0",
  pml: "v2.1.0",
  zl: "v1.8",
  fm: "v1.0.0",
  fd: "v1.4.5",
  mgc: "v1.0.0",
};

/**
 * 从 changelog API 获取指定产品的最新版本
 */
const fetchLatestVersion = async (productId: string, fallback: string): Promise<string> => {
  try {
    const url = getChangelogUrl(productId);
    if (!url) throw new Error(`Unknown product: ${productId}`);

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${productId} changelog`);

    const data: { data: ChangelogData } = await response.json();
    if (!data.data) throw new Error(`Invalid ${productId} changelog data`);

    const keys = sortVersionKeys(data.data);
    return keys.length > 0 ? `v${keys[0]}` : fallback;
  } catch (err) {
    console.error(`获取 ${productId} 版本失败:`, err);
    return fallback;
  }
};

export const useProductVersions = () => {
  const versions = shallowRef<VersionData>({ ...DEFAULT_VERSIONS });

  const loading = ref(false);
  const error = ref<string | null>(null);

  // 检查缓存是否有效
  const isCacheValid = (): boolean => {
    return (
      versionCache.data !== null &&
      Date.now() - versionCache.timestamp < versionCache.ttl
    );
  };

  // 从缓存加载
  const loadFromCache = (): boolean => {
    if (isCacheValid() && versionCache.data) {
      versions.value = { ...versionCache.data };
      return true;
    }
    return false;
  };

  // 保存到缓存
  const saveToCache = (data: VersionData): void => {
    versionCache.data = { ...data };
    versionCache.timestamp = Date.now();
  };

  // 获取所有产品的版本号（带缓存和防抖）
  const fetchAllVersions = async () => {
    if (loadFromCache()) return;
    if (fetchPromise) return fetchPromise;
    if (loading.value) return;

    loading.value = true;
    error.value = null;

    fetchPromise = (async () => {
      try {
        const ids = Object.keys(DEFAULT_VERSIONS) as (keyof VersionData)[];
        const results = await Promise.all(
          ids.map((id) => fetchLatestVersion(id, DEFAULT_VERSIONS[id])),
        );

        const newVersions = {} as VersionData;
        ids.forEach((id, i) => {
          newVersions[id] = results[i];
        });

        versions.value = newVersions;
        saveToCache(newVersions);
      } catch (err) {
        console.error("获取版本号失败:", err);
        error.value = "获取版本号失败";
      } finally {
        loading.value = false;
        fetchPromise = null;
      }
    })();

    return fetchPromise;
  };

  // 获取单个产品的版本号
  const getVersion = (productId: keyof VersionData): string => {
    return versions.value[productId];
  };

  // 清除缓存
  const clearCache = (): void => {
    versionCache.data = null;
    versionCache.timestamp = 0;
  };

  return {
    versions,
    loading,
    error,
    fetchAllVersions,
    getVersion,
    clearCache,
  };
};