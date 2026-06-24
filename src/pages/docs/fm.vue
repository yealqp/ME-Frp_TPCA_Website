<template>
  <div>
    <!-- 页面标题 -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <img src="https://image.mefrp-tpca.yealqp.cn/images/views/icon/fm_icon.webp" alt="Fan-ME-FRP-Launcher"
          class="w-12 h-12 rounded-lg" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='https://oss.cf.xiaofanshop.cn/tpcaw/images/views/icon/fm_icon.webp'}else{this.style.display='none'}" />
        <div>
          <h1 class="text-3xl font-bold text-white">Fan-ME-FRP Launcher</h1>
          <p class="text-gray-400">基于 Java 的 FRP 客户端启动器</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-400">Java</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">跨平台</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400">GUI</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400">命令行</span>
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
          <strong class="text-primary-400">Fan-ME-FRP Launcher</strong> 是由
          <strong class="text-primary-400">xiaofanforfabric</strong> 开发的 ME-Frp 客户端启动器，
          支持图形界面和命令行两种使用方式，自动管理依赖，让您轻松使用 ME-Frp 内网穿透服务。
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
                <span>图形界面 + 命令行双模式，满足不同使用场景</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>自动下载依赖，无需手动配置 frpc</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>多下载节点支持，感谢各位捐赠者的支持</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>一键启动隧道，操作简单快捷</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>跨平台支持 Windows、Linux、Android (Termux)</span>
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
                <UIcon name="i-lucide-cpu" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Java 17 或更高版本</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-monitor" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Windows 10/11 或 Windows Server 2019+</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-terminal" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Linux：Debian、Ubuntu 等主流发行版</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-smartphone" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Android：通过 Termux 运行</span>
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
          <img :key="currentImageIndex" :src="currentPreviewSrc"
            :alt="previewImages[currentImageIndex].alt + ' - Fan-ME-FRP-Launcher 界面截图'"
            class="max-w-full max-h-full object-contain cursor-pointer" loading="lazy"
            @click="openImageModal({ src: currentPreviewSrc, alt: previewImages[currentImageIndex].alt })"
            @error="onPreviewImageError" />

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
        <div class="text-center">
          <UButton size="lg" color="primary" to="https://github.com/xiaofanforfabric/Fan-ME-FRP-Launcher/releases" target="_blank"
            class="btn-glow cursor-pointer">
            <UIcon name="i-lucide-download" class="size-5 mr-2" />
            GitHub Releases 下载
          </UButton>
        </div>

        <div class="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-alert-triangle" class="size-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-yellow-400">系统要求</h4>
              <p class="text-gray-300 text-sm mt-1">在使用前请确认您的电脑上安装了 Java 17 或更高版本。可以在终端输入 <code class="text-primary-400">java -version</code> 检查。</p>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-info" class="size-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-blue-400">使用说明</h4>
              <p class="text-gray-300 text-sm mt-1">请使用 ME-Frp 官网账号登录。首次启动时程序会自动下载所需的 frpc 依赖文件。</p>
            </div>
          </div>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-3">安装步骤</h3>
          <ol class="space-y-2 text-gray-300">
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>从 GitHub Releases 下载最新的 <code class="text-primary-400">Fan-ME-FRP-Launcher-1.0.jar</code> 文件</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>双击 JAR 文件启动（或在终端运行 <code class="text-primary-400">java -jar Fan-ME-FRP-Launcher-1.0.jar</code>）</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>输入您的 ME-Frp 账户信息登录</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>选择隧道并点击启动，即可开始使用</span>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <!-- 使用指南 -->
    <div ref="guideRef" class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': guideVisible }">
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">使用指南</h2>
      </div>

      <div class="p-6 space-y-6">
        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <UIcon name="i-lucide-layout-dashboard" class="size-5 text-primary-400" />
            图形界面模式
          </h3>
          <p class="text-gray-300 text-sm mb-3">
            直接双击启动 JAR 文件即可打开图形界面，在界面中登录账号后即可管理和启动隧道。
          </p>
          <div class="text-gray-400 text-xs">
            提示：图形界面启动后会同时开启本地 API 服务 (<code class="text-primary-400">http://127.0.0.1:1023</code>)，方便高级用户进行自动化操作。
          </div>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <UIcon name="i-lucide-terminal" class="size-5 text-primary-400" />
            命令行模式
          </h3>
          <p class="text-gray-300 text-sm mb-3">
            适合在没有图形界面的服务器或 Linux 环境中使用，通过指定配置文件启动：
          </p>
          <div class="bg-gray-900 rounded-lg p-3 overflow-x-auto">
            <pre class="text-sm text-gray-300"><code>java -jar Fan-ME-FRP-Launcher-1.0.jar -c frpc.ini</code></pre>
          </div>
          <p class="text-gray-400 text-xs mt-2">支持 .ini、.toml、.yaml、.yml、.json 格式的配置文件</p>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <UIcon name="i-lucide-zap" class="size-5 text-primary-400" />
            快捷启动模式
          </h3>
          <p class="text-gray-300 text-sm mb-3">
            通过指定隧道 ID 快速启动，无需手动编写配置文件：
          </p>
          <div class="bg-gray-900 rounded-lg p-3 overflow-x-auto">
            <pre class="text-sm text-gray-300"><code>{{ 'java -jar Fan-ME-FRP-Launcher-1.0.jar -t <运行ID> -p <隧道ID>' }}</code></pre>
          </div>
          <p class="text-gray-400 text-xs mt-2">程序会自动通过 ME-Frp API 获取隧道配置并启动</p>
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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="https://github.com/xiaofanforfabric/Fan-ME-FRP-Launcher" target="_blank"
            class="glass-card p-4 rounded-lg hover-lift flex items-center space-x-3 cursor-pointer">
            <UIcon name="i-lucide-github" class="size-6 text-primary-400" />
            <div>
              <h3 class="font-medium text-white">GitHub 仓库</h3>
              <p class="text-sm text-gray-400">查看源代码</p>
            </div>
          </a>

          <a href="https://github.com/xiaofanforfabric/Fan-ME-FRP-Launcher/releases" target="_blank"
            class="glass-card p-4 rounded-lg hover-lift flex items-center space-x-3 cursor-pointer">
            <UIcon name="i-lucide-download" class="size-6 text-primary-400" />
            <div>
              <h3 class="font-medium text-white">下载中心</h3>
              <p class="text-sm text-gray-400">获取最新版本</p>
            </div>
          </a>

          <a href="https://www.mefrp.com" target="_blank"
            class="glass-card p-4 rounded-lg hover-lift flex items-center space-x-3 cursor-pointer">
            <UIcon name="i-lucide-globe" class="size-6 text-primary-400" />
            <div>
              <h3 class="font-medium text-white">ME-Frp 官网</h3>
              <p class="text-sm text-gray-400">注册账号</p>
            </div>
          </a>
        </div>
      </div>
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
const { elementRef: guideRef, isVisible: guideVisible } = useScrollAnimation()
const { elementRef: updateRef, isVisible: updateVisible } = useScrollAnimation()
const { elementRef: linksRef, isVisible: linksVisible } = useScrollAnimation()

// 预览图数据
const previewImages = [
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/xiaofan/home.png', alt: '主页' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/xiaofan/create.png', alt: '创建隧道' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/xiaofan/tunnel.png', alt: '隧道管理' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/xiaofan/nodes.png', alt: '节点监控' }
]

const currentImageIndex = ref(0)
const showImageModal = ref(false)
const modalImage = ref({ src: '', alt: '' })

// 每张图片的回退状态：false=使用CDN, true=已回退到OSS
const fallbackState = ref(previewImages.map(() => false))

// 当前显示的图片 src（根据回退状态决定用 CDN 还是 OSS）
const currentPreviewSrc = computed(() => {
  const img = previewImages[currentImageIndex.value]
  if (fallbackState.value[currentImageIndex.value]) {
    return img.src.replace('image.mefrp-tpca.yealqp.cn', 'oss.cf.xiaofanshop.cn/tpcaw')
  }
  return img.src
})

// 图片加载失败时的处理
const onPreviewImageError = () => {
  const idx = currentImageIndex.value
  if (!fallbackState.value[idx]) {
    fallbackState.value[idx] = true
  }
}

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

// 更新日志状态
const loading = ref(false)
const error = ref(null)
const updates = ref([])

// 从 API 获取更新日志
const fetchChangelog = async () => {
  try {
    const response = await fetch('https://alist.yealqp.cn/download/Fan-ME-FRP-Launcher/meta/changelog.json')
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
    error.value = '暂没更新日志'
    updates.value = []
  } finally {
    loading.value = false
  }
}

// 组件挂载时初始化
onMounted(() => {
  initializeUpdates()
})

// 页面元数据
useHead({
  title: 'Fan-ME-FRP-Launcher 文档',
  link: [
    { rel: 'canonical', href: 'https://mefrp-tpca.yealqp.cn/docs/fm' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Fan-ME-FRP-Launcher',
        applicationCategory: 'NetworkApplication',
        operatingSystem: 'Windows, Linux, Android',
        description: '基于 Java 的 FRP 客户端启动器，支持 GUI 图形界面和命令行模式',
        author: { '@type': 'Person', name: 'xiaofanforfabric' },
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
  title: 'Fan-ME-FRP-Launcher 文档 | ME-Frp 第三方客户端联盟',
  ogTitle: 'Fan-ME-FRP-Launcher 文档 - ME-Frp 第三方客户端联盟',
  description: 'Fan-ME-FRP-Launcher 是由 xiaofanforfabric 基于 Java 开发的 FRP 客户端启动器，支持 GUI 图形界面和命令行模式，轻松使用 ME-Frp 内网穿透服务。',
  ogDescription: 'Fan-ME-FRP-Launcher 基于 Java 的 FRP 客户端启动器，支持 GUI 图形界面和命令行模式',
  ogImage: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/og-image.png',
  ogUrl: 'https://mefrp-tpca.yealqp.cn/docs/fm',
  ogType: 'article',
  twitterCard: 'summary_large_image'
})
</script>