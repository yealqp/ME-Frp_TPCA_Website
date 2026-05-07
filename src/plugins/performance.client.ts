/**
 * 性能监控插件
 * 监控页面加载性能和用户体验指标
 */

export default defineNuxtPlugin(() => {
  if (import.meta.server) return;

  // 监控 Core Web Vitals
  const reportWebVitals = () => {
    // 检查 PerformanceObserver 是否可用
    if (!("PerformanceObserver" in window)) return;

    try {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log("LCP:", lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          console.log("FID:", entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });

      // Cumulative Layout Shift (CLS)
      let clsScore = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsScore += entry.value;
          }
        });
        console.log("CLS:", clsScore);
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });
    } catch (error) {
      console.error("Performance monitoring error:", error);
    }
  };

  // 页面加载完成后开始监控
  if (document.readyState === "complete") {
    reportWebVitals();
  } else {
    window.addEventListener("load", reportWebVitals);
  }

  // 监控长任务
  if ("PerformanceObserver" in window) {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.duration > 50) {
            console.warn("Long task detected:", entry.duration, "ms");
          }
        });
      });
      longTaskObserver.observe({ entryTypes: ["longtask"] });
    } catch (error) {
      // longtask 可能不被支持
    }
  }
});
