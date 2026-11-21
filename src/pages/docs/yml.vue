<template>
  <div>
    <!-- 页面标题 -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <img src="/images/icon/yml-logo.webp" alt="Yun-ME-FRP Launcher"
          class="w-14 h-14 rounded-xl bg-white object-contain ring-1 ring-white/15" />
        <div>
          <h1 class="text-3xl font-bold text-white">Yun-ME-FRP Launcher</h1>
          <p class="text-gray-400">基于 WinUI 3 的 Windows 原生桌面客户端</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-400">WinUI3</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400">.NET 10</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">Windows</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-400">免安装</span>
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
          <strong class="text-primary-400">Yun-ME-FRP Launcher</strong> 是由
          <strong class="text-primary-400">xiaoyun</strong> 基于
          <strong class="text-primary-400">WinUI 3 + C# / .NET 10</strong> 开发的 ME-Frp Windows 桌面客户端，
          采用 XAML + Mica 背景的原生界面，单文件自包含发布，下载后直接双击即可使用，无需安装任何运行时。
        </p>
        <p>
          客户端完整覆盖官方公开 API 中与日常使用相关的接口：从登录、隧道管理到配置生成与本地客户端启动，
          全流程均可在图形界面内完成，并按官方第三方接入规范处理 User-Agent 与人机验证。
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
                <span>WinUI 3 + .NET 10 原生开发，单文件自包含，免安装运行时</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>隧道全生命周期：创建、编辑、启用/禁用、强制下线与删除</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>支持 TOML / JSON / YML / INI 四种配置格式，可一键保存到本地</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>节点负载与今日流量监控，本机 CPU / 内存 / 磁盘 / 网络实时概览</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>本地客户端一键下载托管，独立运行日志页面，支持开机自启与关闭到托盘</span>
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
                <UIcon name="i-lucide-app-window" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Windows 10 1809（17763）及以上，或 Windows 11</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-cpu" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>x64 架构（当前仅提供 win-x64 版本）</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-package-check" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>无需安装 .NET 或 Windows App SDK 运行时（已自包含）</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-globe" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>需要可访问 mefrp.com 与节点地址的网络环境</span>
              </li>
            </ul>
          </div>
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
          <UButton size="lg" color="primary" to="https://alist.yealqp.cn/mefrp-desktop/Yun-ME-FRP%20Launcher"
            target="_blank" class="btn-glow cursor-pointer">
            <UIcon name="i-lucide-download" class="size-5 mr-2" />
            下载 Yun-ME-FRP Launcher
          </UButton>
          <p class="text-gray-400 text-sm mt-3">
            文件名 <code class="text-primary-400">Yun-ME-FRP Launcher.exe</code>，免安装单文件，约 211 MB。
          </p>
        </div>

        <div class="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-alert-triangle" class="size-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-yellow-400">安全软件提示</h4>
              <p class="text-gray-300 text-sm mt-1">
                程序为免安装单文件，首次运行会把内置原生库解压到临时目录。若安全软件误报，请将程序和本地客户端目录加入信任，
                否则本地 frpc 可能被拦截删除。
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-3">安装步骤</h3>
          <ol class="space-y-2 text-gray-300">
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span>获取 <code class="text-primary-400">Yun-ME-FRP Launcher</code> 的免安装可执行文件</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span>将文件放到任意目录后直接双击运行，首次启动解压原生库约需数秒</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span>在「设置」中点击「自动下载 Windows 客户端」，自动获取并解压本地 frpc</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="flex-shrink-0 w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span>使用 ME-Frp 账号登录后即可管理并启动隧道</span>
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
            <UIcon name="i-lucide-log-in" class="size-5 text-primary-400" />
            登录与人机验证
          </h3>
          <p class="text-gray-300 text-sm mb-3">
            支持「密码登录」与「访问密钥登录」两种方式。密码登录需先完成官方人机验证：点击「进行人机验证」后会打开浏览器页面，
            完成挑战后将页面给出的验证码粘贴回客户端即可。
          </p>
          <div class="text-gray-400 text-xs">
            访问密钥即网页版登录后浏览器 localStorage 中的 <code class="text-primary-400">token</code> 值；登录令牌在本地使用 Windows DPAPI 加密保存，不落盘明文。
          </div>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <UIcon name="i-lucide-network" class="size-5 text-primary-400" />
            隧道管理
          </h3>
          <p class="text-gray-300 text-sm mb-3">
            隧道页展示全部隧道及其在线、禁用、封禁状态，并区分本机与其它设备正在运行的隧道。
            可新建、编辑、删除、启用/禁用，或对在其它设备上运行的隧道执行强制下线。
          </p>
          <p class="text-gray-400 text-xs">
            创建时会按隧道类型过滤节点并校验端口范围；HTTP / HTTPS 隧道改用自定义域名，TCP / UDP 隧道使用远程端口。
          </p>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <UIcon name="i-lucide-file-code" class="size-5 text-primary-400" />
            配置生成与本地启动
          </h3>
          <p class="text-gray-300 text-sm mb-3">
            点击「生成配置」可获得该隧道的 TOML / JSON / YML / INI 配置文本，支持复制或保存到本地 <code class="text-primary-400">configs</code> 目录。
            「启动隧道」会按本地客户端的类型自动选择启动方式：
          </p>
          <div class="bg-gray-900 rounded-lg p-3 overflow-x-auto space-y-2">
            <pre class="text-sm text-gray-300"><code>官方 mefrpc：mefrpc.exe -t {{ '<token>' }} -p {{ '<proxyId>' }}</code></pre>
            <pre class="text-sm text-gray-300"><code>上游 frpc： frpc.exe -c {{ '<配置文件路径>' }}</code></pre>
          </div>
          <p class="text-gray-400 text-xs mt-2">
            进程输出会实时显示在独立的运行日志页面，退出应用时自动停止本地进程，避免残留。
          </p>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <UIcon name="i-lucide-hard-drive-download" class="size-5 text-primary-400" />
            本地客户端下载
          </h3>
          <p class="text-gray-300 text-sm">
            设置页可一键下载 Windows 客户端：优先从官方下载源获取，官方文件站不可用时自动回退到上游 frpc 0.61.0，
            下载完成后自动解压并填入路径。不使用官方客户端时，也可以在设置中手动指定已有的 frpc 可执行文件。
          </p>
        </div>

        <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
          <h3 class="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <UIcon name="i-lucide-folder-cog" class="size-5 text-primary-400" />
            本地数据
          </h3>
          <p class="text-gray-300 text-sm">
            便携模式下数据保存在程序同目录的 <code class="text-primary-400">data</code> 文件夹（不可写时回退到用户目录），
            包含加密的登录会话、应用设置与手动保存的配置文件；启动隧道产生的临时配置写入临时目录并在读取后立即删除。
          </p>
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
          <a href="https://www.mefrp.com" target="_blank" rel="noopener"
            class="glass-card p-4 rounded-lg hover-lift flex items-center space-x-3 cursor-pointer">
            <UIcon name="i-lucide-globe" class="size-6 text-primary-400" />
            <div>
              <h3 class="font-medium text-white">ME-Frp 官网</h3>
              <p class="text-sm text-gray-400">注册账号与查看节点</p>
            </div>
          </a>

          <a href="https://apidoc.mefrp.com/" target="_blank" rel="noopener"
            class="glass-card p-4 rounded-lg hover-lift flex items-center space-x-3 cursor-pointer">
            <UIcon name="i-lucide-book-open" class="size-6 text-primary-400" />
            <div>
              <h3 class="font-medium text-white">开放 API 文档</h3>
              <p class="text-sm text-gray-400">客户端对接的官方接口</p>
            </div>
          </a>

          <a href="https://www.mefrp.com/3rdparty/captcha?client=MefrpDesk" target="_blank" rel="noopener"
            class="glass-card p-4 rounded-lg hover-lift flex items-center space-x-3 cursor-pointer">
            <UIcon name="i-lucide-shield-check" class="size-6 text-primary-400" />
            <div>
              <h3 class="font-medium text-white">人机验证页面</h3>
              <p class="text-sm text-gray-400">登录 / 签到时使用</p>
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
const { elementRef: downloadRef, isVisible: downloadVisible } = useScrollAnimation()
const { elementRef: guideRef, isVisible: guideVisible } = useScrollAnimation()
const { elementRef: updateRef, isVisible: updateVisible } = useScrollAnimation()
const { elementRef: linksRef, isVisible: linksVisible } = useScrollAnimation()

// 更新日志
const { updates, loading, error, fetchChangelog } = useProductChangelog('yml')

onMounted(() => {
  fetchChangelog()
})

// 页面元数据
useHead({
  title: 'Yun-ME-FRP Launcher 文档',
  link: [
    { rel: 'canonical', href: `${SITE_URL}/docs/yml` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Yun-ME-FRP Launcher',
        applicationCategory: 'NetworkApplication',
        operatingSystem: 'Windows 10, Windows 11',
        description: '基于 WinUI 3 与 .NET 10 开发的 ME-Frp Windows 桌面客户端，免安装单文件，支持隧道管理、节点监控与本地客户端托管',
        author: { '@type': 'Person', name: 'xiaoyun' },
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
  title: `Yun-ME-FRP Launcher 文档 | ${SITE_NAME}`,
  ogTitle: `Yun-ME-FRP Launcher 文档 - ${SITE_NAME}`,
  description: 'Yun-ME-FRP Launcher 是由 xiaoyun 基于 WinUI 3 与 .NET 10 开发的 ME-Frp Windows 桌面客户端，单文件免安装，支持隧道全生命周期管理、节点监控与本地 frpc 进程托管。',
  ogDescription: 'Yun-ME-FRP Launcher - 基于 WinUI 3 与 .NET 10 的 ME-Frp Windows 桌面客户端',
  ogImage: OG_IMAGE,
  ogUrl: `${SITE_URL}/docs/yml`,
  ogType: 'article',
  twitterCard: 'summary_large_image'
})
</script>
