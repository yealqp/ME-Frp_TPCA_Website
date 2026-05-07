/**
 * useScrollAnimation composable
 * 使用 Intersection Observer API 实现滚动触发动画
 * Requirements: 2.2 - 滚动触发动画
 */
import { ref, onMounted, onUnmounted } from "vue";

// 动画类型
export type AnimationType =
  | "default" // 默认向上淡入
  | "left" // 从左侧滑入
  | "right" // 从右侧滑入
  | "scale" // 缩放淡入
  | "rotate" // 旋转淡入
  | "blur" // 模糊淡入
  | "bounce" // 弹性效果
  | "flip"; // 3D 翻转

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  animationType?: AnimationType;
}

// 辅助函数：从 ref 获取实际的 DOM 元素
const getElement = (refValue: any): HTMLElement | null => {
  if (!refValue) return null;
  // 如果是 DOM 元素，直接返回
  if (refValue instanceof HTMLElement) return refValue;
  // 如果是 Vue 组件实例，获取其 $el
  if (refValue.$el)
    return refValue.$el instanceof HTMLElement ? refValue.$el : null;
  return null;
};

// 获取动画类名
export const getAnimationClass = (type: AnimationType = "default"): string => {
  const classMap: Record<AnimationType, string> = {
    default: "scroll-animate",
    left: "scroll-animate-left",
    right: "scroll-animate-right",
    scale: "scroll-animate-scale",
    rotate: "scroll-animate-rotate",
    blur: "scroll-animate-blur",
    bounce: "scroll-animate-bounce",
    flip: "scroll-animate-flip",
  };
  return classMap[type] || "scroll-animate";
};

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    once = true,
  } = options;

  const elementRef = ref<HTMLElement | any>(null);
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  // 检查用户是否偏好减少动画
  const prefersReducedMotion = () => {
    if (import.meta.server) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  const setupObserver = () => {
    // SSR 环境下直接显示
    if (import.meta.server) {
      isVisible.value = true;
      return;
    }

    // 如果用户偏好减少动画，直接显示元素
    if (prefersReducedMotion()) {
      isVisible.value = true;
      return;
    }

    // 检查 Intersection Observer API 是否可用
    if (typeof IntersectionObserver === "undefined") {
      isVisible.value = true;
      return;
    }

    const element = getElement(elementRef.value);
    if (!element) {
      isVisible.value = true;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            // 如果只触发一次，停止观察
            if (once && observer) {
              const el = getElement(elementRef.value);
              if (el) observer.unobserve(el);
            }
          } else if (!once) {
            isVisible.value = false;
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);
  };

  onMounted(() => {
    setupObserver();
  });

  onUnmounted(() => {
    if (observer) {
      const element = getElement(elementRef.value);
      if (element) observer.unobserve(element);
      observer.disconnect();
    }
  });

  return {
    elementRef,
    isVisible,
  };
}

/**
 * useScrollAnimationGroup composable
 * 用于一组元素的滚动动画，支持交错延迟
 */
export function useScrollAnimationGroup(
  _count: number,
  options: ScrollAnimationOptions & { staggerDelay?: number } = {},
) {
  const { staggerDelay = 100, ...scrollOptions } = options;

  const containerRef = ref<HTMLElement | any>(null);
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  const prefersReducedMotion = () => {
    if (import.meta.server) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  const setupObserver = () => {
    // SSR 环境下直接显示
    if (import.meta.server) {
      isVisible.value = true;
      return;
    }

    if (prefersReducedMotion()) {
      isVisible.value = true;
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      isVisible.value = true;
      return;
    }

    const element = getElement(containerRef.value);
    if (!element) {
      isVisible.value = true;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            if (scrollOptions.once !== false && observer) {
              const el = getElement(containerRef.value);
              if (el) observer.unobserve(el);
            }
          }
        });
      },
      {
        threshold: scrollOptions.threshold || 0.1,
        rootMargin: scrollOptions.rootMargin || "0px 0px -50px 0px",
      },
    );

    observer.observe(element);
  };

  onMounted(() => {
    setupObserver();
  });

  onUnmounted(() => {
    if (observer) {
      const element = getElement(containerRef.value);
      if (element) observer.unobserve(element);
      observer.disconnect();
    }
  });

  // 计算每个元素的延迟
  const getItemDelay = (index: number) => {
    if (import.meta.server) return 0;
    return prefersReducedMotion() ? 0 : index * staggerDelay;
  };

  return {
    containerRef,
    isVisible,
    getItemDelay,
    staggerDelay,
  };
}

export default useScrollAnimation;

/**
 * useScrollProgress composable
 * 监听页面滚动进度（带节流优化）
 */
export function useScrollProgress() {
  const progress = ref(0);
  let rafId: number | null = null;

  const updateProgress = () => {
    if (import.meta.server) return;

    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  };

  const handleScroll = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      updateProgress();
      rafId = null;
    });
  };

  onMounted(() => {
    if (import.meta.server) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress();
  });

  onUnmounted(() => {
    if (import.meta.server) return;
    window.removeEventListener("scroll", handleScroll);
    if (rafId) cancelAnimationFrame(rafId);
  });

  return { progress };
}

/**
 * useParallax composable
 * 视差滚动效果（带节流优化）
 */
export function useParallax(speed: number = 0.5) {
  const offset = ref(0);
  let rafId: number | null = null;

  const updateParallax = () => {
    if (import.meta.server) return;
    offset.value = window.scrollY * speed;
  };

  const handleScroll = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      updateParallax();
      rafId = null;
    });
  };

  onMounted(() => {
    if (import.meta.server) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  onUnmounted(() => {
    if (import.meta.server) return;
    window.removeEventListener("scroll", handleScroll);
    if (rafId) cancelAnimationFrame(rafId);
  });

  return { offset };
}

/**
 * useMousePosition composable
 * 鼠标位置追踪（用于光标跟随效果，带节流优化）
 */
export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);
  let rafId: number | null = null;

  const updatePosition = (e: MouseEvent) => {
    x.value = e.clientX;
    y.value = e.clientY;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      updatePosition(e);
      rafId = null;
    });
  };

  onMounted(() => {
    if (import.meta.server) return;
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
  });

  onUnmounted(() => {
    if (import.meta.server) return;
    window.removeEventListener("mousemove", handleMouseMove);
    if (rafId) cancelAnimationFrame(rafId);
  });

  return { x, y };
}
