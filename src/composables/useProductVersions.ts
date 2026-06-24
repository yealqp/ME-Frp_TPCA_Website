import { ref, shallowRef } from "vue";

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
}

interface ChangelogData {
  [version: string]: any;
}

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
    // 默认值
  lx: "v2.6", // 默认值
    pml: "v2.1.0", // 默认值
    zl: "v1.8", // 默认值
    fm: "v1.0.0", // 默认值
    fd: "v1.4.5", // FrpDash 默认值（实际以远程 API 为准）
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
      const response = await fetch("https://alist.yealqp.cn/download/ME-Frp%20XL%20Client/meta/changelog.json");
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
      const response = await fetch("https://alist.yealqp.cn/download/ME-Frp%20PML2/meta/changelog.json");
      if (!response.ok) throw new Error("Failed to fetch PML changelog");

      const data: { data: ChangelogData } =
        await response.json();
      if (!data.data)
        throw new Error("Invalid PML changelog data");

      const keys = sortVersionKeys(data.data);
      return keys.length > 0 ? `v${keys[0]}` : "v2.1.0";
    } catch (err) {
      console.error("获取 PML 版本失败:", err);
      return "v2.1.0";
    }
  };

  // 从 LX 的 changelog API 获取最新版本
  const fetchLXVersion = async (): Promise<string> => {
    try {
      const response = await fetch("https://alist.yealqp.cn/download/LX-ME-Frp-Launch/meta/changelog.json");
      if (!response.ok) throw new Error("Failed to fetch LX changelog");

      const data: { data: ChangelogData } = await response.json();
      if (!data.data) throw new Error("Invalid LX changelog data");

      const keys = sortVersionKeys(data.data);
      return keys.length > 0 ? `v${keys[0]}` : "v2.6";
    } catch (err) {
      console.error("获取 LX 版本失败:", err);
      return "v2.6";
    }
  };

  // 从 ZL 的 changelog API 获取最新版本
  const fetchZLVersion = async (): Promise<string> => {
    try {
      const response = await fetch("https://alist.yealqp.cn/download/ZNext%20Launcher/meta/changelog.json");
      if (!response.ok) throw new Error("Failed to fetch ZL changelog");

      const data: { data: ChangelogData } = await response.json();
      if (!data.data) throw new Error("Invalid ZL changelog data");

      const keys = sortVersionKeys(data.data);
      return keys.length > 0 ? `v${keys[0]}` : "v1.8";
    } catch (err) {
      console.error("获取 ZL 版本失败:", err);
      return "v1.8";
    }
  };

  // 从 FM 的 changelog API 获取最新版本
  const fetchFMVersion = async (): Promise<string> => {
    try {
      const response = await fetch("https://alist.yealqp.cn/download/Fan-ME-FRP-Launcher/meta/changelog.json");
      if (!response.ok) throw new Error("Failed to fetch FM changelog");

      const data: { data: ChangelogData } = await response.json();
      if (!data.data) throw new Error("Invalid FM changelog data");

      const keys = sortVersionKeys(data.data);
      return keys.length > 0 ? `v${keys[0]}` : "v1.0.0";
    } catch (err) {
      console.error("获取 FM 版本失败:", err);
      return "v1.0.0";
    }
  };

  // FD (FrpDash) 从 alist 上的 changelog 获取最新版本
  const fetchFDVersion = async (): Promise<string> => {
    try {
      const response = await fetch("https://alist.yealqp.cn/download/DashFrp/meta/changelog.json");
      if (!response.ok) throw new Error("Failed to fetch FD changelog");

      const data: { data: ChangelogData } = await response.json();
      if (!data.data) throw new Error("Invalid FD changelog data");

      const keys = sortVersionKeys(data.data);
      return keys.length > 0 ? `v${keys[0]}` : "v1.4.5";
    } catch (err) {
      console.error("获取 FD 版本失败:", err);
      return "v1.4.5";
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
        const [xlVersion, lxVersion, pmlVersion, zlVersion, fmVersion, fdVersion] = await Promise.all(
          [
            fetchXLVersion(),
            fetchLXVersion(),
            fetchPMLVersion(),
            fetchZLVersion(),
            fetchFMVersion(),
            fetchFDVersion(),
          ],
        );

        const newVersions = {
          xl: xlVersion,
          lx: lxVersion,
          pml: pmlVersion,
          zl: zlVersion,
          fm: fmVersion,
          fd: fdVersion,
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
  const getVersion = (productId: "xl" | "lx" | "pml" | "zl" | "fm" | "fd"): string => {
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
