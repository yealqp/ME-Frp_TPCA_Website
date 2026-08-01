/**
 * 缓存控制工具函数
 */

/**
 * 为 URL 附加一次性「时间戳 + 随机数」参数，配合 fetch 的 no-store 选项
 * 强制绕过浏览器启发式缓存与 CDN 缓存，确保发版后能立即取到最新数据
 * 输入 "https://a/b.json" 返回 "https://a/b.json?nocache=xxxx_xxxx"
 */
export function withCacheBust(url: string): string {
  const bust = Date.now().toString(36) + "_" + Math.random().toString(36).slice(2);
  return url + (url.includes("?") ? "&" : "?") + "nocache=" + bust;
}
