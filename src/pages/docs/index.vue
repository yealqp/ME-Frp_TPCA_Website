<template>
  <div>
    <!-- 文档首页内容 -->
    <div class="space-y-8">
      <!-- 欢迎标题 -->
      <div ref="titleRef" class="text-center scroll-animate" :class="{ 'visible': titleVisible }">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <UIcon name="i-lucide-book-open" class="size-8 text-primary-400" />
          文档中心
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          欢迎来到 ME-Frp 第三方客户端联盟文档中心，这里有详细的使用指南和开发文档
        </p>
      </div>

      <!-- 项目介绍 -->
      <div ref="introRef" class="glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
        :class="{ 'visible': introVisible }">
        <div class="p-6 border-b border-white/10">
          <div class="flex items-center space-x-3">
            <UIcon name="i-lucide-info" class="size-6 text-primary-400" />
            <h2 class="text-2xl font-semibold text-white">项目介绍</h2>
          </div>
        </div>

        <div class="p-6 space-y-6 text-gray-300 leading-relaxed">
          <p class="text-lg">
            <strong class="text-primary-400">ME-Frp TPCA</strong>
            (ME-Frp Third-Party Client Alliance) 是一个专注于 ME-Frp 第三方客户端开发的社区组织。
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-target" class="size-5 text-primary-400" />
                我们的目标
              </h3>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start space-x-2">
                  <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>为用户提供更好的 ME-Frp 使用体验</span>
                </li>
                <li class="flex items-start space-x-2">
                  <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>开发多样化的第三方客户端</span>
                </li>
                <li class="flex items-start space-x-2">
                  <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>促进开源社区的发展</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <UIcon name="i-lucide-rocket" class="size-5 text-primary-400" />
                主要产品
              </h3>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start space-x-2">
                  <UIcon name="i-lucide-box" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>ME-Frp-XL-Client (Tauri)</span>
                </li>
                <li class="flex items-start space-x-2">
                  <UIcon name="i-lucide-box" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>LX-ME-Frp-Launcher (易语言)</span>
                </li>
                <li class="flex items-start space-x-2">
                  <UIcon name="i-lucide-box" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>PML 2 (.NET)</span>
                </li>
                <li class="flex items-start space-x-2">
                  <UIcon name="i-lucide-box" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>ZNext Launcher (WinUI3)</span>
                </li>
                <li class="flex items-start space-x-2">
                  <UIcon name="i-lucide-box" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>Fan-ME-FRP Launcher (Java)</span>
                </li>
                <!-- 【新增】FrpDash 安卓端 -->
                <li class="flex items-start space-x-2">
                  <UIcon name="i-lucide-box" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                  <span>FrpDash (Android)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 快速开始 -->
      <div ref="quickStartRef" class="glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
        :class="{ 'visible': quickStartVisible }">
        <div class="p-6 border-b border-white/10">
          <div class="flex items-center space-x-3">
            <UIcon name="i-lucide-rocket" class="size-6 text-primary-400" />
            <h2 class="text-2xl font-semibold text-white">快速开始</h2>
          </div>
        </div>

        <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(step, index) in quickStartSteps" :key="step.title"
            class="glass-card text-center space-y-4 p-4 rounded-lg hover-lift overflow-hidden cursor-pointer">
            <div class="flex justify-center">
              <div
                class="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/20 text-primary-400 text-lg font-bold">
                {{ index + 1 }}
              </div>
            </div>
            <h3 class="text-lg font-semibold text-white">{{ step.title }}</h3>
            <p class="text-gray-300 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- 联盟文档 -->
      <div ref="allianceRef" class="glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
        :class="{ 'visible': allianceVisible }">
        <div class="p-6 border-b border-white/10">
          <div class="flex items-center space-x-3">
            <UIcon name="i-lucide-landmark" class="size-6 text-primary-400" />
            <h2 class="text-2xl font-semibold text-white">联盟文档</h2>
          </div>
        </div>

        <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink to="/docs/alliance/whitebook"
            class="glass-card block p-4 rounded-lg hover-lift overflow-hidden cursor-pointer">
            <div class="flex items-center space-x-3 mb-3">
              <UIcon name="i-lucide-book-open" class="size-6 text-teal-400" />
              <h3 class="font-semibold text-white">联盟白皮书</h3>
            </div>
            <p class="text-gray-300 text-sm mb-2">了解联盟的起源、发展历程、核心产品生态与未来愿景</p>
            <div class="flex items-center text-primary-400 text-sm">
              <span>阅读更多</span>
              <UIcon name="i-lucide-arrow-right" class="size-4 ml-1" />
            </div>
          </NuxtLink>

          <NuxtLink to="/docs/alliance/members"
            class="glass-card block p-4 rounded-lg hover-lift overflow-hidden cursor-pointer">
            <div class="flex items-center space-x-3 mb-3">
              <UIcon name="i-lucide-scale" class="size-6 text-teal-400" />
              <h3 class="font-semibold text-white">成员行为规范</h3>
            </div>
            <p class="text-gray-300 text-sm mb-2">联盟成员的行为准则、AI 使用原则与技术能力要求</p>
            <div class="flex items-center text-primary-400 text-sm">
              <span>阅读更多</span>
              <UIcon name="i-lucide-arrow-right" class="size-4 ml-1" />
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- 客户端文档链接 -->
      <div ref="clientsRef" class="glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
        :class="{ 'visible': clientsVisible }">
        <div class="p-6 border-b border-white/10">
          <div class="flex items-center space-x-3">
            <UIcon name="i-lucide-file-text" class="size-6 text-primary-400" />
            <h2 class="text-2xl font-semibold text-white">客户端文档</h2>
          </div>
        </div>

        <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <NuxtLink v-for="client in clients" :key="client.id" :to="client.path"
            class="glass-card block p-4 rounded-lg hover-lift overflow-hidden cursor-pointer">
            <div class="flex items-center space-x-3 mb-3">
              <img :src="client.icon" :alt="client.name" class="w-8 h-8 rounded"
                :onerror="client.fallbackIcon ? `if(!this.dataset.fallback){this.dataset.fallback='1';this.src='${client.fallbackIcon}'}` : undefined" />
              <h3 class="font-semibold text-white">{{ client.name }}</h3>
            </div>
            <p class="text-gray-300 text-sm mb-3">{{ client.description }}</p>
            <div class="flex items-center text-primary-400 text-sm">
              <span>查看文档</span>
              <UIcon name="i-lucide-arrow-right" class="size-4 ml-1" />
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- 联系我们 -->
      <div ref="contactRef" class="glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
        :class="{ 'visible': contactVisible }">
        <div class="p-6 border-b border-white/10">
          <div class="flex items-center space-x-3">
            <UIcon name="i-lucide-message-circle" class="size-6 text-primary-400" />
            <h2 class="text-2xl font-semibold text-white">需要帮助？</h2>
          </div>
        </div>

        <div class="p-6 text-center space-y-4">
          <p class="text-gray-300">
            如果您在使用过程中遇到问题，或者有任何建议，欢迎通过以下方式联系我们
          </p>

          <div class="flex justify-center space-x-4">
            <UButton variant="outline" color="primary" :to="GITHUB_REPO"
              target="_blank" class="btn-glow cursor-pointer">
              <UIcon name="i-lucide-github" class="size-4 mr-2" />
              GitHub
            </UButton>

            <UButton variant="outline" color="primary" to="/about" class="btn-glow cursor-pointer">
              <UIcon name="i-lucide-info" class="size-4 mr-2" />
              关于我们
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SITE_URL, SITE_NAME, SITE_SHORT_NAME, SITE_DESCRIPTION, OG_IMAGE, GITHUB_REPO } from "~/data/constants";
import { getDocClients } from "~/data/products";

// 使用文档布局
definePageMeta({
  layout: 'docs'
})

// 滚动动画
const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation()
const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation()
const { elementRef: quickStartRef, isVisible: quickStartVisible } = useScrollAnimation()
const { elementRef: allianceRef, isVisible: allianceVisible } = useScrollAnimation()
const { elementRef: clientsRef, isVisible: clientsVisible } = useScrollAnimation()
const { elementRef: contactRef, isVisible: contactVisible } = useScrollAnimation()

// 页面元数据
useHead({
  title: '文档中心',
  link: [
    { rel: 'canonical', href: `${SITE_URL}/docs` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `文档中心 - ${SITE_NAME}`,
        description: `${SITE_NAME}文档中心，包含所有产品的详细使用指南`,
        url: `${SITE_URL}/docs`
      })
    }
  ]
})

// SEO 优化
useSeoMeta({
  title: `文档中心 | ${SITE_NAME}`,
  ogTitle: `文档中心 - ${SITE_NAME}`,
  description: `${SITE_NAME}文档中心，包含 ME-Frp-XL-Client、LX-ME-Frp-Launcher、PML 2、ZNext Launcher、Fan-ME-FRP Launcher 等所有产品的详细使用指南和安装教程。`,
  ogDescription: `${SITE_NAME}文档中心，包含所有产品的详细使用指南`,
  ogImage: OG_IMAGE,
  ogUrl: `${SITE_URL}/docs`,
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

// 客户端列表（从共享数据获取，保持与产品定义同步）
const { versions, fetchAllVersions } = useProductVersions()
const clients = computed(() => getDocClients(versions.value))

onMounted(() => {
  fetchAllVersions()
})

const quickStartSteps = [
  {
    title: '选择客户端',
    description: '根据您的操作系统和需求选择合适的客户端'
  },
  {
    title: '下载安装',
    description: '从官方渠道下载并安装客户端程序'
  },
  {
    title: '开始使用',
    description: '配置您的 ME-Frp 账户信息并开始使用'
  }
]
</script>
