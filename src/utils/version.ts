/**
 * 版本号比较工具函数
 */

/**
 * 版本号降序排序
 * 输入 {"1.5.5": {...}, "1.6.0": {...}} 返回 ["1.6.0", "1.5.5"]
 */
export function sortVersionKeys(data: Record<string, unknown>): string[] {
  return Object.keys(data).sort((a, b) => {
    const aParts = a.split(".").map((n) => parseInt(n) || 0);
    const bParts = b.split(".").map((n) => parseInt(n) || 0);
    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
      const va = aParts[i] || 0;
      const vb = bParts[i] || 0;
      if (va !== vb) return vb - va;
    }
    return 0;
  });
}

/**
 * 比较两个版本号
 * @returns 正数: a > b, 负数: a < b, 0: 相等
 */
export function compareVersions(a: string, b: string): number {
  const aParts = a.replace(/^v/, "").split(".").map((n) => parseInt(n) || 0);
  const bParts = b.replace(/^v/, "").split(".").map((n) => parseInt(n) || 0);
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const va = aParts[i] || 0;
    const vb = bParts[i] || 0;
    if (va !== vb) return va - vb;
  }
  return 0;
}
