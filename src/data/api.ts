import { ALIST_BASE } from "./constants";

/**
 * 聚合反馈平台 UniReport API
 * 后端：RycbApi.NET POST /api/tpca/unireport（免 token，服务端限流 + 落盘 + 发邮件）
 */
export const UNIREPORT_API = "https://api.rycb.tech/api/tpca/unireport";

export type FeedbackType = "bug" | "feature" | "other";

export interface UnireportPayload {
  /** 客户端 ID，对应 products.ts 的 id */
  client: string;
  type: FeedbackType;
  email: string;
  content: string;
  page: string;
}

export interface UnireportResult {
  success: boolean;
  message: string;
}

/** 提交聚合反馈，返回统一的结果结构，网络/HTTP 错误统一转换为 success=false */
export async function submitFeedback(payload: UnireportPayload): Promise<UnireportResult> {
  try {
    const res = await $fetch<UnireportResult>(UNIREPORT_API, {
      method: "POST",
      body: payload,
    });
    return { success: res?.success === true, message: res?.message ?? "" };
  } catch (err: unknown) {
    const e = err as { data?: { message?: string }; message?: string };
    return { success: false, message: e?.data?.message || e?.message || "网络错误，请稍后重试" };
  }
}

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
  // yml 暂不使用 Alist，changelog 由客户端仓库托管（GitHub raw），JSON 结构与 Alist 版本一致
  yml: "https://raw.githubusercontent.com/66666kuailetianshi/Yun-ME-FRP-Launcher/main/meta/changelog.json",
};

/** 获取指定产品的 changelog URL */
export function getChangelogUrl(productId: string): string {
  return CHANGELOG_PATHS[productId] ?? "";
}
