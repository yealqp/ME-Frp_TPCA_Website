<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="py-8 lg:py-12 relative overflow-hidden" style="background: linear-gradient(135deg, #0F172A 0%, #111827 50%, #0A0E27 100%);">
      <!-- 动态光斑背景 -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6" style="text-shadow: 0 0 30px rgba(20, 184, 166, 0.3);">
            关于我们
          </h1>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            我们是一群热爱技术、勇于创新的开发者，致力于为 ME-Frp 用户提供更好的客户端体验
          </p>
        </div>
      </div>
    </section>

    <!-- 我们是谁 -->
    <section class="py-8 lg:py-12 relative" style="background: linear-gradient(180deg, #111827 0%, #0F172A 100%);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref="whoWeAreRef"
          class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
          :class="{ 'visible': whoWeAreVisible }"
        >
          <div class="p-6 border-b border-white/10">
            <div class="flex items-center space-x-3">
              <UIcon name="i-lucide-info" class="size-6 text-teal-400" />
              <h2 class="text-2xl font-bold text-white">我们是谁？</h2>
            </div>
          </div>

          <div class="p-6 space-y-6 text-gray-300 leading-relaxed">
            <p class="text-lg">
              <strong class="text-teal-400">ME-Frp TPCA</strong> 
              是自发性的、开发者群体为主的社区组织。
            </p>
            <p>
              从 <strong class="text-white">2025/8/13</strong> 的上午直至今日，在Development路上不断学习、不断前行的身影，时时映在我们身上。
            </p>
            <p>
              我们是一位位不畏难、不退缩、勇创新、敢作为的伙伴携手共成的团体。现归属于<strong class="text-white">幻缘网络</strong>旗下。
            </p>
            <p>
              专注于<strong class="text-teal-400">ME-Frp第三方客户端开发</strong>。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="py-8 lg:py-12 relative" style="background: #0F172A;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref="timelineRef"
          class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
          :class="{ 'visible': timelineVisible }"
        >
          <div class="p-6 border-b border-white/10">
            <div class="flex items-center space-x-3">
              <UIcon name="i-lucide-clock" class="size-6 text-teal-400" />
              <h2 class="text-2xl font-bold text-white">发展历程</h2>
            </div>
          </div>

          <div class="p-6 space-y-6">
            <div 
              v-for="milestone in timeline" 
              :key="milestone.date"
              class="glass-card flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 p-6 rounded-lg hover-lift overflow-hidden"
            >
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center w-12 h-12 rounded-full" style="background: rgba(20, 184, 166, 0.2);">
                  <UIcon :name="milestone.icon" class="size-6 text-teal-400" />
                </div>
              </div>
              <div class="flex-grow">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 class="text-lg font-semibold text-white">{{ milestone.title }}</h3>
                  <span class="text-sm text-teal-400">{{ milestone.date }}</span>
                </div>
                <p class="text-gray-300">{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心价值 -->
    <section class="py-8 lg:py-12 relative" style="background: linear-gradient(180deg, #0F172A 0%, #111827 100%);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref="valuesRef"
          class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
          :class="{ 'visible': valuesVisible }"
        >
          <div class="p-6 border-b border-white/10">
            <div class="flex items-center space-x-3">
              <UIcon name="i-lucide-heart" class="size-6 text-teal-400" />
              <h2 class="text-2xl font-bold text-white">核心价值</h2>
            </div>
          </div>

          <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="value in values" 
              :key="value.title"
              class="glass-card text-center space-y-4 p-6 rounded-lg hover-lift overflow-hidden"
            >
              <div class="flex justify-center">
                <div class="p-4 rounded-full" style="background: rgba(20, 184, 166, 0.2);">
                  <UIcon :name="value.icon" class="size-8 text-teal-400" />
                </div>
              </div>
              <h3 class="text-xl font-semibold text-white">{{ value.title }}</h3>
              <p class="text-gray-300">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="py-8 lg:py-12 relative" style="background: #0F172A;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref="contactRef"
          class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
          :class="{ 'visible': contactVisible }"
        >
          <div class="p-6 border-b border-white/10">
            <div class="flex items-center space-x-3">
              <UIcon name="i-lucide-phone" class="size-6 text-teal-400" />
              <h2 class="text-2xl font-bold text-white">联系我们</h2>
            </div>
          </div>

          <div class="p-6 text-center space-y-6">
            <p class="text-lg text-gray-300">
              如果您有任何问题或建议，欢迎通过以下方式联系我们
            </p>
            <div class="flex justify-center">
              <UButton 
                size="lg" 
                color="primary"
                to="https://github.com/yealqp/ME-Frp_TPCA_Website"
                target="_blank"
                class="btn-glow cursor-pointer"
              >
                <UIcon name="i-lucide-github" class="size-5 mr-2" />
                GitHub
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '关于我们',
  link: [
    { rel: 'canonical', href: 'https://mefrp-tpca.yealqp.cn/about' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: '关于我们 - ME-Frp 第三方客户端联盟',
        description: '了解 ME-Frp 第三方客户端联盟的发展历程、核心价值和团队成员',
        url: 'https://mefrp-tpca.yealqp.cn/about',
        mainEntity: {
          '@type': 'Organization',
          name: 'ME-Frp 第三方客户端联盟',
          foundingDate: '2025-08-13',
          description: '专注于 ME-Frp 第三方客户端开发的社区组织'
        }
      })
    }
  ]
})

// SEO 优化
useSeoMeta({
  title: '关于我们 | ME-Frp 第三方客户端联盟',
  ogTitle: '关于我们 - ME-Frp 第三方客户端联盟',
  description: '了解 ME-Frp 第三方客户端联盟的发展历程、核心价值和团队成员，我们是一群热爱技术、勇于创新的开发者。',
  ogDescription: '了解 ME-Frp 第三方客户端联盟的发展历程、核心价值和团队成员',
  ogImage: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/og-image.png',
  ogUrl: 'https://mefrp-tpca.yealqp.cn/about',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

// 滚动动画
const { elementRef: whoWeAreRef, isVisible: whoWeAreVisible } = useScrollAnimation()
const { elementRef: timelineRef, isVisible: timelineVisible } = useScrollAnimation()
const { elementRef: valuesRef, isVisible: valuesVisible } = useScrollAnimation()
const { elementRef: contactRef, isVisible: contactVisible } = useScrollAnimation()

const timeline = ref([
  {
    date: '2025/07/11',
    title: '写下第一行代码',
    description: 'LX-ME-Frp-Launcher 的第一行代码被写下，命运的齿轮悄然转动',
    icon: 'i-lucide-code'
  },
  {
    date: '2025/08/01',
    title: '逐渐扩大',
    description: 'LX-ME-Frp-Launcher 的开发纷纷让其他开发者也开始开发ME-Frp第三方客户端',
    icon: 'i-lucide-trending-up'
  },
  {
    date: '2025/8/13',
    title: 'ME-Frp TPCA成立',
    description: 'ME-Frp第三方客户端的开发者们聚集在一起，ME-Frp TPCA正式成立',
    icon: 'i-lucide-flag'
  },
  {
    date: '未来',
    title: '展望未来',
    description: '我们会变得更好...',
    icon: 'i-lucide-rocket'
  }
])

const values = ref([
  {
    title: '不畏难',
    description: '面对技术挑战，我们勇于探索，永不退缩',
    icon: 'i-lucide-code'
  },
  {
    title: '勇创新',
    description: '持续创新，为用户提供更好的产品体验',
    icon: 'i-lucide-rocket'
  },
  {
    title: '敢作为',
    description: '积极行动，用实际成果证明我们的价值',
    icon: 'i-lucide-users'
  },
  {
    title: '同努力',
    description: '团结协作，共同成长，共创美好未来',
    icon: 'i-lucide-hand'
  }
])
</script>