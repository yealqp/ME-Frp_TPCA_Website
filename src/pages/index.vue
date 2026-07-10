<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <!-- 动态渐变背景 -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-gray-950 to-blue-900/20"></div>
        <div
          class="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow animate-float"
          :style="{ transform: `translateY(${parallaxOffset * 0.3}px)` }"></div>
        <div
          class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"
          :style="{ transform: `translateY(${parallaxOffset * 0.2}px)` }"></div>
        <div
          class="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-500"
          :style="{ transform: `translateY(${parallaxOffset * 0.4}px)` }"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="max-w-4xl mx-auto space-y-8">
          <!-- 徽章标签 -->
          <div ref="heroBadgeRef" class="scroll-animate" :class="{ 'visible': heroBadgeVisible }">
            <div
              class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm">
              <div class="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span>ME-Frp 第三方客户端联盟</span>
            </div>
          </div>

          <!-- 主标题 -->
          <div ref="heroTitleRef" class="scroll-animate text-center space-y-6" :class="{ 'visible': heroTitleVisible }">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-glow">
              <span class="block">
                <span
                  class="text-gradient bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {{ SITE_NAME }}
                </span>
              </span>
            </h1>

            <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-400 text-sm">
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-box" class="size-4 text-teal-400" />
                <span>{{ PRODUCT_COUNT }}+ 客户端产品</span>
              </div>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-users" class="size-4 text-teal-400" />
                <span>{{ MEMBER_COUNT }}+ 开发者</span>
              </div>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-monitor" class="size-4 text-teal-400" />
                <span>全平台覆盖</span>
              </div>
            </div>
          </div>

          <!-- 副标题 -->
          <p ref="heroSubRef" class="scroll-animate text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center"
            :class="{ 'visible': heroSubVisible }">
            由社区驱动，为 <span class="text-teal-400 font-semibold">ME-Frp</span> 用户打造
            <br class="hidden md:block">
            更美观、更便捷、更强大的<strong class="text-white">全平台内网穿透客户端矩阵</strong>
          </p>

          <!-- 按钮组 -->
          <div ref="heroBtnRef" class="scroll-animate flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            :class="{ 'visible': heroBtnVisible }">
            <UButton size="xl" color="primary" to="/products"
              class="px-8 py-4 text-lg font-semibold btn-glow hover-lift cursor-pointer">
              <UIcon name="i-lucide-box" class="size-5 mr-2" />
              探索产品
            </UButton>

            <UButton size="xl" color="neutral" variant="outline" to="/docs"
              class="px-8 py-4 text-lg btn-glow hover-lift cursor-pointer">
              <UIcon name="i-lucide-book-open" class="size-5 mr-2" />
              查看文档
            </UButton>

            <UButton size="xl" color="neutral" variant="outline" to="/about"
              class="px-8 py-4 text-lg btn-glow hover-lift cursor-pointer">
              <UIcon name="i-lucide-users" class="size-5 mr-2" />
              了解更多
            </UButton>
          </div>
        </div>
      </div>

      <!-- 向下滚动提示 -->
      <div class="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 animate-bounce">
        <span class="text-gray-500 text-xs">向下滚动探索更多</span>
        <UIcon name="i-lucide-chevrons-down" class="size-6 text-gray-400" />
      </div>
    </section>

    <!-- 主要内容区域 -->
    <MainContent />
  </div>
</template>

<script setup lang="ts">
import { SITE_URL, SITE_NAME, SITE_SHORT_NAME, CDN_BASE, OG_IMAGE, GITHUB_REPO, ANIMATION } from "~/data/constants";
import { PRODUCT_COUNT } from "~/data/products";
import { MEMBER_COUNT } from "~/data/members";

// 滚动动画
const { elementRef: heroBadgeRef, isVisible: heroBadgeVisible } = useScrollAnimation()
const { elementRef: heroTitleRef, isVisible: heroTitleVisible } = useScrollAnimation()
const { elementRef: heroSubRef, isVisible: heroSubVisible } = useScrollAnimation()
const { elementRef: heroBtnRef, isVisible: heroBtnVisible } = useScrollAnimation()

// 视差效果
const parallaxOffset = ref(0)

// 滚动状态
const isScrolling = ref(false)

// 检测是否为移动设备
const isMobile = ref(false)

// 组件挂载状态（用于防止卸载后继续执行动画）
let isMounted = true

// 平滑滚动到指定位置
const smoothScrollTo = (targetPosition) => {
  if (isScrolling.value) return

  isScrolling.value = true
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  const duration = ANIMATION.SCROLL_DURATION
  let start = null
  let rafId = null

  const smoothScroll = (timestamp) => {
    // 组件已卸载 → 停止动画
    if (!isMounted) return

    if (!start) start = timestamp
    const progress = timestamp - start
    const percentage = Math.min(progress / duration, 1)

    // easeOutQuart 缓动函数
    const easeOutQuart = 1 - Math.pow(1 - percentage, 4)

    window.scrollTo(0, startPosition + distance * easeOutQuart)

    if (progress < duration) {
      rafId = requestAnimationFrame(smoothScroll)
    } else {
      isScrolling.value = false
    }
  }

  rafId = requestAnimationFrame(smoothScroll)
}

// 处理滚轮事件
const handleWheel = (event) => {
  // 移动设备上禁用滚动效果
  if (isMobile.value) return

  const heroHeight = window.innerHeight
  const scrollY = window.scrollY

  // 正在滚动动画中，阻止所有滚动
  if (isScrolling.value) {
    event.preventDefault()
    return
  }

  // 在 hero 区域内（scrollY < heroHeight）
  if (scrollY < heroHeight) {
    event.preventDefault()

    const delta = event.deltaY

    if (delta > 0) {
      // 向下滚动，跳到下一个 section
      smoothScrollTo(heroHeight)
    } else if (delta < 0 && scrollY > 0) {
      // 向上滚动，回到顶部
      smoothScrollTo(0)
    }
    return
  }

  // 刚离开 hero 区域不远时（heroHeight <= scrollY < heroHeight + 100），向上滚动吸附回 hero
  if (scrollY < heroHeight + ANIMATION.SNAP_OFFSET && event.deltaY < 0) {
    event.preventDefault()
    smoothScrollTo(0)
  }
}

// 处理触摸事件
let touchStartY = 0

const handleTouchStart = (event) => {
  // 移动设备上禁用滚动效果
  if (isMobile.value) return

  touchStartY = event.touches[0].clientY
}

const handleTouchMove = (event) => {
  // 移动设备上禁用滚动效果
  if (isMobile.value) return

  const heroHeight = window.innerHeight
  const scrollY = window.scrollY

  // 在 hero 区域内或刚离开 hero 区域时阻止默认触摸滚动
  if ((scrollY < heroHeight || scrollY < heroHeight + ANIMATION.SNAP_OFFSET) && !isScrolling.value) {
    event.preventDefault()
  }
}

const handleTouchEnd = (event) => {
  // 移动设备上禁用滚动效果
  if (isMobile.value) return

  const heroHeight = window.innerHeight
  const scrollY = window.scrollY

  if (isScrolling.value) return

  const touchEndY = event.changedTouches[0].clientY
  const deltaY = touchStartY - touchEndY
  const threshold = ANIMATION.SWIPE_THRESHOLD

  // 在 hero 区域内
  if (scrollY < heroHeight) {
    if (deltaY > threshold) {
      // 向上滑动（向下滚动）
      smoothScrollTo(heroHeight)
    } else if (deltaY < -threshold && scrollY > 0) {
      // 向下滑动（向上滚动）
      smoothScrollTo(0)
    }
    return
  }

  // 刚离开 hero 区域不远时，向上滑动吸附回 hero
  if (scrollY < heroHeight + ANIMATION.SNAP_OFFSET && deltaY < -threshold) {
    smoothScrollTo(0)
  }
}

const updateParallax = () => {
  if (import.meta.server) return
  parallaxOffset.value = window.scrollY * 0.3
}

onMounted(() => {
  if (import.meta.server) return

  // 检测是否为移动设备
  isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768

  window.addEventListener('scroll', updateParallax, { passive: true })
  window.addEventListener('wheel', handleWheel, { passive: false })
  window.addEventListener('touchstart', handleTouchStart, { passive: true })
  window.addEventListener('touchmove', handleTouchMove, { passive: false })
  window.addEventListener('touchend', handleTouchEnd, { passive: true })
})

onUnmounted(() => {
  if (import.meta.server) return
  isMounted = false
  window.removeEventListener('scroll', updateParallax)
  window.removeEventListener('wheel', handleWheel)
  window.removeEventListener('touchstart', handleTouchStart)
  window.removeEventListener('touchmove', handleTouchMove)
  window.removeEventListener('touchend', handleTouchEnd)
})

// 页面元数据
useHead({
  title: '首页',
  link: [
    { rel: 'canonical', href: `${SITE_URL}/` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        alternateName: SITE_SHORT_NAME,
        url: SITE_URL,
        logo: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/favicon.ico',
        description: 'ME-Frp 第三方客户端联盟官方网站，专注于 ME-Frp 第三方客户端开发，提供多款优质内网穿透客户端',
        sameAs: [
          GITHUB_REPO
        ]
      })
    }
  ]
})

// SEO 优化
useSeoMeta({
  title: `首页 | ${SITE_NAME}`,
  ogTitle: `${SITE_NAME} - 专业内网穿透客户端`,
  description: 'ME-Frp 第三方客户端联盟官方网站，专注于 ME-Frp 第三方客户端开发，提供 ME-Frp-XL-Client、LX-ME-Frp-Launcher、Plain ME Frp Launcher 等多款优质内网穿透客户端。',
  ogDescription: 'ME-Frp 第三方客户端联盟官方网站，专注于 ME-Frp 第三方客户端开发，提供多款优质内网穿透客户端，支持 Windows、Linux、macOS 等多平台。',
  ogImage: OG_IMAGE,
  ogUrl: `${SITE_URL}/`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: SITE_NAME,
  twitterDescription: '专注于 ME-Frp 第三方客户端开发，提供多款优质内网穿透客户端',
  twitterImage: OG_IMAGE
})
</script>
