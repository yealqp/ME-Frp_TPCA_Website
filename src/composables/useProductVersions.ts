import { ref } from "vue";

/**
 * 产品版本管理 Composable
 * 从各产品的 API 获取最新版本号
 * 包含缓存和防抖优化
 */

interface VersionData {
  xl: string;
  lx: string;
  pml: string;
  zl: string;
  fm: string;
  fd: string; // 【新增】FrpDash（ME-Frp 第三方安卓客户端）版本号
}

interface ChangelogData {
  [version: string]: any;
}

// 【新增】FrpDash 更新信息结构（对应 api.0n.pub/update.js 中的 UPDATE_INFO）
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

// 【新增】通过动态注入 <script> 标签加载 FrpDash 的 update.js
// 原因：该接口未提供 CORS 头，fetch 会被浏览器跨域拦截；而 <script> 标签加载不受 CORS 限制。
// 脚本执行后会在 window 上挂载全局变量 UPDATE_INFO，加载完成即可读取。
// 结果做模块级缓存，避免重复注入。
let fdInfoCache: FDUpdateInfo | null = null;
let fdInfoPromise: Promise<FDUpdateInfo> | null = null;

export const loadFDUpdateInfo = (): Promise<FDUpdateInfo> => {
  // 已有缓存直接返回
  if (fdInfoCache) return Promise.resolve(fdInfoCache);
  // 正在加载则复用同一个 Promise
  if (fdInfoPromise) return fdInfoPromise;
  // 非浏览器环境无法注入 script
  if (typeof document === "undefined" || typeof window === "undefined") {
    return Promise.reject(new Error("非浏览器环境，无法加载 FrpDash 更新信息"));
  }

  fdInfoPromise = new Promise<FDUpdateInfo>((resolve, reject) => {
    const script = document.createElement("script");
    // 加时间戳避免命中浏览器缓存，确保拿到最新版本
    script.src = `https://api.0n.pub/update.js?_=${Date.now()}`;
    script.async = true;
    script.onload = () => {
      const info = (window as any).UPDATE_INFO as FDUpdateInfo | undefined;
      script.remove();
      if (info && info.versionName) {
        fdInfoCache = info;
        resolve(info);
      } else {
        reject(new Error("UPDATE_INFO 未正确加载"));
      }
    };
    script.onerror = () => {
      script.remove();
      reject(new Error("加载 FrpDash 更新接口失败"));
    };
    document.head.appendChild(script);
  });

  return fdInfoPromise;
};

// 【新增】通过动态注入 <script> 标签加载 FrpDash 的全量更新日志 changelog.js
// 同样因接口无 CORS 头，改用 <script> 标签加载，脚本执行后在 window 上挂载全局变量 CHANGELOG。
// CHANGELOG 为数组，元素形如 { version, date, sections: { 分类: [条目...] } }。
let fdChangelogCache: any[] | null = null;
let fdChangelogPromise: Promise<any[]> | null = null;

export const loadFDChangelog = (): Promise<any[]> => {
  if (fdChangelogCache) return Promise.resolve(fdChangelogCache);
  if (fdChangelogPromise) return fdChangelogPromise;
  if (typeof document === "undefined" || typeof window === "undefined") {
    return Promise.reject(new Error("非浏览器环境，无法加载 FrpDash 更新日志"));
  }

  fdChangelogPromise = new Promise<any[]>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://api.0n.pub/changelog.js?_=${Date.now()}`;
    script.async = true;
    script.onload = () => {
      const list = (window as any).CHANGELOG as any[] | undefined;
      script.remove();
      if (Array.isArray(list) && list.length > 0) {
        fdChangelogCache = list;
        resolve(list);
      } else {
        reject(new Error("CHANGELOG 未正确加载"));
      }
    };
    script.onerror = () => {
      script.remove();
      reject(new Error("加载 FrpDash 更新日志失败"));
    };
    document.head.appendChild(script);
  });

  return fdChangelogPromise;
};

// 全局缓存
const versionCache = {
  data: null as VersionData | null,
  timestamp: 0,
  ttl: 5 * 60 * 1000, // 5分钟缓存
};

let fetchPromise: Promise<void> | null = null;

export const useProductVersions = () => {
  const versions = ref<VersionData>({
    xl: "v1.5.5", // 默认值
    lx: "v2.3.0", // 默认值
    pml: "v2.1.0", // 默认值
    zl: "v1.8", // 默认值
    fm: "v1.0.0", // 默认值
    fd: "v1.4.5", // 【新增】FrpDash 默认值（实际以远程 API 为准）
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

      // 获取所有版本号并排序
      const versionNumbers = Object.keys(data.data).sort((a, b) => {
        const v1Parts = a.split(".").map((num) => parseInt(num) || 0);
        const v2Parts = b.split(".").map((num) => parseInt(num) || 0);

        for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
          const v1 = v1Parts[i] || 0;
          const v2 = v2Parts[i] || 0;
          if (v1 !== v2) return v2 - v1;
        }
        return 0;
      });

      return versionNumbers.length > 0 ? `v${versionNumbers[0]}` : "v1.5.5";
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

      // 获取所有版本号并排序
      const versionNumbers = Object.keys(data.data).sort((a, b) => {
        const v1Parts = a.split(".").map((num) => parseInt(num) || 0);
        const v2Parts = b.split(".").map((num) => parseInt(num) || 0);

        for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
          const v1 = v1Parts[i] || 0;
          const v2 = v2Parts[i] || 0;
          if (v1 !== v2) return v2 - v1;
        }
        return 0;
      });

      return versionNumbers.length > 0 ? `v${versionNumbers[0]}` : "v2.1.0";
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

  // 【新增】FD (FrpDash) 从开发者提供的更新接口获取最新版本
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
            fetchFDVersion(), // 【新增】并行获取 FrpDash 版本
          ],
        );

        const newVersions = {
          xl: xlVersion,
          lx: lxVersion,
          pml: pmlVersion,
          zl: zlVersion,
          fm: fmVersion,
          fd: fdVersion, // 【新增】FrpDash 版本
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
