<template>
  <div>
    <!-- 页面标题 -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <img src="https://image.mefrp-tpca.yealqp.cn/images/views/icon/lx_icon.webp" alt="LX-ME-Frp-Launcher"
          class="w-12 h-12 rounded-lg" />
        <div>
          <h1 class="text-3xl font-bold text-white">LX-ME-Frp-Launcher</h1>
          <p class="text-gray-400">使用易语言开发的 Windows 客户端</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-400">易语言</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">Windows</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400">官方风格</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400">Exui</span>
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
          LX-ME-Frp-Launcher 是由 <strong class="text-primary-400">灵弦MuaMua</strong> 使用易语言 & Exui 开发的 ME-Frp 第三方客户端。
          该客户端具有较美观的 UI 界面，功能较为完善，提供了简单便捷的操作。
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
                <span>使用易语言 & Exui 开发，原生 Windows 体验</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>具有较美观的 UI 界面</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>正常使用功能较为完善</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>提供简单便捷的操作</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>可以快速启动实例/隧道</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>支持自动登录和托盘菜单</span>
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
                <span>仅支持 Windows 系统</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-cpu" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>支持不同 Windows 架构</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-database" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>可在官网下载对应架构版本</span>
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
            :alt="previewImages[currentImageIndex].alt + ' - LX-ME-Frp-Launcher 界面截图'"
            class="max-w-full max-h-full object-contain cursor-pointer" loading="lazy"
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

    <!-- 下载安装 -->
    <div ref="downloadRef" class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': downloadVisible }">
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">下载安装</h2>
      </div>

      <div class="p-6 space-y-6">
        <div class="text-center">
          <UButton size="lg" color="primary" to="https://wwaze.lanzouv.com/i71sI3n2npbi" target="_blank"
            class="btn-glow cursor-pointer">
            <UIcon name="i-lucide-download" class="size-5 mr-2" />
            蓝奏云下载
          </UButton>
        </div>

        <div class="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-alert-triangle" class="size-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-yellow-400">注意事项</h4>
              <p class="text-gray-300 text-sm mt-1">仅适用于 Windows 系统。请使用 ME-Frp 官网账号登录。需要更多功能或报告 Bug，请发送邮件至
                407176772@qq.com。</p>
            </div>
          </div>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-3">安装步骤</h3>
          <ol class="space-y-2 text-gray-300">
            <li class="flex items-start space-x-3">
              <span
                class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>下载 LX-ME-Frp-Launcher 安装包</span>
            </li>
            <li class="flex items-start space-x-3">
              <span
                class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>解压到您希望安装的目录</span>
            </li>
            <li class="flex items-start space-x-3">
              <span
                class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>运行主程序，首次启动会进行初始化</span>
            </li>
            <li class="flex items-start space-x-3">
              <span
                class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>配置您的 ME-Frp 账户信息并开始使用</span>
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
// 使用文档布局
definePageMeta({
  layout: 'docs'
})

// 滚动动画
const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation()
const { elementRef: previewRef, isVisible: previewVisible } = useScrollAnimation()
const { elementRef: downloadRef, isVisible: downloadVisible } = useScrollAnimation()
const { elementRef: updateRef, isVisible: updateVisible } = useScrollAnimation()

// 使用版本管理 composable
const { getVersion, fetchAllVersions } = useProductVersions()

// 获取当前产品版本
const currentVersion = computed(() => getVersion('lx'))

// 页面元数据
useHead({
  title: 'LX-ME-Frp-Launcher 文档',
  link: [
    { rel: 'canonical', href: 'https://mefrp-tpca.yealqp.cn/docs/lx' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'LX-ME-Frp-Launcher',
        applicationCategory: 'NetworkApplication',
        operatingSystem: 'Windows',
        softwareVersion: currentVersion.value,
        description: '使用易语言 & Exui 开发的 ME-Frp 第三方客户端，界面高仿官方图形化 V4.0',
        author: { '@type': 'Person', name: '灵弦MuaMua' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
        downloadUrl: 'https://wwaze.lanzouv.com/i71sI3n2npbi'
      })
    }
  ]
})

// SEO 优化
useSeoMeta({
  title: 'LX-ME-Frp-Launcher 文档 | ME-Frp 第三方客户端联盟',
  ogTitle: 'LX-ME-Frp-Launcher 文档 - ME-Frp 第三方客户端联盟',
  description: 'LX-ME-Frp-Launcher 详细使用文档，使用易语言 & Exui 开发的 ME-Frp 第三方客户端，包含安装、配置和使用指南，支持自动登录和托盘菜单功能。',
  ogDescription: 'LX-ME-Frp-Launcher 详细使用文档，包含安装、配置和使用指南',
  ogImage: 'https://image.mefrp-tpca.yealqp.cn/images/views/Lx_MuaMua/home.png',
  ogUrl: 'https://mefrp-tpca.yealqp.cn/docs/lx',
  ogType: 'article',
  twitterCard: 'summary_large_image'
})

// 预览图数据
const previewImages = [
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/Lx_MuaMua/login.png', alt: '登录界面' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/Lx_MuaMua/home.png', alt: '主页面' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/Lx_MuaMua/create.png', alt: '创建隧道' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/Lx_MuaMua/tunnel.png', alt: '隧道管理' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/Lx_MuaMua/tunnellog.png', alt: '隧道日志' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/Lx_MuaMua/monitor.png', alt: '节点监控' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/Lx_MuaMua/person.png', alt: '个人信息' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/Lx_MuaMua/config.png', alt: '配置设置' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/Lx_MuaMua/about.png', alt: '关于页面' }
]

const currentImageIndex = ref(0)

// 更新日志状态
const loading = ref(false)
const error = ref(null)
const updates = ref([])

// 从 API 获取更新日志
const fetchChangelog = async () => {
  try {
    const response = await fetch('https://alist.yealqp.cn/download/LX-ME-Frp-Launch/meta/changelog.json')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (err) {
    console.error('获取更新日志失败:', err)
    throw err
  }
}

// 版本号比较
const compareVersions = (version1, version2) => {
  const v1Parts = version1.replace(/[^\d.]/g, '').split('.').map(num => parseInt(num) || 0)
  const v2Parts = version2.replace(/[^\d.]/g, '').split('.').map(num => parseInt(num) || 0)

  const maxLength = Math.max(v1Parts.length, v2Parts.length)
  while (v1Parts.length < maxLength) v1Parts.push(0)
  while (v2Parts.length < maxLength) v2Parts.push(0)

  for (let i = 0; i < maxLength; i++) {
    if (v1Parts[i] > v2Parts[i]) return 1
    if (v1Parts[i] < v2Parts[i]) return -1
  }
  return 0
}

// 转换 API 数据
const transformApiData = (apiData) => {
  if (!apiData.data) {
    throw new Error('API 数据格式错误')
  }

  const transformedData = []
  const versions = Object.keys(apiData.data).sort((a, b) => compareVersions(b, a))

  versions.forEach((version, index) => {
    const versionData = apiData.data[version]
    const changes = Array.isArray(versionData) ? versionData : (versionData.changes || [])
    const date = Array.isArray(versionData) ? '' : (versionData.date || '')
    const note = Array.isArray(versionData) ? '' : (versionData.note || '')

    transformedData.push({
      version: `v${version}`,
      changes: changes,
      date: date,
      note: note,
      isLatest: index === 0
    })
  })

  return transformedData
}

// 初始化更新日志
const initializeUpdates = async () => {
  loading.value = true
  error.value = null

  try {
    const apiData = await fetchChangelog()
    updates.value = transformApiData(apiData)
  } catch (err) {
    error.value = '获取更新日志失败'
    updates.value = []
  } finally {
    loading.value = false
  }
}

// 组件挂载时获取版本号和更新日志
onMounted(() => {
  fetchAllVersions()
  initializeUpdates()
})
</script>
