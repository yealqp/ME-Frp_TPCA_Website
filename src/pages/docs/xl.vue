<template>
  <div>
    <!-- 页面标题 -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <img 
          src="https://image.mefrp-tpca.yealqp.cn/images/views/icon/xl_icon.webp" 
          alt="XL-ME-Frp-Launcher"
          class="w-12 h-12 rounded-lg"
        />
        <div>
          <h1 class="text-3xl font-bold text-white">XL-ME-Frp-Launcher</h1>
          <p class="text-gray-400">基于 Tauri 2 框架开发的跨平台客户端</p>
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
    <div 
      ref="introRef"
      class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': introVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">项目介绍</h2>
      </div>
      
      <div class="p-6 space-y-4 text-gray-300">
        <p>
          XL-ME-Frp-Launcher 是由 <strong class="text-primary-400">yealqp</strong> 使用 Tauri 2 框架开发的 ME-Frp 第三方客户端。
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
                <span>提供其他客户端没有的原生人机验证功能</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>拥有开机自启动、系统托盘等功能</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>包体小巧，启动迅速</span>
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
                <UIcon name="i-lucide-globe" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>需要安装 WebView2 运行时</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 预览图 -->
    <div 
      ref="previewRef"
      class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': previewVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">预览图</h2>
      </div>
      
      <div class="p-6 relative rounded-lg overflow-hidden bg-gray-900/50">
        <!-- 图片容器 -->
        <div class="relative h-96 flex items-center justify-center">
          <img 
            :src="previewImages[currentImageIndex].src" 
            :alt="previewImages[currentImageIndex].alt + ' - XL-ME-Frp-Launcher 界面截图'" 
            class="max-w-full max-h-full object-contain cursor-pointer"
            loading="lazy"
            @click="openImageModal(previewImages[currentImageIndex])"
          />
          
          <!-- 标题遮罩 -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p class="text-white text-center font-medium">{{ previewImages[currentImageIndex].alt }}</p>
          </div>
        </div>
        
        <!-- 导航箭头 -->
        <button 
          @click="previousImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          :disabled="previewImages.length <= 1"
        >
          <UIcon name="i-lucide-chevron-left" class="size-5" />
        </button>
        
        <button 
          @click="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          :disabled="previewImages.length <= 1"
        >
          <UIcon name="i-lucide-chevron-right" class="size-5" />
        </button>
        
        <!-- 指示器 -->
        <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            v-for="(image, index) in previewImages"
            :key="index"
            @click="currentImageIndex = index"
            class="w-2 h-2 rounded-full transition-colors"
            :class="index === currentImageIndex ? 'bg-white' : 'bg-white/50'"
          />
        </div>
      </div>
    </div>

    <!-- 下载安装 -->
    <div 
      ref="downloadRef"
      class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': downloadVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">下载安装</h2>
      </div>
      
      <div class="p-6 space-y-6">
        <div class="text-center">
          <UButton 
            size="lg" 
            color="primary"
            to="https://alist.yealqp.cn/ME-Frp%20XL%20%E5%AE%A2%E6%88%B7%E7%AB%AF"
            target="_blank"
            class="btn-glow cursor-pointer"
          >
            <UIcon name="i-lucide-download" class="size-5 mr-2" />
            OpenList 下载
          </UButton>
        </div>
        
        <div class="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-alert-triangle" class="size-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-yellow-400">系统要求</h4>
              <p class="text-gray-300 text-sm mt-1">本软件仅适用于 Windows 10, Windows 11, Windows Server 2019, 2022, 2025。在使用前请确认您的电脑上安装了 WebView2（WebView2 已经在 Windows 10 1803 以上和更高版本的 Windows 上默认安装）。</p>
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
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>从官方链接下载适合您操作系统的安装包</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>运行安装程序，按照提示完成安装</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>启动程序，输入您的 ME-Frp 账户信息</span>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <!-- 更新记录 -->
    <div 
      ref="updateRef"
      class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': updateVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">更新记录</h2>
      </div>
      
      <!-- 使用优化的 ChangelogList 组件 -->
      <ChangelogList
        :updates="updates"
        :loading="loading"
        :error="error"
        :page-size="5"
      />
    </div>

  </div>
</template>

<script setup>
// 使用文档布局
definePageMeta({
  layout: 'docs'
})

// 滚动动画
const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation()
const { elementRef: previewRef, isVisible: previewVisible } = useScrollAnimation()
const { elementRef: downloadRef, isVisible: downloadVisible } = useScrollAnimation()
const { elementRef: updateRef, isVisible: updateVisible } = useScrollAnimation()

// 防止未使用警告
void introRef
void previewRef
void downloadRef
void updateRef

// 使用版本管理 composable
const { getVersion, fetchAllVersions } = useProductVersions()

// 获取当前产品版本
const currentVersion = computed(() => getVersion('xl'))

// 页面元数据
useHead({
  title: 'XL-ME-Frp-Launcher 文档',
  link: [
    { rel: 'canonical', href: 'https://mefrp-tpca.yealqp.cn/docs/xl' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'XL-ME-Frp-Launcher',
        applicationCategory: 'NetworkApplication',
        operatingSystem: 'Windows 10, Windows 11, Windows Server',
        softwareVersion: currentVersion.value,
        description: '基于 Tauri 2 框架开发的 ME-Frp 第三方客户端，界面高仿官网样式，性能优异',
        author: { '@type': 'Person', name: 'yealqp' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
        downloadUrl: 'https://alist.yealqp.cn/'
      })
    }
  ]
})

// SEO 优化
useSeoMeta({
  title: 'XL-ME-Frp-Launcher 文档 | ME-Frp 第三方客户端联盟',
  ogTitle: 'XL-ME-Frp-Launcher 文档 - ME-Frp 第三方客户端联盟',
  description: 'XL-ME-Frp-Launcher 详细使用文档，基于 Tauri 2 框架开发的 ME-Frp 第三方客户端，包含安装、配置和使用指南，支持 Windows 10/11 和 Windows Server。',
  ogDescription: 'XL-ME-Frp-Launcher 详细使用文档，包含安装、配置和使用指南',
  ogImage: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/home.png',
  ogUrl: 'https://mefrp-tpca.yealqp.cn/docs/xl',
  ogType: 'article',
  twitterCard: 'summary_large_image'
})

// 预览图数据
const previewImages = [
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/home.png', alt: '主页面' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/create.png', alt: '创建隧道' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/tunnel.png', alt: '隧道管理' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/nodes.png', alt: '节点监控' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/userinfo.png', alt: '用户中心' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/config.png', alt: '配置设置' },
  { src: 'https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/about.png', alt: '关于页面' }
]

// 更新日志状态
const loading = ref(false)
const error = ref(null)
const updates = ref([])

// 从 API 获取更新日志
const fetchChangelog = async () => {
  try {
    const response = await fetch('https://check.yealqp.cn/changelog.json')
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
    // 适配新格式：versionData 是数组或对象
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
  initializeUpdates()
})
</script>