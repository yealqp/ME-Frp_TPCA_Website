<template>
  <div>
    <!-- 页面标题 -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <img src="https://image.mefrp-tpca.yealqp.cn/images/views/icon/xl_icon.webp" alt="ME-Frp-XL-Client 图标 - Tauri 2 框架开发的免费内网穿透客户端"
          class="w-12 h-12 rounded-lg" width="48" height="48" />
        <div>
          <h1 class="text-3xl font-bold text-white">XL Client</h1>
          <p class="text-gray-400">基于 Tauri 2 框架开发的跨平台 ME-Frp 内网穿透客户端</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-400">Vue3</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400">TypeScript</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400">Naive UI</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400">Pinia</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">Vite</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400">Tauri 2</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-orange-500/20 text-orange-400">Rust</span>
      </div>
    </div>

    <!-- 项目介绍 -->
    <div ref="introRef" class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': introVisible }">
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">项目介绍</h2>
      </div>

      <div class="p-6 space-y-4 text-gray-300">
        <p>
          XL Client 是由 <strong class="text-primary-400">yealqp</strong> 使用 Tauri 2 框架开发的 ME-Frp 第三方客户端。
          界面高仿官网样式，可能是目前收录的三个客户端中最美观的一个，也可能也是包体最小的一个，亦或是bug最少的一个。
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <UIcon name="i-lucide-sparkles" class="size-5 text-primary-400" />
              主要特性
            </h3>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>基于 Tauri 2 框架，性能优异</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>界面高仿官网样式，美观易用</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>主题高度可自定义，预设多种主题</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>拥有开机自启动、系统托盘等功能</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>支持 Token 登录功能</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <UIcon name="i-lucide-monitor" class="size-5 text-primary-400" />
              系统要求
            </h3>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-monitor" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Windows 10/11</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-monitor" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Windows Server 2019/2022/2025</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-simple-icons-linux" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>主流 Linux x64 发行版</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-globe" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>需要安装 WebView2 运行时 (对于 Windows 系统)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 预览图 -->
    <div ref="previewRef" class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': previewVisible }">
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">预览图</h2>
      </div>

      <div class="p-6 relative rounded-lg overflow-hidden bg-gray-900/50">
        <!-- 图片容器 -->
        <div class="relative h-96 flex items-center justify-center">
          <img :src="previewImages[currentImageIndex].src"
            :alt="previewImages[currentImageIndex].alt + ' - ME-Frp-XL-Client 界面截图'"
            class="max-w-full max-h-full object-contain cursor-pointer"
            :loading="currentImageIndex === 0 ? 'eager' : 'lazy'"
            :fetchpriority="currentImageIndex === 0 ? 'high' : 'auto'"
            @click="openImageModal(previewImages[currentImageIndex])" />

          <!-- 标题遮罩 -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p class="text-white text-center font-medium">{{ previewImages[currentImageIndex].alt }}</p>
          </div>
        </div>

        <!-- 导航箭头 -->
        <button @click="previousImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          :disabled="previewImages.length <= 1">
          <UIcon name="i-lucide-chevron-left" class="size-5" />
        </button>

        <button @click="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          :disabled="previewImages.length <= 1">
          <UIcon name="i-lucide-chevron-right" class="size-5" />
        </button>

        <!-- 指示器 -->
        <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button v-for="(image, index) in previewImages" :key="index" @click="currentImageIndex = index"
            class="w-2 h-2 rounded-full transition-colors"
            :class="index === currentImageIndex ? 'bg-white' : 'bg-white/50'" />
        </div>
      </div>
    </div>

    <!-- 功能清单 -->
    <div ref="featureRef" class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': featureVisible }">
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">功能清单</h2>
      </div>

      <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white/5 rounded-lg p-4">
          <h3 class="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-user" class="size-5 text-primary-400" />
            账户功能
          </h3>
          <ul class="space-y-1.5 text-gray-300 text-sm">
            <li>· 账密登录/Token 登录</li>
            <li>· 图标查看流量历史</li>
            <li>· CDK兑换以及兑换历史</li>
            <li>· 可查看用户操作日志</li>
          </ul>
        </div>
        <div class="bg-white/5 rounded-lg p-4">
          <h3 class="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-arrow-right" class="size-5 text-primary-400" />
            隧道管理
          </h3>
          <ul class="space-y-1.5 text-gray-300 text-sm">
            <li>· 全类型隧道创建与配置</li>
            <li>· 一键启动、停止与重启</li>
            <li>· 隧道名称与连接地址可导出图片</li>
            <li>· 运行状态实时监控</li>
            <li>· AI分析日志功能</li>
          </ul>
        </div>
        <div class="bg-white/5 rounded-lg p-4">
          <h3 class="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-globe" class="size-5 text-primary-400" />
            界面与体验
          </h3>
          <ul class="space-y-1.5 text-gray-300 text-sm">
            <li>· 高仿官网界面设计</li>
            <li>· 高可自定义主题系统</li>
            <li>· 开机自启动支持</li>
            <li>· 系统托盘后台驻留</li>
            <li>· 跨平台 Windows / Linux</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 下载安装 -->
    <div ref="downloadRef" class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': downloadVisible }">
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">下载安装</h2>
      </div>

      <div class="p-6 space-y-6">
        <div class="text-center">
          <UButton size="lg" color="primary" to="https://alist.yealqp.cn/ME-Frp%20XL%20Client" target="_blank"
            class="btn-glow cursor-pointer">
            <UIcon name="i-lucide-download" class="size-5 mr-2" />
            OpenList 下载
          </UButton>
        </div>

        <div class="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-alert-triangle" class="size-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-yellow-400">系统要求(Windows)</h4>
              <p class="text-gray-300 text-sm mt-1">在使用前请确认您的电脑上安装了 WebView2（WebView2 已经在 Windows 10 1803 以上和更高版本的
                Windows 上默认安装）。</p>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-info" class="size-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-blue-400">使用说明</h4>
              <p class="text-gray-300 text-sm mt-1">请使用 ME-Frp 官网账号登录。需要更多功能或报告 Bug 请向邮箱 im@yealqp.cn 发送邮件。</p>
            </div>
          </div>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-3">安装步骤</h3>
          <ol class="space-y-2 text-gray-300">
            <li class="flex items-start space-x-3">
              <span
                class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>从官方链接下载适合您操作系统的安装包</span>
            </li>
            <li class="flex items-start space-x-3">
              <span
                class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>运行安装程序，按照提示完成安装</span>
            </li>
            <li class="flex items-start space-x-3">
              <span
                class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>启动程序，输入您的 ME-Frp 账户信息</span>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <!-- 更新记录 -->
    <div ref="updateRef" class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': updateVisible }">
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">更新记录</h2>
      </div>

      <!-- 使用优化的 ChangelogList 组件 -->
      <ChangelogList :updates="updates" :loading="loading" :error="error" :page-size="5" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { SITE_URL, SITE_NAME, OG_IMAGE, GITHUB_REPO } from "~/data/constants";

// 使用文档布局
definePageMeta({
  layout: 'docs'
})

// 滚动动画
const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation()
const { elementRef: previewRef, isVisible: previewVisible } = useScrollAnimation()
const { elementRef: featureRef, isVisible: featureVisible } = useScrollAnimation()
const { elementRef: downloadRef, isVisible: downloadVisible } = useScrollAnimation()
const { elementRef: updateRef, isVisible: updateVisible } = useScrollAnimation()

// 防止未使用警告
void introRef
void previewRef
void featureRef
void downloadRef
void updateRef

// 使用版本管理 composable
const { getVersion, fetchAllVersions } = useProductVersions()

// 获取当前产品版本
const currentVersion = computed(() => getVersion('xl'))

// 页面元数据 - 超级深度 SEO 优化
useHead({
  title: 'ME-Frp-XL-Client 文档 - Tauri 2 跨平台内网穿透客户端下载与使用指南',
  link: [
    { rel: 'canonical', href: `${SITE_URL}/docs/xl` },
    { rel: 'alternate', hreflang: 'zh-CN', href: `${SITE_URL}/docs/xl` },
    { rel: 'alternate', hreflang: 'zh-Hans', href: `${SITE_URL}/docs/xl` },
    { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/docs/xl` }
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#3b82f6' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    // SEO 增强元数据
    { name: 'application-name', content: 'ME-Frp-XL-Client' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'resource-type', content: 'document' },
    { name: 'distribution', content: 'global' },
    { name: 'coverage', content: 'China' },
    { name: 'author', content: 'yealqp' },
    { name: 'copyright', content: `Copyright 2026 ${SITE_NAME}` }
  ],
  script: [
    // --- Schema 1: SoftwareApplication（增强版） ---
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['SoftwareApplication', 'Product'],
        name: 'ME-Frp-XL-Client',
        alternateName: ['ME-Frp XL Client', 'XL Client', 'ME-Frp 客户端', 'XL-ME-Frp-Launcher'],
        applicationCategory: 'NetworkApplication',
        applicationSubCategory: '内网穿透工具',
        operatingSystem: 'Windows 10, Windows 11, Windows Server 2019, Windows Server 2022, Windows Server 2025, Linux (x86_64)',
        softwareVersion: currentVersion.value,
        description: '基于 Tauri 2 + Vue3 + TypeScript 开发的 ME-Frp 第三方客户端，提供内网穿透、端口映射、远程桌面、Web 服务器、游戏联机等功能。界面高仿官网样式，性能优异，包体小巧，支持开机自启、系统托盘、Token 登录、原生人机验证等特性。',
        author: {
          '@type': 'Person',
          name: 'yealqp',
          email: 'im@yealqp.cn',
          url: 'https://github.com/Yealqp'
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'CNY',
          availability: 'https://schema.org/InStock',
          category: '免费软件'
        },
        review: {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '4.8',
            bestRating: '5',
            worstRating: '1'
          },
          author: {
            '@type': 'Person',
            name: 'ME-Frp TPCA'
          }
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '150',
          bestRating: '5',
          worstRating: '1'
        },
        downloadUrl: 'https://alist.yealqp.cn/ME-Frp%20XL%20Client',
        installUrl: 'https://alist.yealqp.cn/ME-Frp%20XL%20Client',
        softwareRequirements: 'WebView2 Runtime',
        releaseNotes: `${SITE_URL}/docs/xl#updates`,
        screenshot: [
          'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/home.png',
          'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/create.png',
          'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/tunnel.png',
          'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/nodes.png',
          'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/login.png'
        ],
        thumbnailUrl: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/xl_icon.webp',
        featureList: [
          '基于 Tauri 2 框架，性能优异',
          '界面高仿官网样式，美观易用',
          '原生人机验证功能',
          '开机自启动',
          '系统托盘支持',
          'Token 登录功能',
          '包体小巧，启动迅速',
          '隧道管理',
          '节点监控',
          '端口映射',
          '内网穿透',
          '远程访问',
          'AI 日志分析'
        ],
        applicationSuite: 'ME-Frp 第三方客户端系列',
        memoryRequirements: '最低 256 MB RAM',
        storageRequirements: '最低 200 MB 可用空间',
        processorRequirements: '1 GHz 或更快的处理器',
        permissions: '网络访问, 系统托盘',
        datePublished: '2025-08-01',
        dateModified: new Date().toISOString().split('T')[0],
        keywords: '内网穿透, 端口映射, Tauri, Vue3, TypeScript, ME-Frp, frp客户端, 远程桌面, 游戏联机, Windows客户端, 免费内网穿透'
      })
    },
    // --- Schema 2: TechArticle（增强版） ---
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'ME-Frp-XL-Client 详细使用文档 - 安装配置与功能指南',
        description: '完整的 ME-Frp-XL-Client 安装教程、配置指南和功能说明。涵盖系统要求、下载安装、隧道管理、节点监控、账户功能等全部特性，帮助用户快速上手使用 Tauri 2 跨平台内网穿透客户端。',
        author: {
          '@type': 'Person',
          name: 'yealqp',
          url: 'https://github.com/Yealqp'
        },
        datePublished: '2026-02-24',
        dateModified: new Date().toISOString().split('T')[0],
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: `${SITE_URL}`,
          logo: {
            '@type': 'ImageObject',
            url: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/favicon.ico'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/docs/xl`
        },
        image: {
          '@type': 'ImageObject',
          url: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/home.png',
          width: 1200,
          height: 675
        },
        articleSection: '软件文档',
        articleBody: 'ME-Frp-XL-Client 是基于 Tauri 2 框架开发的跨平台内网穿透客户端，支持 Windows 10/11 和 Linux 系统。提供账户登录、Token 登录、隧道创建与管理、节点监控、AI 日志分析、CDK 兑换等功能。界面高仿官网设计，支持高度自定义主题、开机自启动、系统托盘等特性。',
        about: {
          '@type': 'Thing',
          name: '内网穿透',
          sameAs: 'https://baike.baidu.com/item/内网穿透'
        },
        mentions: [
          { '@type': 'Thing', name: 'Tauri 2', sameAs: 'https://v2.tauri.app' },
          { '@type': 'Thing', name: 'ME-Frp' },
          { '@type': 'Thing', name: '端口映射' }
        ],
        keywords: 'ME-Frp-XL-Client, 内网穿透, 使用文档, 安装指南, 配置教程, Tauri 2 客户端, frp 客户端, 端口映射教程, 远程访问工具'
      })
    },
    // --- Schema 3: BreadcrumbList ---
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: '首页',
            item: `${SITE_URL}`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '文档中心',
            item: `${SITE_URL}/docs`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'ME-Frp-XL-Client 文档',
            item: `${SITE_URL}/docs/xl`
          }
        ]
      })
    },
    // --- Schema 4: FAQPage（常见问题结构化数据） ---
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'ME-Frp-XL-Client 支持哪些操作系统？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ME-Frp-XL-Client 支持 Windows 10/11、Windows Server 2019/2022/2025 以及主流 Linux x86_64 发行版。Windows 系统需要安装 WebView2 运行时（Windows 10 1803 及以上版本已默认安装）。'
            }
          },
          {
            '@type': 'Question',
            name: 'ME-Frp-XL-Client 是免费软件吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '是的，ME-Frp-XL-Client 是完全免费的第三方客户端软件。您可以从 OpenList 下载中心免费下载并安装使用。'
            }
          },
          {
            '@type': 'Question',
            name: '如何使用 ME-Frp-XL-Client 创建隧道？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '下载安装后，启动程序并使用您的 ME-Frp 官网账号或 Token 登录。在隧道管理页面点击创建隧道，选择隧道类型并填写配置参数，保存后即可一键启动隧道。支持全类型隧道创建，运行状态可实时监控。'
            }
          },
          {
            '@type': 'Question',
            name: 'ME-Frp-XL-Client 有哪些特色功能？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '特色功能包括：基于 Tauri 2 的高性能跨平台支持、高仿官网的精致界面、高度可自定义的主题系统、开机自启动与系统托盘、Token 登录、原生人机验证、AI 日志分析、隧道连接地址导出图片、CDK 兑换及兑换历史查询等。'
            }
          },
          {
            '@type': 'Question',
            name: 'ME-Frp-XL-Client 和 XL Client 是什么关系？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ME-Frp-XL-Client 通常简称为 XL Client，两者是同一款产品。它是由 yealqp 使用 Tauri 2 框架开发的 ME-Frp 第三方客户端。'
            }
          }
        ]
      })
    },
    // --- Schema 5: HowTo（安装步骤结构化数据） ---
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'ME-Frp-XL-Client 安装步骤',
        description: '按照以下步骤完成 ME-Frp-XL-Client 的安装和配置',
        estimatedCost: { '@type': 'MonetaryAmount', value: '0', currency: 'CNY' },
        supply: ['Windows 或 Linux 电脑', 'WebView2 运行时（Windows 所需）'],
        tool: ['ME-Frp-XL-Client 安装包', 'ME-Frp 官网账号'],
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: '下载安装包',
            text: '从 OpenList 下载中心下载适合您操作系统的 ME-Frp-XL-Client 安装包。',
            url: 'https://alist.yealqp.cn/ME-Frp%20XL%20Client'
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: '运行安装程序',
            text: '运行下载的安装程序，按照安装向导的提示完成安装过程。',
            url: `${SITE_URL}/docs/xl#下载安装`
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: '登录并开始使用',
            text: '启动程序，输入您的 ME-Frp 账户信息或使用 Token 登录，即可开始创建和管理隧道。',
            url: `${SITE_URL}/docs/xl#下载安装`
          }
        ]
      })
    }
  ]
})

// SEO 优化 - 深度元数据
useSeoMeta({
  title: `ME-Frp-XL-Client 文档 | ${SITE_NAME} - Tauri 2 跨平台内网穿透工具 免费下载`,
  ogTitle: `ME-Frp-XL-Client 文档 | ${SITE_NAME} - 基于 Tauri 2 的内网穿透客户端 免费下载`,
  description: 'ME-Frp-XL-Client 是免费开源的 Tauri 2 跨平台内网穿透客户端。支持 Windows 10/11/Linux，提供端口映射、隧道管理、节点监控、远程桌面、AI 日志分析等功能。界面美观、包体极小、支持开机自启与系统托盘。立即下载使用！',
  ogDescription: 'ME-Frp-XL-Client 详细使用文档 - 基于 Tauri 2 框架的免费跨平台内网穿透客户端，支持端口映射、远程访问、Web 服务、游戏联机，包含完整的安装配置和使用指南',
  keywords: 'ME-Frp-XL-Client, ME-Frp, 内网穿透, 端口映射, Tauri 2, Vue3, TypeScript, Naive UI, Pinia, Vite, Rust, Windows 客户端, 跨平台, 远程桌面, 远程访问, Web 服务器, 游戏联机, 开机自启, 系统托盘, Token 登录, 人机验证, WebView2, frp 客户端, 第三方客户端, yealqp, 内网穿透工具, 端口转发, NAT 穿透, 反向代理, 隧道管理, 节点监控, 免费内网穿透软件',
  ogImage: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/home.png',
  ogImageWidth: 1200,
  ogImageHeight: 675,
  ogImageAlt: 'ME-Frp-XL-Client 主页面界面截图 - Tauri 2 内网穿透客户端',
  ogUrl: `${SITE_URL}/docs/xl`,
  ogType: 'article',
  ogSiteName: SITE_NAME,
  ogLocale: 'zh_CN',
  ogSeeAlso: [
    `${SITE_URL}/docs`,
    `${SITE_URL}/products`,
    GITHUB_REPO
  ],
  twitterCard: 'summary_large_image',
  twitterTitle: 'ME-Frp-XL-Client - 免费开源的 Tauri 2 跨平台内网穿透工具',
  twitterDescription: '免费开源的 Tauri 2 内网穿透客户端，支持 Windows/Linux，包体小巧、界面美观、功能强大',
  twitterImage: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/home.png',
  twitterImageAlt: 'ME-Frp-XL-Client 主界面截图 - 基于 Tauri 2 的免费内网穿透工具',
  author: 'yealqp',
  publisher: SITE_NAME,
  applicationName: 'ME-Frp-XL-Client',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  googlebot: 'index, follow, max-image-preview:large',
  language: 'zh-CN',
  locale: 'zh_CN',
  articleAuthor: 'yealqp',
  articlePublisher: `${SITE_URL}`,
  articleSection: '软件文档',
  articleTag: 'Tauri, Vue3, TypeScript, 内网穿透, ME-Frp, 端口映射, Windows 客户端, 跨平台, frp',
  articlePublishedTime: '2026-02-24T00:00:00+08:00',
  articleModifiedTime: new Date().toISOString()
})

// 预览图数据（优化 alt 文本，提升图片 SEO）
const previewImages = [
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/login.png', alt: 'ME-Frp-XL-Client 登录页面 - 支持账号密码和 Token 两种登录方式' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/home.png', alt: 'ME-Frp-XL-Client 主页面 - Tauri 2 内网穿透客户端仪表盘总览' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/create.png', alt: 'ME-Frp-XL-Client 创建隧道页面 - 支持全类型隧道配置' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/tunnel.png', alt: 'ME-Frp-XL-Client 隧道管理页面 - 实时监控隧道运行状态' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/nodes.png', alt: 'ME-Frp-XL-Client 节点监控页面 - 查看各节点实时状态与延迟' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/user.png', alt: 'ME-Frp-XL-Client 用户中心 - 流量统计与操作日志' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/setting.png', alt: 'ME-Frp-XL-Client 配置设置页面 - 个性化配置选项' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/themes.png', alt: 'ME-Frp-XL-Client 主题设置 - 高度可自定义的多种预设主题' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/about.png', alt: 'ME-Frp-XL-Client 关于页面 - 版本信息与开发团队' }
]

// 更新日志
const { updates, loading, error, fetchChangelog } = useProductChangelog('xl')

// 轮播图状态
const currentImageIndex = ref(0)

// 轮播图导航
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % previewImages.length
}

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 ? previewImages.length - 1 : currentImageIndex.value - 1
}

// 打开图片模态框
const openImageModal = (image) => {
  window.open(image.src, '_blank')
}

// 组件挂载时初始化
onMounted(() => {
  fetchAllVersions()
  fetchChangelog()
})
</script>