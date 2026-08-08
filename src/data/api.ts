import { ALIST_BASE } from "./constants";

/**
 * 产品 changelog API 路径映射
 * 将产品 ID 映射到 Alist 上的 changelog JSON 路径
 */
export const CHANGELOG_PATHS: Record<string, string> = {
  xl: `${ALIST_BASE}/download/ME-Frp%20XL%20Client/meta/changelog.json`,
  lx: `${ALIST_BASE}/download/LX-ME-Frp-Launch/meta/changelog.json`,
  pml: `${ALIST_BASE}/download/ME-Frp%20PML2/meta/changelog.json`,
  zl: `${ALIST_BASE}/download/ZNext%20Launcher/meta/changelog.json`,
  fm: `${ALIST_BASE}/download/Fan-ME-FRP-Launcher/meta/changelog.json`,
  fd: `${ALIST_BASE}/download/DashFrp/meta/changelog.json`,
};

/** 获取指定产品的 changelog URL */
export function getChangelogUrl(productId: string): string {
  return CHANGELOG_PATHS[productId] ?? "";
}
