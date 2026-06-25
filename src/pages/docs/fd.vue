<!--
  FrpDash 文档页
  说明：本页为新增内容，介绍面向安卓端的 ME-Frp 第三方客户端 FrpDash。
  版本号与更新日志均来自开发者提供的接口（api.0n.pub），下载统一引导至官网 https://fd.0n.pub/。
-->
<template>
  <div>
    <!-- 页面标题 -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <img src="https://fd.0n.pub/img/logo-192.png" alt="FrpDash"
          class="w-12 h-12 rounded-lg" />
        <div>
          <h1 class="text-3xl font-bold text-white">FrpDash</h1>
          <p class="text-gray-400">面向安卓端的 ME-Frp 第三方客户端</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-400">Android</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">Java 原生</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400">内置 frpc</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400">免 Root</span>
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
          <strong class="text-primary-400">FrpDash</strong> 是由
          <strong class="text-primary-400">zhai</strong> 使用 Java 原生开发，面向安卓端的 ME-Frp 第三方客户端。
          它把登录、节点选择、隧道创建、frpc 启动和日志查看这些常用操作集中到手机里，
          让临时调试、备用机长期保活、外出远程访问都不再依赖电脑常驻。
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
                <span>Java 原生安卓端</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>免 Root，内置 frpc</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>四架构 APK</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>自动处理人机验证</span>
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
                <UIcon name="i-lucide-smartphone" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Android 5.0 及以上</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-cpu" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>推荐 Android 8.0+</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-cpu" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>支持 ARM / x86</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-user-check" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>需要 ME-Frp 账号</span>
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
        <div class="relative h-96 flex items-center justify-center">
          <img :key="currentImageIndex" :src="previewImages[currentImageIndex].src"
            :alt="previewImages[currentImageIndex].alt + ' - FrpDash 界面截图'"
            class="max-h-full w-auto object-contain cursor-pointer rounded-lg" loading="lazy"
            @click="openImageModal(previewImages[currentImageIndex])" />

          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p class="text-white text-center font-medium">{{ previewImages[currentImageIndex].alt }}</p>
          </div>
        </div>

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

        <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button v-for="(image, index) in previewImages" :key="index" @click="currentImageIndex = index"
            class="w-2 h-2 rounded-full transition-colors"
            :class="index === currentImageIndex ? 'bg-white' : 'bg-white/50'" />
        </div>
      </div>
    </div>

    <!-- 图片放大模态框 -->
    <Teleport to="body">
      <div v-if="showImageModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        @click="showImageModal = false">
        <div class="relative max-w-[90vw] max-h-[90vh]">
          <img :src="modalImage.src" :alt="modalImage.alt" class="max-w-full max-h-[90vh] object-contain rounded-lg" />
          <button @click="showImageModal = false"
            class="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors">
            <UIcon name="i-lucide-x" class="size-5" />
          </button>
          <p class="text-white text-center mt-4 font-medium">{{ modalImage.alt }}</p>
        </div>
      </div>
    </Teleport>

    <!-- 下载安装 -->
    <div ref="downloadRef" class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': downloadVisible }">
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">下载安装</h2>
      </div>

      <div class="p-6 space-y-6">
        <!-- 下载统一引导至 FrpDash 官网，由官网提供多节点测速下载 -->
        <div class="text-center">
          <UButton size="lg" color="primary" to="https://fd.0n.pub/" target="_blank"
            class="btn-glow cursor-pointer">
            <UIcon name="i-lucide-download" class="size-5 mr-2" />
            前往官网下载（{{ fdVersion }}）
          </UButton>
        </div>

        <div class="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-info" class="size-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-blue-400">下载说明</h4>
              <p class="text-gray-300 text-sm mt-1">官网提供多个就近下载节点，可选择延迟较低的节点获取安装包。安装包为 APK 格式，需在安卓设备上安装。</p>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-alert-triangle" class="size-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-yellow-400">安装提示</h4>
              <p class="text-gray-300 text-sm mt-1">首次安装若被系统拦截，请在系统设置中允许“安装未知来源应用”后再行安装。使用 ME-Frp 官网账号登录即可。</p>
            </div>
          </div>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-3">安装步骤</h3>
          <ol class="space-y-2 text-gray-300">
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>前往官网 <a href="https://fd.0n.pub/" target="_blank" class="text-primary-400">fd.0n.pub</a>，选择就近节点下载 APK</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>在安卓设备上打开 APK 进行安装（如有拦截，允许未知来源安装）</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>使用 ME-Frp 账户登录</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>选择节点、填写端口并创建隧道，点击启动即可使用</span>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <!-- 功能清单 -->
    <div ref="guideRef" class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': guideVisible }">
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">功能清单</h2>
      </div>

      <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white/5 rounded-lg p-4">
          <h3 class="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-user" class="size-5 text-primary-400" />
            账户与权益
          </h3>
          <ul class="space-y-1.5 text-gray-300 text-sm">
            <li>· 邮箱注册、密码登录</li>
            <li>· 每日签到领取流量（自动过验证）</li>
            <li>· 权益抽取，支持单抽与十连抽</li>
            <li>· 修改密码、重置访问密钥</li>
            <li>· 操作日志查询与统计</li>
          </ul>
        </div>
        <div class="bg-white/5 rounded-lg p-4">
          <h3 class="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-arrow-right" class="size-5 text-primary-400" />
            隧道管理
          </h3>
          <ul class="space-y-1.5 text-gray-300 text-sm">
            <li>· 创建 TCP / UDP 隧道</li>
            <li>· 启用、禁用与强制下线</li>
            <li>· 一键获取空闲远程端口</li>
            <li>· 本地直接运行 frpc 并保活</li>
            <li>· 多隧道并发与独立日志</li>
          </ul>
        </div>
        <div class="bg-white/5 rounded-lg p-4">
          <h3 class="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-globe" class="size-5 text-primary-400" />
            节点与系统
          </h3>
          <ul class="space-y-1.5 text-gray-300 text-sm">
            <li>· 节点列表与连接地址查看</li>
            <li>· 节点实时状态与负载监控</li>
            <li>· 系统公告与弹窗公告展示</li>
            <li>· 自动检查与更新版本</li>
            <li>· 深色主题与四标签导航</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 更新记录 -->
    <div ref="updateRef" class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': updateVisible }">
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">更新记录</h2>
      </div>
      <ChangelogList :updates="updates" :loading="loading" :error="error" :page-size="5" />
    </div>

    <!-- 相关链接 -->
    <div ref="linksRef" class="glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': linksVisible }">
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">相关链接</h2>
      </div>

      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://fd.0n.pub/" target="_blank"
            class="glass-card p-4 rounded-lg hover-lift flex items-center space-x-3 cursor-pointer">
            <UIcon name="i-lucide-globe" class="size-6 text-primary-400" />
            <div>
              <h3 class="font-medium text-white">FrpDash 官网</h3>
              <p class="text-sm text-gray-400">下载与了解详情</p>
            </div>
          </a>

          <a href="https://www.mefrp.com" target="_blank"
            class="glass-card p-4 rounded-lg hover-lift flex items-center space-x-3 cursor-pointer">
            <UIcon name="i-lucide-external-link" class="size-6 text-primary-400" />
            <div>
              <h3 class="font-medium text-white">ME-Frp 官网</h3>
              <p class="text-sm text-gray-400">注册账号</p>
            </div>
          </a>

          <!-- 【新增】Bug 反馈：通过邮件联系 FrpDash 开发者 -->
          <a href="mailto:2088264797@qq.com?subject=FrpDash 反馈"
            class="glass-card p-4 rounded-lg hover-lift flex items-center space-x-3 cursor-pointer md:col-span-2">
            <UIcon name="i-lucide-mail" class="size-6 text-primary-400" />
            <div>
              <h3 class="font-medium text-white">Bug 反馈与联系开发者</h3>
              <p class="text-sm text-gray-400">2088264797@qq.com（请附设备型号、系统版本与复现步骤）</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SITE_URL, SITE_NAME, OG_IMAGE } from "~/data/constants";

// 使用文档布局
definePageMeta({
  layout: 'docs'
})

// 滚动动画
const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation()
const { elementRef: previewRef, isVisible: previewVisible } = useScrollAnimation()
const { elementRef: downloadRef, isVisible: downloadVisible } = useScrollAnimation()
const { elementRef: guideRef, isVisible: guideVisible } = useScrollAnimation()
const { elementRef: updateRef, isVisible: updateVisible } = useScrollAnimation()
const { elementRef: linksRef, isVisible: linksVisible } = useScrollAnimation()

// 版本号：复用统一的版本管理 composable，从 alist 获取 FrpDash 版本
const { versions, fetchAllVersions } = useProductVersions()
const fdVersion = computed(() => versions.value.fd)

// 预览图：图片统一由 FrpDash 官网 fd.0n.pub 提供
const previewImages = [
  { src: 'https://fd.0n.pub/img/home.png', alt: '首页' },
  { src: 'https://fd.0n.pub/img/tunnel.png', alt: '隧道管理' },
  { src: 'https://fd.0n.pub/img/create.png', alt: '创建隧道' },
  { src: 'https://fd.0n.pub/img/node.png', alt: '节点监控' },
  { src: 'https://fd.0n.pub/img/profile.png', alt: '个人中心' }
]

const currentImageIndex = ref(0)
const showImageModal = ref(false)
const modalImage = ref({ src: '', alt: '' })

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % previewImages.length
}

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 ? previewImages.length - 1 : currentImageIndex.value - 1
}

const openImageModal = (image) => {
  modalImage.value = image
  showImageModal.value = true
}

// 更新日志
const { updates, loading, error, fetchChangelog } = useProductChangelog('fd')

// 组件挂载时初始化版本号与更新日志
onMounted(() => {
  fetchAllVersions()
  fetchChangelog()
})

// 页面元数据
useHead({
  title: 'FrpDash 文档',
  link: [
    { rel: 'canonical', href: `${SITE_URL}/docs/fd` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'FrpDash',
        applicationCategory: 'NetworkApplication',
        operatingSystem: 'Android',
        description: '面向安卓端的 ME-Frp 第三方客户端，Java 原生开发，内置 frpc 四架构二进制，免 Root 开箱即用',
        author: { '@type': 'Person', name: 'zhai' },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'CNY'
        }
      })
    }
  ]
})

// SEO 优化
useSeoMeta({
  title: `FrpDash 文档 | ${SITE_NAME}`,
  ogTitle: `FrpDash 文档 - ${SITE_NAME}`,
  description: 'FrpDash 是由 zhai 使用 Java 原生开发、面向安卓端的 ME-Frp 第三方客户端，内置 frpc 四架构二进制，免 Root 开箱即用，支持隧道管理、节点监控、签到与账户操作。',
  ogDescription: 'FrpDash 是面向安卓端的 ME-Frp 第三方客户端，Java 原生开发，内置 frpc，免 Root 开箱即用',
  ogImage: 'https://fd.0n.pub/img/logo-512.png',
  ogUrl: `${SITE_URL}/docs/fd`,
  ogType: 'article',
  twitterCard: 'summary_large_image'
})
</script>
