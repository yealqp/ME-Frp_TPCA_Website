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
  // yml 不走 Alist：changelog 与客户端源码同仓（新账号 xiaoyun686xy/Yun-ME-FRP-Launcher）
  // 用 jsDelivr 镜像而非 raw.githubusercontent.com —— 后者在国内网络下经常直接超时，前端 fetch 会一直失败
  yml: "https://gcore.jsdelivr.net/gh/xiaoyun686xy/Yun-ME-FRP-Launcher@main/meta/changelog.json",
};

/** 获取指定产品的 changelog URL */
export function getChangelogUrl(productId: string): string {
  return CHANGELOG_PATHS[productId] ?? "";
}
