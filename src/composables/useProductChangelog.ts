import { getChangelogUrl } from "~/data/api";
import { sortVersionKeys } from "~/utils/version";

export interface ChangelogEntry {
  version: string;
  changes?: string[];
  notes?: string[];
  date?: string;
  note?: string;
  description?: string;
  codename?: string;
  isLatest: boolean;
}

/**
 * 产品更新日志 Composable
 * 整合 useChangelogCache + 数据转换，避免每个文档页重复相同的逻辑
 * @param productId - 产品 ID (xl, lx, pml, zl, fm, fd)
 * @param transformFn - 可选的自定义转换函数，用于格式化不同的 API 数据
 */
export const useProductChangelog = (
  productId: string,
  transformFn?: (apiData: any, sortFn: typeof sortVersionKeys) => ChangelogEntry[],
) => {
  const url = getChangelogUrl(productId);
  const cache = useChangelogCache(url);

  const updates = ref<ChangelogEntry[]>([]);

  // 默认转换函数
  const defaultTransform = (apiData: any): ChangelogEntry[] => {
    if (!apiData?.data) throw new Error("API 数据格式错误");

    const versions = sortVersionKeys(apiData.data);
    return versions.map((version, index) => {
      const versionData = apiData.data[version];
      return {
        version: `v${version}`,
        changes: Array.isArray(versionData) ? versionData : (versionData.changes || []),
        date: Array.isArray(versionData) ? "" : (versionData.date || ""),
        note: Array.isArray(versionData) ? "" : (versionData.note || ""),
        isLatest: index === 0,
      };
    });
  };

  const fetchChangelog = async () => {
    try {
      const apiData = await cache.fetchChangelog();
      updates.value = apiData ? (transformFn || defaultTransform)(apiData, sortVersionKeys) : [];
    } catch {
      updates.value = [];
    }
  };

  return {
    updates,
    loading: cache.loading,
    error: cache.error,
    fetchChangelog,
  };
};
