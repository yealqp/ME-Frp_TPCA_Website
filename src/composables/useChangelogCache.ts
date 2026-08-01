import { ref, shallowRef } from "vue";
import { withCacheBust } from "~/utils/cache";

/**
 * Changelog 缓存管理
 * 避免重复请求相同的 API
 */

interface ChangelogCache {
  [key: string]: {
    data: any;
    timestamp: number;
  };
}

const cache: ChangelogCache = {};
const CACHE_TTL = 5 * 60 * 1000; // 5分钟缓存

export const useChangelogCache = (apiUrl: string) => {
  const data = shallowRef<any>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // 检查缓存是否有效
  const isCacheValid = (key: string): boolean => {
    const cached = cache[key];
    if (!cached) return false;
    return Date.now() - cached.timestamp < CACHE_TTL;
  };

  // 从缓存获取
  const getFromCache = (key: string): any | null => {
    if (isCacheValid(key)) {
      return cache[key].data;
    }
    return null;
  };

  // 保存到缓存
  const saveToCache = (key: string, value: any): void => {
    cache[key] = {
      data: value,
      timestamp: Date.now(),
    };
  };

  // 获取 changelog 数据
  const fetchChangelog = async () => {
    // 先检查缓存
    const cached = getFromCache(apiUrl);
    if (cached) {
      data.value = cached;
      return cached;
    }

    if (loading.value) return;

    loading.value = true;
    error.value = null;

    try {
      // 附加一次性参数并禁用 HTTP 缓存，确保发版后能立即取到最新数据（内存缓存仍按 apiUrl 稳定命中）
      const response = await fetch(withCacheBust(apiUrl), { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      data.value = result;
      saveToCache(apiUrl, result);
      return result;
    } catch (err) {
      console.error("获取 changelog 失败:", err);
      error.value = "获取更新日志失败";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  // 清除缓存
  const clearCache = (key?: string): void => {
    if (key) {
      delete cache[key];
    } else {
      Object.keys(cache).forEach((k) => delete cache[k]);
    }
  };

  return {
    data,
    loading,
    error,
    fetchChangelog,
    clearCache,
  };
};
