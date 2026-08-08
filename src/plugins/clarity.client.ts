import clarity from "@microsoft/clarity";
import { CLARITY_PROJECT_ID } from "~/data/constants";

export default defineNuxtPlugin(() => {
  const clarityProjectId = CLARITY_PROJECT_ID;

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
