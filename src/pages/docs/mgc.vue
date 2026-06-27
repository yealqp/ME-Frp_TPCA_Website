<template>
  <div>
    <!-- 页面标题 -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <img src="https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/.github/icon.png" alt="MeFrp-GR-Client"
          class="w-12 h-12 rounded-lg" />
        <div>
          <h1 class="text-3xl font-bold text-white">MeFrp-GR-Client</h1>
          <p class="text-gray-400">基于 PySide6 + Qt WebEngine 的原生桌面客户端</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-400">Python 3.10+</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400">PySide6</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400">Qt WebEngine</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400">Flask</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">waitress</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-orange-500/20 text-orange-400">PyInstaller</span>
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
          MeFrp-GR-Client 是由 <strong class="text-primary-400">Guoran-11</strong> 使用
          <strong>PySide6 + Qt WebEngine</strong> 开发的 ME-Frp 第三方桌面客户端。
          将 WebUI 1:1 嵌入到原生 Qt 窗口中，开箱即用、零浏览器依赖，
          支持账号登录、用户中心、隧道管理、单独启动/停止 frpc、命令行输出实时查看、一键关闭程序等功能，
          内置完整 frpc 进程隔离与生命周期管理，PyInstaller 一键打包为 .exe。
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
                <span>PySide6 + Qt WebEngine 1:1 嵌入 WebUI，原生窗口体验</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>支持 Token 登录、用户信息、签到、获取访问密钥</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>隧道列表可视化，单独启动/停止 frpc 进程隔离运行</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>内置命令行输出面板，实时显示后端运行日志</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>一键关闭程序：QApplication.quit + werkzeug.shutdown + os._exit</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>PyInstaller 打包默认 console=False，不弹黑色控制台</span>
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
                <span>Windows 10 / 11 (x64 / x86)</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-monitor" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Windows Server 2019 / 2022 / 2025</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-cpu" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>约 80MB 内存 + 150MB 磁盘（取决于 PyInstaller 模式）</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-globe" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>无需 WebView2 / 浏览器，纯 Qt 渲染</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-shield" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>首次启动需允许防火墙出站规则（frpc 协议通信）</span>
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
          <img :src="previewImages[currentImageIndex].src"
            :alt="previewImages[currentImageIndex].alt + ' - MeFrp-GR-Client 界面截图'"
            class="max-w-full max-h-full object-contain cursor-pointer" loading="lazy"
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
            <li>· Token 登录（免验证码）</li>
            <li>· 用户信息 / 流量 / 积分</li>
            <li>· 一键签到</li>
            <li>· 一键复制访问密钥</li>
            <li>· 刷新 / 重置访问密钥</li>
          </ul>
        </div>
        <div class="bg-white/5 rounded-lg p-4">
          <h3 class="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-arrow-right" class="size-5 text-primary-400" />
            隧道管理
          </h3>
          <ul class="space-y-1.5 text-gray-300 text-sm">
            <li>· 隧道列表可视化</li>
            <li>· 一键启动 / 停止 frpc 进程</li>
            <li>· 进程隔离，单条隧道独立运行</li>
            <li>· 启动 / 停止 / 启用 / 删除 / 配置</li>
            <li>· 实时状态监控</li>
          </ul>
        </div>
        <div class="bg-white/5 rounded-lg p-4">
          <h3 class="text-base font-semibold text-white mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-terminal" class="size-5 text-primary-400" />
            桌面体验
          </h3>
          <ul class="space-y-1.5 text-gray-300 text-sm">
            <li>· 原生 Qt 窗口，1:1 嵌入 WebUI</li>
            <li>· 系统托盘 + 菜单栏 + 状态栏</li>
            <li>· 内置命令行输出面板</li>
            <li>· 一键关闭程序</li>
            <li>· PyInstaller 打包为 .exe</li>
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
          <UButton size="lg" color="primary" to="https://github.com/Guoran-11/Guoran-11-MeFrp-GR-Client/releases" target="_blank"
            class="btn-glow cursor-pointer">
            <UIcon name="i-lucide-download" class="size-5 mr-2" />
            GitHub Releases 下载
          </UButton>
        </div>

        <div class="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-alert-triangle" class="size-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-yellow-400">系统要求(Windows)</h4>
              <p class="text-gray-300 text-sm mt-1">客户端已通过 PyInstaller 打包为 onedir / onefile，启动后自动监听本地端口并内嵌 Qt WebEngine 渲染，无需任何外部依赖。</p>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-info" class="size-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-blue-400">使用说明</h4>
              <p class="text-gray-300 text-sm mt-1">请使用 ME-Frp 官网账号登录（推荐使用 Token 登录，免验证码）。需要更多功能或报告 Bug 请在 GitHub 仓库提交 Issue。</p>
            </div>
          </div>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-3">安装步骤</h3>
          <ol class="space-y-2 text-gray-300">
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>从 GitHub Releases 下载最新版 .exe 压缩包</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>解压到任意目录，双击 MeFrp-GR-Client.exe 启动</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>在弹出的原生窗口中输入 ME-Frp 账户信息登录</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>在隧道列表点击启动，选择需要启动的隧道</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <span>需要时点击「关闭程序」一键退出（无需手动结束进程）</span>
            </li>
          </ol>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-3">从源码运行</h3>
          <pre class="bg-black/30 rounded p-3 text-sm text-gray-200 overflow-x-auto"><code># 克隆仓库
git clone https://github.com/Guoran-11/Guoran-11-MeFrp-GR-Client.git
cd Guoran-11-MeFrp-GR-Client

# 安装依赖
pip install -r requirements.txt

# 启动（双击 稳定启动.bat 也可）
python app.py</code></pre>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-3">自行打包 .exe</h3>
          <pre class="bg-black/30 rounded p-3 text-sm text-gray-200 overflow-x-auto"><code># 打包为 onedir 目录模式
pyinstaller build.spec

# 产物在 dist/MeFrp-GR-Client/</code></pre>
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
const { elementRef: featureRef, isVisible: featureVisible } = useScrollAnimation()
const { elementRef: downloadRef, isVisible: downloadVisible } = useScrollAnimation()
const { elementRef: updateRef, isVisible: updateVisible } = useScrollAnimation()

void introRef
void previewRef
void featureRef
void downloadRef
void updateRef

// 使用版本管理 composable
const { getVersion, fetchAllVersions } = useProductVersions()

// 获取当前产品版本
const currentVersion = computed(() => getVersion('mgc'))

// 页面元数据
useHead({
  title: 'MeFrp-GR-Client 文档 - 基于 PySide6 + Qt WebEngine 的桌面内网穿透客户端',
  link: [
    { rel: 'canonical', href: 'https://mefrp-tpca.yealqp.cn/docs/mgc' },
    { rel: 'alternate', hreflang: 'zh-CN', href: 'https://mefrp-tpca.yealqp.cn/docs/mgc' }
  ],
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#3b82f6' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'MeFrp-GR-Client',
        alternateName: ['ME-Frp GR Client', 'GR Client', 'ME-Frp 桌面客户端'],
        applicationCategory: 'NetworkApplication',
        applicationSubCategory: '内网穿透工具',
        operatingSystem: 'Windows 10, Windows 11, Windows Server 2019, Windows Server 2022, Windows Server 2025',
        softwareVersion: currentVersion.value,
        description: '基于 PySide6 + Qt WebEngine 开发的 ME-Frp 第三方桌面客户端，将 WebUI 1:1 嵌入到原生 Qt 窗口中，支持账号登录、用户中心、隧道管理、单独启动/停止 frpc、命令行输出实时查看、一键关闭程序等功能。',
        author: {
          '@type': 'Person',
          name: 'Guoran-11',
          url: 'https://github.com/Guoran-11'
        },
        downloadUrl: 'https://github.com/Guoran-11/Guoran-11-MeFrp-GR-Client/releases',
        screenshot: [
          'https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/docs/preview/login.png',
          'https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/docs/preview/home.png',
          'https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/docs/preview/tunnels.png',
          'https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/docs/preview/console.png'
        ],
        featureList: [
          'PySide6 + Qt WebEngine 1:1 嵌入 WebUI',
          'Token 登录 / 用户信息 / 签到 / 访问密钥',
          '隧道列表可视化 + 单独启动/停止',
          '命令行输出实时显示',
          '一键关闭程序',
          'PyInstaller 一键打包 .exe',
          '系统托盘 / 菜单栏 / 状态栏',
          'frpc 进程隔离'
        ],
        softwareRequirements: 'Windows 10/11 或更高版本',
        releaseNotes: 'https://mefrp-tpca.yealqp.cn/docs/mgc#updates',
        keywords: '内网穿透, 端口映射, PySide6, Qt WebEngine, ME-Frp, frp客户端, Windows 桌面客户端, 远程桌面, 游戏联机, Python, PyInstaller'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'MeFrp-GR-Client 使用文档',
        description: '详细的 MeFrp-GR-Client 安装、配置和使用指南',
        author: {
          '@type': 'Person',
          name: 'Guoran-11',
          url: 'https://github.com/Guoran-11'
        },
        datePublished: '2026-06-23',
        dateModified: new Date().toISOString().split('T')[0],
        publisher: {
          '@type': 'Organization',
          name: 'ME-Frp 第三方客户端联盟',
          url: 'https://mefrp-tpca.yealqp.cn'
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://mefrp-tpca.yealqp.cn/docs/mgc'
        },
        image: 'https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/docs/preview/home.png',
        articleSection: '软件文档',
        keywords: 'MeFrp-GR-Client, 内网穿透, 使用文档, 安装指南, 配置教程, PySide6, Qt WebEngine, 桌面客户端'
      })
    },
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
            item: 'https://mefrp-tpca.yealqp.cn'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: '文档',
            item: 'https://mefrp-tpca.yealqp.cn/docs'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'MeFrp-GR-Client',
            item: 'https://mefrp-tpca.yealqp.cn/docs/mgc'
          }
        ]
      })
    }
  ]
})

// SEO 优化
useSeoMeta({
  title: 'MeFrp-GR-Client 文档 | ME-Frp 第三方客户端联盟 - PySide6 桌面内网穿透工具',
  ogTitle: 'MeFrp-GR-Client 文档 - ME-Frp 第三方客户端联盟 | 基于 PySide6 + Qt WebEngine 的桌面内网穿透客户端',
  description: 'MeFrp-GR-Client 是基于 PySide6 + Qt WebEngine 开发的 ME-Frp 第三方桌面客户端，将 WebUI 1:1 嵌入到原生 Qt 窗口中，支持 Windows 10/11/Server 系统。提供账号登录、用户中心、隧道管理、单独启动/停止 frpc、命令行输出实时查看、一键关闭程序等功能。',
  ogDescription: 'MeFrp-GR-Client 详细使用文档 - 基于 PySide6 + Qt WebEngine 的桌面内网穿透客户端，支持端口映射、远程访问、Web 服务、游戏联机，包含完整的安装、配置和使用指南',
  keywords: 'MeFrp-GR-Client, ME-Frp, 内网穿透, 端口映射, PySide6, Qt WebEngine, Python, Flask, PyInstaller, Windows 桌面客户端, 远程桌面, 远程访问, Web 服务器, 游戏联机, 系统托盘, Token 登录, frp 客户端, 第三方客户端, Guoran-11, 内网穿透工具, 端口转发, NAT 穿透, 反向代理, 隧道管理, frpc',
  ogImage: 'https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/docs/preview/home.png',
  ogUrl: 'https://mefrp-tpca.yealqp.cn/docs/mgc',
  ogType: 'article',
  twitterCard: 'summary_large_image',
  twitterTitle: 'MeFrp-GR-Client - 基于 PySide6 的桌面内网穿透客户端',
  twitterDescription: '高性能桌面内网穿透工具，支持 Windows 系统，原生 Qt 窗口、功能强大',
  twitterImage: 'https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/docs/preview/home.png',
  author: 'Guoran-11',
  publisher: 'ME-Frp 第三方客户端联盟',
  applicationName: 'MeFrp-GR-Client',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  googlebot: 'index, follow',
  language: 'zh-CN',
  locale: 'zh_CN',
  ogLocale: 'zh_CN',
  articleAuthor: 'Guoran-11',
  articlePublisher: 'https://mefrp-tpca.yealqp.cn',
  articleSection: '软件文档',
  articleTag: 'PySide6, Qt WebEngine, 内网穿透, ME-Frp, 端口映射, Windows 桌面客户端'
})

// 预览图数据
const previewImages = [
  { src: 'https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/docs/preview/login.png', alt: '登录页面' },
  { src: 'https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/docs/preview/home.png', alt: '主页面' },
  { src: 'https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/docs/preview/tunnels.png', alt: '隧道管理' },
  { src: 'https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/docs/preview/start_tunnel.png', alt: '启动隧道' },
  { src: 'https://raw.githubusercontent.com/Guoran-11/Guoran-11-MeFrp-GR-Client/main/docs/preview/console.png', alt: '命令行输出' }
]

// 当前预览图索引
const currentImageIndex = ref(0)

// 切换图片
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % previewImages.length
}

const previousImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + previewImages.length) % previewImages.length
}

// 打开图片模态框
const openImageModal = (image: { src: string; alt: string }) => {
  if (process.client) {
    window.open(image.src, '_blank')
  }
}

// 更新日志状态
const loading = ref(false)
const error = ref<string | null>(null)
const updates = ref<any[]>([])

// 从 GitHub Releases API 获取更新日志
const fetchChangelog = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await fetch('https://api.github.com/repos/Guoran-11/Guoran-11-MeFrp-GR-Client/releases')
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const data = await response.json()
    if (!Array.isArray(data)) throw new Error('API 数据格式错误')

    // 转换 GitHub Releases 数据为 ChangelogList 期望的格式
    updates.value = data.map((release: any) => ({
      version: release.tag_name?.replace(/^v/, '') || 'unknown',
      date: release.published_at ? release.published_at.split('T')[0] : '',
      title: release.name || release.tag_name || '',
      body: release.body || '',
      url: release.html_url || ''
    }))
  } catch (err: any) {
    console.error('获取更新日志失败:', err)
    error.value = err.message || '获取更新日志失败'
    // 提供一个默认的空更新作为占位
    updates.value = [
      {
        version: currentVersion.value.replace(/^v/, ''),
        date: new Date().toISOString().split('T')[0],
        title: 'MeFrp-GR-Client 首发版本',
        body: '基于 PySide6 + Qt WebEngine 的桌面客户端首发\n\n- 原生 Qt 窗口 1:1 嵌入 WebUI\n- Token 登录 / 用户中心\n- 隧道管理（单独启动/停止 frpc）\n- 命令行输出实时查看\n- 一键关闭程序\n- PyInstaller 打包 .exe',
        url: 'https://github.com/Guoran-11/Guoran-11-MeFrp-GR-Client'
      }
    ]
  } finally {
    loading.value = false
  }
}

// 自动播放
let autoPlayTimer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  fetchChangelog()
  fetchAllVersions()
  autoPlayTimer = setInterval(nextImage, 5000)
})

onUnmounted(() => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
  }
})
</script>
