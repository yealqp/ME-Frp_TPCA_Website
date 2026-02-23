<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="py-16 lg:py-24 relative overflow-hidden" style="background: linear-gradient(135deg, #0F172A 0%, #111827 50%, #0A0E27 100%);">
      <!-- 动态光斑背景 -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6" style="text-shadow: 0 0 30px rgba(20, 184, 166, 0.3);">
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
        <div 
          v-for="(product, index) in products" 
          :key="product.id"
          :ref="el => productRefs[index] = el"
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-animate"
          :class="[
            { 'lg:grid-flow-col-dense': index % 2 === 1 },
            { 'visible': productVisibility[index] }
          ]"
          :style="{ transitionDelay: `${index * 200}ms` }"
        >
          <!-- 产品信息 -->
          <div class="space-y-6" :class="{ 'lg:col-start-2': index % 2 === 1 }">
            <div class="flex items-center space-x-4">
              <img 
                :src="product.icon" 
                :alt="`${product.name} 图标 - ME-Frp 第三方客户端`"
                class="w-16 h-16 rounded-xl"
                loading="lazy"
              >
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
                <li 
                  v-for="feature in product.features" 
                  :key="feature"
                  class="flex items-center space-x-3 text-gray-300"
                >
                  <UIcon name="i-lucide-check-circle" class="size-5 text-primary-400 flex-shrink-0" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- 技术标签 -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in product.tags" 
                :key="tag"
                class="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-400"
              >
                {{ tag }}
              </span>
            </div>

            <!-- 操作按钮 -->
            <div class="flex flex-col sm:flex-row gap-4">
              <UButton 
                size="lg" 
                color="primary"
                :to="product.link"
                target="_blank"
                class="btn-glow cursor-pointer"
              >
                <UIcon name="i-lucide-external-link" class="size-5 mr-2" />
                查看文档
              </UButton>
            </div>
          </div>

          <!-- 产品截图 -->
          <div class="relative" :class="{ 'lg:col-start-1 lg:row-start-1': index % 2 === 1 }">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl glass-card p-2">
              <img 
                :src="product.screenshot" 
                :alt="`${product.name} 界面截图 - ME-Frp 内网穿透客户端`"
                class="w-full h-auto rounded-xl"
                loading="lazy"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 lg:py-24 relative overflow-hidden" style="background: linear-gradient(135deg, #0F172A 0%, #0A0E27 50%, #0F172A 100%);">
      <!-- 动态光斑背景 -->
      <div class="absolute inset-0">
        <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-1/3 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>
      
      <div 
        ref="ctaRef"
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 scroll-animate"
        :class="{ 'visible': ctaVisible }"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6" style="text-shadow: 0 0 30px rgba(20, 184, 166, 0.3);">
          开始使用我们的产品
        </h2>
        <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          选择最适合您需求的客户端，开始您的 ME-Frp 之旅
        </p>
        <UButton 
          size="xl" 
          color="primary"
          to="/docs"
          class="btn-glow cursor-pointer"
        >
          <UIcon name="i-lucide-file-text" class="size-5 mr-2" />
          查看文档
        </UButton>
      </div>
    </section>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '产品',
  link: [
    { rel: 'canonical', href: 'https://mefrp-tpca.yealqp.cn/products' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'ME-Frp 第三方客户端产品列表',
        description: 'ME-Frp 第三方客户端联盟的所有产品',
        numberOfItems: 3,
        itemListElement: [
          {
            '@type': 'SoftwareApplication',
            position: 1,
            name: 'XL-ME-Frp-Launcher',
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
            name: 'Plain ME Frp Launcher',
            applicationCategory: 'NetworkApplication',
            operatingSystem: 'Windows, Linux, macOS, Android',
            description: '基于 .NET 的跨平台客户端，支持多个操作系统',
            author: { '@type': 'Organization', name: 'RYCB工作室' }
          }
        ]
      })
    }
  ]
})

// SEO 优化
useSeoMeta({
  title: '产品 | ME-Frp 第三方客户端联盟',
  ogTitle: '产品 - ME-Frp 第三方客户端联盟',
  description: '了解 ME-Frp 第三方客户端联盟的所有产品，包括 XL-ME-Frp-Launcher、LX-ME-Frp-Launcher 和 Plain ME Frp Launcher，为不同需求的用户提供多样化的内网穿透解决方案。',
  ogDescription: '了解 ME-Frp 第三方客户端联盟的所有产品，包括 XL-ME-Frp-Launcher、LX-ME-Frp-Launcher 和 Plain ME Frp Launcher',
  ogImage: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/og-image.png',
  ogUrl: 'https://mefrp-tpca.yealqp.cn/products',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

// 滚动动画
const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation()

// 产品列表滚动动画
const productRefs = ref([])
const productVisibility = ref([false, false, false])

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') {
    productVisibility.value = [true, true, true]
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

// 产品列表（使用计算属性动态获取版本号）
const products = computed(() => [
  {
    id: 'xl',
    name: 'XL-ME-Frp-Launcher',
    author: 'yealqp',
    version: versions.value.xl,
    description: '由yealqp使用Tauri框架开发，界面高仿官网样式，可能是目前收录的三个客户端中最美观的一个，也可能也是包体最小的一个，亦或是bug最少的一个。',
    icon: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/xl_icon.webp',
    screenshot: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/home.png',
    link: 'https://mefrp-tpca.yealqp.cn/docs/xl',
    tags: ['Tauri', '轻量级', 'Rust'],
    features: [
      '基于 Tauri 框架，性能优异',
      '界面美观，高仿官网设计',
      '包体小巧，启动迅速',
      '跨平台支持，稳定可靠'
    ]
  },
  {
    id: 'lx',
    name: 'LX-ME-Frp-Launcher',
    author: '灵弦MuaMua',
    version: versions.value.lx,
    description: '由灵弦MuaMua使用易语言&Exui开发，界面高仿官方图形化V4.0。',
    icon: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/lx_icon.webp',
    screenshot: 'https://image.mefrp-tpca.yealqp.cn/images/views/Lx_MuaMua/home.png',
    link: 'https://mefrp-tpca.yealqp.cn/docs/lx',
    tags: ['易语言', 'Windows', '官方风格', 'Exui'],
    features: [
      '使用易语言开发，原生 Windows 体验',
      '界面高仿官方图形化 V4.0',
      '操作简单，易于上手',
      '功能完整，稳定运行'
    ]
  },
  {
    id: 'pml',
    name: 'Plain ME Frp Launcher',
    author: 'RYCB工作室',
    version: versions.value.pml,
    description: 'PML 2使用.NET提供了简单便捷的操作, 也是目前三个产品中唯一一个跨平台的软件。支持常见主流平台(Windows, Linux, MacOS, Android)。',
    icon: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/pml_icon.webp',
    screenshot: 'https://image.mefrp-tpca.yealqp.cn/images/views/rycb/homex.png',
    link: 'https://mefrp-tpca.yealqp.cn/docs/pml',
    tags: ['.NET', '跨平台', '多系统'],
    features: [
      '基于 .NET 框架，跨平台支持',
      '支持 Windows、Linux、MacOS、Android',
      '操作简单便捷，功能丰富',
      '持续更新，社区活跃'
    ]
  }
])

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