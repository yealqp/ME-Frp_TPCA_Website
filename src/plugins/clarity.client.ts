import clarity from "@microsoft/clarity";

export default defineNuxtPlugin(() => {
  const clarityProjectId = "u33c3orphh";

  if (!clarityProjectId) return;

  // 非关键分析脚本，延迟到浏览器空闲时加载
  const initClarity = () => clarity.init(clarityProjectId);
  if ("requestIdleCallback" in window) {
    requestIdleCallback(initClarity, { timeout: 3000 });
  } else {
    // fallback: 页面加载完成后 2 秒再初始化
    setTimeout(initClarity, 2000);
  }
});
