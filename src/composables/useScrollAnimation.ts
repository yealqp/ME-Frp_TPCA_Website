/**
 * useScrollAnimation composable
 * 使用 Intersection Observer API 实现滚动触发动画
 * 支持 8 种动画类型（default / left / right / scale / rotate / blur / bounce / flip）
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

// ---------- 共享内部逻辑 ----------

/** 从 ref 值获取实际 DOM 元素 */
const resolveElement = (target: any): HTMLElement | null => {
  if (!target) return null;
  if (target instanceof HTMLElement) return target;
  if (target.$el instanceof HTMLElement) return target.$el;
  return null;
};

/** 检查用户是否偏好减少动画（结果仅计算一次后缓存） */
let _reducedMotion: boolean | null = null;
const prefersReducedMotion = (): boolean => {
  if (_reducedMotion !== null) return _reducedMotion;
  if (import.meta.server) {
    _reducedMotion = false;
    return false;
  }
  _reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return _reducedMotion;
};

/**
 * 通用 IntersectionObserver 钩子（内部共享逻辑）
 * 处理 SSR 守卫、prefers-reduced-motion、API 可用性检查、observer 生命周期
 */
function useIntersectionObserver(
  targetRef: ReturnType<typeof ref<HTMLElement | any>>,
  options: { threshold?: number; rootMargin?: string; once?: boolean },
) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", once = true } = options;
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  const shouldSkip = (): boolean => {
    if (import.meta.server) return true;
    if (prefersReducedMotion()) return true;
    if (typeof IntersectionObserver === "undefined") return true;
    return false;
  };

  onMounted(() => {
    if (shouldSkip()) {
      isVisible.value = true;
      return;
    }

    const el = resolveElement(targetRef.value);
    if (!el) {
      isVisible.value = true;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            isVisible.value = true;
            if (once) {
              const current = resolveElement(targetRef.value);
              if (current) observer?.unobserve(current);
            }
          } else if (!once) {
            isVisible.value = false;
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
  });

  onUnmounted(() => {
    if (observer) {
      const el = resolveElement(targetRef.value);
      if (el) observer.unobserve(el);
      observer.disconnect();
    }
  });

  return { isVisible };
}

// ---------- 公开 API ----------

/**
 * 单元素滚动动画
 * @example
 * const { elementRef, isVisible } = useScrollAnimation({ animationType: 'left' })
 * <div ref="elementRef" :class="{ visible: isVisible }">
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { once = true, threshold, rootMargin } = options;
  const elementRef = ref<HTMLElement | any>(null);
  const { isVisible } = useIntersectionObserver(elementRef, { threshold, rootMargin, once });

  return { elementRef, isVisible };
}

/**
 * 容器内子元素组滚动动画（支持交错延迟）
 * @example
 * const { containerRef, isVisible, getItemDelay } = useScrollAnimationGroup(6, { staggerDelay: 150 })
 * <div ref="containerRef">
 *   <div v-for="(_, i) in 6" :style="{ transitionDelay: `${getItemDelay(i)}ms` }">
 */
export function useScrollAnimationGroup(
  _count: number,
  options: ScrollAnimationOptions & { staggerDelay?: number } = {},
) {
  const { staggerDelay = 100, once = true, threshold, rootMargin } = options;
  const containerRef = ref<HTMLElement | any>(null);
  const { isVisible } = useIntersectionObserver(containerRef, { threshold, rootMargin, once });

  const getItemDelay = (index: number): number =>
    prefersReducedMotion() ? 0 : index * staggerDelay;

  return { containerRef, isVisible, getItemDelay, staggerDelay };
}

export default useScrollAnimation;
