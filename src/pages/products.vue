<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="py-16 lg:py-24 relative overflow-hidden"
      style="background: linear-gradient(135deg, #0F172A 0%, #111827 50%, #0A0E27 100%);">
      <!-- 动态光斑背景 -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000">
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6"
            style="text-shadow: 0 0 30px rgba(20, 184, 166, 0.3);">
            我们的产品
          </h1>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            为不同需求的用户提供多样化的 ME-Frp 客户端解决方案，每个产品都经过精心设计和优化
          </p>
        </div>
      </div>
    </section>

    <!-- 产品详细展示 -->
    <section class="py-16 lg:py-24 relative" style="background: linear-gradient(180deg, #111827 0%, #0F172A 100%);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div v-for="(product, index) in products" :key="product.id" :ref="el => productRefs[index] = el"
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate" :class="[
            { 'lg:grid-flow-col-dense': index % 2 === 1 },
            { 'visible': productVisibility[index] }
          ]" :style="{ transitionDelay: `${index * 200}ms` }">
          <!-- 产品信息 -->
          <div class="space-y-6" :class="{ 'lg:col-start-2': index % 2 === 1 }">
            <div class="flex items-center space-x-4">
              <img :src="product.icon" :alt="`${product.name} 图标 - ME-Frp 第三方客户端`" class="w-16 h-16 rounded-xl"
                loading="lazy"
                :onerror="product.fallbackIcon ? `if(!this.dataset.fallback){this.dataset.fallback='1';this.src='${product.fallbackIcon}'}` : undefined">
              <div>
                <h2 class="text-2xl md:text-3xl font-bold text-white">
                  {{ product.name }}
                </h2>
                <p class="text-gray-400">
                  {{ product.author }} · {{ product.version }}
                </p>
              </div>
            </div>

            <p class="text-lg text-gray-300 leading-relaxed">
              {{ product.description }}
            </p>

            <!-- 特性列表 -->
            <div class="space-y-3">
              <h3 class="text-lg font-semibold text-white">主要特性</h3>
              <ul class="space-y-2">
                <li v-for="feature in product.features" :key="feature"
                  class="flex items-center space-x-3 text-gray-300">
                  <UIcon name="i-lucide-check-circle" class="size-5 text-primary-400 flex-shrink-0" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- 技术标签 -->
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in product.tags" :key="tag"
                class="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-400">
                {{ tag }}
              </span>
            </div>

            <!-- 操作按钮 -->
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton size="lg" color="primary" :to="product.link" target="_blank" class="btn-glow cursor-pointer">
                <UIcon name="i-lucide-external-link" class="size-5 mr-2" />
                查看文档
              </UButton>
            </div>
          </div>

          <!-- 产品截图 -->
          <div class="relative" :class="{ 'lg:col-start-1 lg:row-start-1': index % 2 === 1 }">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl glass-card p-2">
              <img :src="product.screenshot" :alt="`${product.name} 界面截图 - ME-Frp 内网穿透客户端`"
                class="w-full h-auto rounded-xl" loading="lazy"
                :onerror="product.fallbackScreenshot ? `if(!this.dataset.fallback){this.dataset.fallback='1';this.src='${product.fallbackScreenshot}'}` : undefined">
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 为什么选择我们 -->
    <section class="py-16 lg:py-24 relative" style="background: linear-gradient(180deg, #0F172A 0%, #111827 100%);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="whyUsRef" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
          :class="{ 'visible': whyUsVisible }">
          <div class="p-6 border-b border-white/10">
            <div class="flex items-center space-x-3">
              <UIcon name="i-lucide-star" class="size-6 text-teal-400" />
              <h2 class="text-2xl font-bold text-white">为什么选择我们？</h2>
            </div>
          </div>
          <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass-card text-center space-y-4 p-6 rounded-lg hover-lift overflow-hidden">
              <div class="flex justify-center">
                <div class="p-4 rounded-full" style="background: rgba(20, 184, 166, 0.2);">
                  <UIcon name="i-lucide-palette" class="size-8 text-teal-400" />
                </div>
              </div>
              <h3 class="text-lg font-semibold text-white">多样选择</h3>
              <p class="text-gray-400 text-sm">覆盖 Windows、Linux、macOS、Android 全平台，{{ PRODUCT_COUNT }}+ 款客户端任你挑选</p>
            </div>
            <div class="glass-card text-center space-y-4 p-6 rounded-lg hover-lift overflow-hidden">
              <div class="flex justify-center">
                <div class="p-4 rounded-full" style="background: rgba(20, 184, 166, 0.2);">
                  <UIcon name="i-lucide-shield" class="size-8 text-teal-400" />
                </div>
              </div>
              <h3 class="text-lg font-semibold text-white">安全可靠</h3>
              <p class="text-gray-400 text-sm">大多项目开源或半开源，代码可审查，社区共同维护，确保安全透明</p>
            </div>
            <div class="glass-card text-center space-y-4 p-6 rounded-lg hover-lift overflow-hidden">
              <div class="flex justify-center">
                <div class="p-4 rounded-full" style="background: rgba(20, 184, 166, 0.2);">
                  <UIcon name="i-lucide-zap" class="size-8 text-teal-400" />
                </div>
              </div>
              <h3 class="text-lg font-semibold text-white">持续更新</h3>
              <p class="text-gray-400 text-sm">活跃的开发者社区，定期迭代发布新版本，功能不断完善</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 lg:py-24 relative overflow-hidden"
      style="background: linear-gradient(135deg, #0F172A 0%, #0A0E27 50%, #0F172A 100%);">
      <!-- 动态光斑背景 -->
      <div class="absolute inset-0">
        <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          class="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000">
        </div>
      </div>

      <div ref="ctaRef" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-animate"
        :class="{ 'visible': ctaVisible }">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6"
          style="text-shadow: 0 0 30px rgba(20, 184, 166, 0.3);">
          开始使用我们的产品
        </h2>
        <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          选择最适合您需求的客户端，开始您的 ME-Frp 之旅
        </p>
        <UButton size="xl" color="primary" to="/docs" class="btn-glow cursor-pointer">
          <UIcon name="i-lucide-file-text" class="size-5 mr-2" />
          查看文档
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getProducts, PRODUCT_COUNT } from "~/data/products";
import { SITE_URL, SITE_NAME, OG_IMAGE, GITHUB_REPO } from "~/data/constants";

// 页面元数据
useHead({
  title: '产品',
  link: [
    { rel: 'canonical', href: `${SITE_URL}/products` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `ME-Frp 第三方客户端产品列表`,
        description: `${SITE_NAME}的所有产品`,
        numberOfItems: PRODUCT_COUNT,
        itemListElement: [
          {
            '@type': 'SoftwareApplication',
            position: 1,
            name: 'ME-Frp-XL-Client',
            applicationCategory: 'NetworkApplication',
            operatingSystem: 'Windows',
            description: '基于 Tauri 框架开发的跨平台客户端，界面美观，性能优异',
            author: { '@type': 'Person', name: 'yealqp' }
          },
          {
            '@type': 'SoftwareApplication',
            position: 2,
            name: 'LX-ME-Frp-Launcher',
            applicationCategory: 'NetworkApplication',
            operatingSystem: 'Windows',
            description: '使用易语言开发的 Windows 客户端，界面高仿官方风格',
            author: { '@type': 'Person', name: '灵弦MuaMua' }
          },
          {
            '@type': 'SoftwareApplication',
            position: 3,
            name: 'PML 2',
            applicationCategory: 'NetworkApplication',
            operatingSystem: 'Windows, Linux, macOS, Android',
            description: '基于 .NET 的跨平台客户端，支持多个操作系统',
            author: { '@type': 'Organization', name: 'RYCB工作室' }
          },
          {
            '@type': 'SoftwareApplication',
            position: 4,
            name: 'ZNext Launcher',
            applicationCategory: 'NetworkApplication',
            operatingSystem: 'Windows',
            description: '基于 WinUI3 框架开发的 Windows 原生客户端，采用 Fluent Design 设计语言',
            author: { '@type': 'Person', name: 'ZeroSnow' }
          },
          {
            '@type': 'SoftwareApplication',
            position: 5,
            name: 'Fan-ME-FRP-Launcher',
            applicationCategory: 'NetworkApplication',
            operatingSystem: 'Windows, Linux, Android',
            description: '基于 Java 开发的 FRP 客户端启动器，支持 GUI 图形界面和命令行模式',
            author: { '@type': 'Person', name: 'xiaofanforfabric' }
          },
          {
            '@type': 'SoftwareApplication',
            position: 6,
            name: 'FrpDash',
            applicationCategory: 'NetworkApplication',
            operatingSystem: 'Android',
            description: '面向安卓端的 ME-Frp 第三方客户端，Java 原生开发，内置 frpc 四架构二进制，免 Root 开箱即用',
            author: { '@type': 'Person', name: 'zhai' }
          }
        ]
      })
    }
  ]
})

// SEO 优化
useSeoMeta({
  title: `产品 | ${SITE_NAME}`,
  ogTitle: `产品 - ${SITE_NAME}`,
  description: `了解 ${SITE_NAME}的所有产品，包括 ME-Frp-XL-Client、LX-ME-Frp-Launcher、PML 2、ZNext Launcher 和 Fan-ME-FRP-Launcher，为不同需求的用户提供多样化的内网穿透解决方案。`,
  ogDescription: `了解 ${SITE_NAME}的所有产品，包括 ME-Frp-XL-Client、LX-ME-Frp-Launcher、PML 2、ZNext Launcher 和 Fan-ME-FRP-Launcher`,
  ogImage: OG_IMAGE,
  ogUrl: `${SITE_URL}/products`,
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

// 滚动动画
const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation()
const { elementRef: whyUsRef, isVisible: whyUsVisible } = useScrollAnimation()

// 产品列表滚动动画
const productRefs = ref([])
const productVisibility = ref(Array<boolean>(PRODUCT_COUNT).fill(false))

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') {
    productVisibility.value = Array<boolean>(PRODUCT_COUNT).fill(true)
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = productRefs.value.indexOf(entry.target)
        if (index !== -1 && entry.isIntersecting) {
          productVisibility.value[index] = true
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  productRefs.value.forEach((el) => {
    if (el) observer.observe(el)
  })
})

// 使用版本管理 composable
const { versions, fetchAllVersions } = useProductVersions()

// 产品列表（从共享数据文件获取，保持 version 字段响应式）
const products = computed(() => getProducts(versions.value))

// 组件挂载时获取版本号
onMounted(() => {
  fetchAllVersions()
})

const openProtocol = (productId) => {
  // 尝试打开自定义协议
  window.location.href = `mefrp://StartProxy/${productId}`

  // 如果协议不可用，跳转到协议页面
  setTimeout(() => {
    navigateTo(`/protocol/${productId}`)
  }, 1000)
}
</script>
