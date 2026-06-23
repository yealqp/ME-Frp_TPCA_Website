import { ref, shallowRef } from "vue";

/**
 * 产品版本管理 Composable
 * 从各产品的 API 获取最新版本号
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

// FrpDash 更新信息结构（对应 api.0n.pub/update.js 中的 UPDATE_INFO）
export interface FDUpdateInfo {
  versionCode?: number;
  versionName?: string;
  apkUrl?: string;
  apkSize?: number;
  apkMd5?: string;
  forceUpdate?: boolean;
  minSdkVersion?: number;
  changelog?: string[];
  publishedAt?: string;
}

/** FrpDash API 基础 URL */
const FD_API_BASE = "https://api.0n.pub";

/** 生成带缓存破坏的 FrpDash API URL */
const createFdApiUrl = (fileName: "update.js" | "changelog.js"): string => {
  const bust = `${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}`;
  return `${FD_API_BASE}/${fileName}?nocache=${bust}`;
};

/**
 * 通用 script 加载器
 * 用于加载无 CORS 头的第三方 JS 接口（JSONP 模式）
 * 内置缓存 + Promise 去重 + 超时 + 浏览器环境检查
 */
interface CacheContainer<T> {
  data: T | null;
  promise: Promise<T> | null;
}

function createScriptLoader<T>(
  getUrl: () => string,
  globalVarName: string,
  validate: (data: unknown) => data is T,
  errorLabel: string,
  timeoutMs: number = 15000,
): () => Promise<T> {
  const cache: CacheContainer<T> = { data: null, promise: null };

  return (): Promise<T> => {
    if (cache.data) return Promise.resolve(cache.data);
    if (cache.promise) return cache.promise;
    if (typeof document === "undefined" || typeof window === "undefined") {
      return Promise.reject(new Error(`非浏览器环境，无法加载 ${errorLabel}`));
    }

    cache.promise = new Promise<T>((resolve, reject) => {
      const script = document.createElement("script");
      let timeoutId: number | undefined;

      const cleanup = () => {
        if (timeoutId !== undefined) window.clearTimeout(timeoutId);
        script.remove();
      };
      const fail = (message: string) => {
        cleanup();
        cache.promise = null;
        reject(new Error(message));
      };

      delete (window as any)[globalVarName];
      script.src = getUrl();
      script.async = true;
      script.onload = () => {
        const data = (window as any)[globalVarName];
        cleanup();
        if (validate(data)) {
          cache.data = data;
          resolve(data);
        } else {
          cache.promise = null;
          reject(new Error(`${globalVarName} 未正确加载`));
        }
      };
      script.onerror = () => {
        fail(`加载 ${errorLabel} 失败`);
      };
      timeoutId = window.setTimeout(() => fail(`加载 ${errorLabel} 超时`), timeoutMs);
      document.head.appendChild(script);
    });

    return cache.promise;
  };
}

const _isFDUpdateInfo = (data: unknown): data is FDUpdateInfo =>
  data != null && !!(data as FDUpdateInfo).versionName;

/** 加载 FrpDash 更新信息（JSONP 方式绕过 CORS） */
export const loadFDUpdateInfo = createScriptLoader<FDUpdateInfo>(
  () => createFdApiUrl("update.js"),
  "UPDATE_INFO",
  _isFDUpdateInfo,
  "FrpDash 更新接口",
);

/** 加载 FrpDash 全量更新日志（JSONP 方式绕过 CORS） */
export const loadFDChangelog = createScriptLoader<any[]>(
  () => createFdApiUrl("changelog.js"),
  "CHANGELOG",
  (data): data is any[] => Array.isArray(data) && data.length > 0,
  "FrpDash 更新日志",
);

// 全局缓存
const versionCache = {
  data: null as VersionData | null,
  timestamp: 0,
  ttl: 5 * 60 * 1000, // 5分钟缓存
};

let fetchPromise: Promise<void> | null = null;

/**
 * 版本号排序（降序）
 * 输入 {"1.5.5": {...}, "1.6.0": {...}} 返回 ["1.6.0", "1.5.5"]
 */
const sortVersionKeys = (data: Record<string, unknown>): string[] =>
  Object.keys(data).sort((a, b) => {
    const aParts = a.split(".").map((n) => parseInt(n) || 0);
    const bParts = b.split(".").map((n) => parseInt(n) || 0);
    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const va = aParts[i] || 0;
      const vb = bParts[i] || 0;
      if (va !== vb) return vb - va;
    }
    return 0;
  });

export const useProductVersions = () => {
  const versions = shallowRef<VersionData>({
    xl: "v1.5.5", // 默认值
    lx: "v2.3.0", // 默认值
    pml: "v2.1.0", // 默认值
    zl: "v1.8", // 默认值
    fm: "v1.0.0", // 默认值
    fd: "v1.4.5", // FrpDash 默认值（实际以远程 API 为准）
    mgc: "v1.0.0", // MeFrp-GR-Client 默认值（实际以 GitHub Releases 为准）
  });

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

  // 从 XL 的 changelog API 获取最新版本
  const fetchXLVersion = async (): Promise<string> => {
    try {
      const response = await fetch("https://xlc.mefrp.yealqp.cn/tpca.json");
      if (!response.ok) throw new Error("Failed to fetch XL changelog");

      const data: { data: ChangelogData } = await response.json();
      if (!data.data) throw new Error("Invalid XL changelog data");

      const keys = sortVersionKeys(data.data);
      return keys.length > 0 ? `v${keys[0]}` : "v1.5.5";
    } catch (err) {
      console.error("获取 XL 版本失败:", err);
      return "v1.5.5";
    }
  };

  // 从 PML 的 changelog API 获取最新版本
  const fetchPMLVersion = async (): Promise<string> => {
    try {
      const response = await fetch("https://api.rycb.tech/api/changelog");
      if (!response.ok) throw new Error("Failed to fetch PML changelog");

      const data: { success: boolean; data: ChangelogData } =
        await response.json();
      if (!data.success || !data.data)
        throw new Error("Invalid PML changelog data");

      const keys = sortVersionKeys(data.data);
      return keys.length > 0 ? `v${keys[0]}` : "v2.1.0";
    } catch (err) {
      console.error("获取 PML 版本失败:", err);
      return "v2.1.0";
    }
  };

  // LX 暂时没有 API，使用硬编码
  const fetchLXVersion = async (): Promise<string> => {
    // TODO: 如果 LX 有 API，在这里实现
    return "v2.3.0";
  };

  // ZL (ZNext Launcher) 暂时没有 API，使用硬编码
  const fetchZLVersion = async (): Promise<string> => {
    // TODO: 如果 ZL 有 API，在这里实现
    return "v1.8";
  };

  // FM (Fan-ME-FRP-Launcher) 从 GitHub Releases API 获取最新版本
  const fetchFMVersion = async (): Promise<string> => {
    try {
      const response = await fetch("https://api.github.com/repos/xiaofanforfabric/Fan-ME-FRP-Launcher/releases/latest");
      if (!response.ok) throw new Error("Failed to fetch FM release");
      const data: { tag_name: string } = await response.json();
      if (!data.tag_name) throw new Error("Invalid FM release data");
      return `v${data.tag_name.replace(/^v/, "").replace(/^first_dev_version$/, "1.0.0")}`;
    } catch (err) {
      console.error("获取 FM 版本失败:", err);
      return "v1.0.0";
    }
  };

  // FD (FrpDash) 从开发者提供的更新接口获取最新版本
  // 该接口是 JS 文件（var UPDATE_INFO={...};），且未提供 CORS 头，
  // 因此不能用 fetch（会被浏览器跨域拦截），改用动态注入 <script> 标签加载，
  // 脚本执行后会在全局挂载 UPDATE_INFO 变量，再从中读取版本号。
  const fetchFDVersion = async (): Promise<string> => {
    // SSR 环境无 document，直接返回默认值（客户端挂载后会再次获取）
    if (import.meta.server || typeof document === "undefined") {
      return "v1.4.5";
    }
    try {
      const info = await loadFDUpdateInfo();
      if (!info || !info.versionName) throw new Error("Missing FD versionName");
      // 统一补上 v 前缀（接口里的 versionName 形如 "1.4.5"）
      return `v${String(info.versionName).replace(/^v/, "")}`;
    } catch (err) {
      console.error("获取 FD 版本失败:", err);
      return "v1.4.5";
    }
  };

  // MGC (MeFrp-GR-Client) 从 GitHub Releases API 获取最新版本
  const fetchMGCVersion = async (): Promise<string> => {
    try {
      const response = await fetch("https://api.github.com/repos/Guoran-11/Guoran-11-MeFrp-GR-Client/releases/latest");
      if (!response.ok) throw new Error("Failed to fetch MGC release");
      const data: { tag_name: string } = await response.json();
      if (!data.tag_name) throw new Error("Invalid MGC release data");
      return `v${data.tag_name.replace(/^v/, "")}`;
    } catch (err) {
      console.error("获取 MGC 版本失败:", err);
      return "v1.0.0";
    }
  };

  // 获取所有产品的版本号（带缓存和防抖）
  const fetchAllVersions = async () => {
    // 先尝试从缓存加载
    if (loadFromCache()) {
      return;
    }

    // 如果已经有请求在进行中，等待它完成
    if (fetchPromise) {
      return fetchPromise;
    }

    if (loading.value) return;

    loading.value = true;
    error.value = null;

    fetchPromise = (async () => {
      try {
        const [xlVersion, lxVersion, pmlVersion, zlVersion, fmVersion, fdVersion, mgcVersion] = await Promise.all(
          [
            fetchXLVersion(),
            fetchLXVersion(),
            fetchPMLVersion(),
            fetchZLVersion(),
            fetchFMVersion(),
            fetchFDVersion(),
            fetchMGCVersion(),
          ],
        );
        const newVersions = {
          xl: xlVersion,
          lx: lxVersion,
          pml: pmlVersion,
          zl: zlVersion,
          fm: fmVersion,
          fd: fdVersion,
          mgc: mgcVersion,
        };

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
  const getVersion = (productId: "xl" | "lx" | "pml" | "zl" | "fm" | "fd" | "mgc"): string => {
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
