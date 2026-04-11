<template>
  <div>
    <!-- 页面标题 -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <img 
          src="https://alist.yealqp.cn/d/images/views/zerosnow/znext-icon.png?sign=XKtsQoWy3qtBqEgV6yVu09IXyzwWoVbUJ9SIywwPHrk=:0" 
          alt="XL-ME-Frp-Launcher"
          class="w-12 h-12 rounded-lg"
        />
        <div>
          <h1 class="text-3xl font-bold text-white">ZNextLauncher</h1>
          <p class="text-gray-400">基于WinUI3框架开发的Windows原生客户端</p>
        </div>
      </div>
      
      <div class="flex flex-wrap gap-2">
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-400">WinUI3</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400">C#</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400">.NET</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-400">PowerShell</span>
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
          ZNext Launcher 是由 <strong class="text-primary-400">ZeroSnow</strong> 使用 WinUI3 框架开发的 ME-Frp 第三方客户端。
          采用原生WinUI3框架开发，基于FLuent Design设计语言，功能强大的一款原生客户端
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
                <span>基于 WinUI3 框架，性能优异</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Fluent Design 设计语言</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>支持各种复杂场景</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>拥有开机自启动、系统托盘等功能</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon name="i-lucide-check-circle" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>MSIX包体小巧，启动迅速</span>
              </li>
              <li class="flex items-start space-x-2">
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
                <span>需要安装 .NET8.0框架 和 WebView2 运行时</span>
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
            :alt="`${previewImages[currentImageIndex].alt} - ZNext Launcher 界面截图`" 
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
            to="https://alist.yealqp.cn/mefrp-desktop/ZNext%20Launcher"
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
              <p class="text-gray-300 text-sm mt-1">本软件仅适用于 Windows 10, Windows 11, Windows Server 2019, 2022, 2025。在使用前请确认您的电脑上安装了.net8.0 和 WebView2（WebView2 已经在 Windows 10 1803 以上和更高版本的 Windows 上默认安装）。</p>
            </div>
          </div>
        </div>
        
        <div class="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-info" class="size-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 class="font-semibold text-blue-400">使用说明</h4>
              <p class="text-gray-300 text-sm mt-1">请使用 ME-Frp 官网账号登录。需要更多功能或报告 Bug 请向邮箱 gvhtyj@outlook.com 发送邮件。</p>
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

    <!-- 快速开始指南 -->
    <div 
      ref="quickStartRef"
      class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': quickStartVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">快速开始</h2>
      </div>
      
      <div class="p-6 space-y-6">
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white flex items-center gap-2">
            <UIcon name="i-lucide-zap" class="size-5 text-primary-400" />
            5 分钟快速上手
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 w-8 h-8 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 class="text-white font-semibold mb-2">下载并安装</h4>
                  <p class="text-gray-400 text-sm">从Alist下载最新版本，双击运行安装程序，按照提示完成安装</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 w-8 h-8 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 class="text-white font-semibold mb-2">启动应用</h4>
                  <p class="text-gray-400 text-sm">点击开始菜单中的 ZNext Launcher，或双击桌面快捷方式启动应用</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 w-8 h-8 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 class="text-white font-semibold mb-2">登录账户</h4>
                  <p class="text-gray-400 text-sm">使用您的 ME-Frp 账户登录应用（如未注册请先注册）</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth">
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 w-8 h-8 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h4 class="text-white font-semibold mb-2">创建隧道</h4>
                  <p class="text-gray-400 text-sm">点击"创建隧道"按钮，填写隧道信息，选择节点即可启用</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 功能说明 -->
    <div 
      ref="featuresRef"
      class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': featuresVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">功能说明</h2>
      </div>
      
      <div class="p-6 space-y-6">
        <div>
          <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-globe" class="size-5 text-primary-400" />
            隧道管理
          </h3>
          <p class="text-gray-300 mb-3">支持创建、编辑、删除和管理多个隧道，实时显示隧道状态和数据流量。支持多种隧道类型，满足不同场景需求。</p>
          <ul class="space-y-2 text-sm text-gray-300">
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>实时隧道状态监控</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>支持多种隧道类型配置</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>快速启动/停止隧道</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>隧道配置一键导入导出</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-server" class="size-5 text-primary-400" />
            节点管理
          </h3>
          <p class="text-gray-300 mb-3">实时显示所有可用节点，支持根据延迟和地理位置智能选择节点。</p>
          <ul class="space-y-2 text-sm text-gray-300">
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>节点实时在线状态显示</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>延迟测试和显示</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>自动与手动节点选择模式</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-settings" class="size-5 text-primary-400" />
            系统配置
          </h3>
          <p class="text-gray-300 mb-3">灵活的系统设置，包括开机自启、系统托盘、主题切换等功能。</p>
          <ul class="space-y-2 text-sm text-gray-300">
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>开机自动启动选项</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>系统托盘最小化</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>主题切换（亮色/深色）</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>代理设置和网络配置</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <UIcon name="i-lucide-shield" class="size-5 text-primary-400" />
            安全防护
          </h3>
          <p class="text-gray-300 mb-3">内置多层安全防护机制，保护您的隧道和数据安全。</p>
          <ul class="space-y-2 text-sm text-gray-300">
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>HTTPS 安全连接</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>密码保护隧道访问</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>IP 白名单支持</span>
            </li>
            <li class="flex items-start gap-2">
              <UIcon name="i-lucide-arrow-right" class="size-4 text-primary-400 mt-0.5 flex-shrink-0" />
              <span>实时流量监控</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 常见问题 -->
    <div 
      ref="faqRef"
      class="glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': faqVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">常见问题</h2>
      </div>
      
      <div class="p-6 space-y-4">
        <div class="border-b border-white/10 pb-4 last:border-b-0">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-question" class="size-5 text-primary-400 mt-0.5 flex-shrink-0" />
            <div class="flex-1">
              <h4 class="text-white font-semibold mb-2">Q: 如何更新应用？</h4>
              <p class="text-gray-400 text-sm">A: 应用会在后台检查更新，有新版本时会给出提示。您也可以从官方 Alist 链接手动下载最新版本重新安装。</p>
            </div>
          </div>
        </div>
        
        <div class="border-b border-white/10 pb-4">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-question" class="size-5 text-primary-400 mt-0.5 flex-shrink-0" />
            <div class="flex-1">
              <h4 class="text-white font-semibold mb-2">Q: 应用无法启动怎么办？</h4>
              <p class="text-gray-400 text-sm">A: 请确保已安装 .NET 8.0 框架和 WebView2 运行时。如果问题仍未解决，可以联系开发者邮箱 gvhtyj@outlook.com 寻求帮助。</p>
            </div>
          </div>
        </div>
        
        <div class="border-b border-white/10 pb-4">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-question" class="size-5 text-primary-400 mt-0.5 flex-shrink-0" />
            <div class="flex-1">
              <h4 class="text-white font-semibold mb-2">Q: 隧道连接超时如何解决？</h4>
              <p class="text-gray-400 text-sm">A: 可以尝试更换节点或检查网络连接。如果问题持续，请检查本地防火墙设置，确保未对应用进行限制。</p>
            </div>
          </div>
        </div>
        
        <div class="border-b border-white/10 pb-4">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-question" class="size-5 text-primary-400 mt-0.5 flex-shrink-0" />
            <div class="flex-1">
              <h4 class="text-white font-semibold mb-2">Q: 支持哪些隧道类型？</h4>
              <p class="text-gray-400 text-sm">A: 支持 TCP、UDP、HTTP、HTTPS 等多种隧道类型，可根据您的需要灵活选择。详细配置请参考应用内帮助文档。</p>
            </div>
          </div>
        </div>
        
        <div class="pb-4">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-question" class="size-5 text-primary-400 mt-0.5 flex-shrink-0" />
            <div class="flex-1">
              <h4 class="text-white font-semibold mb-2">Q: 如何联系技术支持？</h4>
              <p class="text-gray-400 text-sm">A: 如有问题或建议，可以发送邮件至：<span class="text-primary-400 font-mono">gvhtyj@outlook.com</span></p>
            </div>
          </div>
        </div>
      </div>
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
const { elementRef: quickStartRef, isVisible: quickStartVisible } = useScrollAnimation()
const { elementRef: featuresRef, isVisible: featuresVisible } = useScrollAnimation()
const { elementRef: faqRef, isVisible: faqVisible } = useScrollAnimation()

// 防止未使用警告
void introRef
void previewRef
void downloadRef
void updateRef
void quickStartRef
void featuresRef
void faqRef

// 使用版本管理 composable
const { getVersion, fetchAllVersions } = useProductVersions()

// 获取当前产品版本
const currentVersion = computed(() => getVersion('zl'))
useHead({
  title: 'ZNext Launcher 文档',
  link: [
    { rel: 'canonical', href: 'https://mefrp-tpca.yealqp.cn/docs/zl' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'ZNext Launcher',
        applicationCategory: 'NetworkApplication',
        operatingSystem: 'Windows 10, Windows 11, Windows Server',
        softwareVersion: currentVersion.value,
        description: '基于 WinUI3 框架开发的 ME-Frp 第三方客户端，界面高仿官网样式，性能优异',
        author: { '@type': 'Person', name: 'ZeroSnow' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
        downloadUrl: 'https://alist.yealqp.cn/'
      })
    }
  ]
})

// SEO 优化
useSeoMeta({
  title: 'ZNext Launcher 文档 | ME-Frp 第三方客户端联盟',
  ogTitle: 'ZNext Launcher 文档 - ME-Frp 第三方客户端联盟',
  description: 'ZNext Launcher 详细使用文档，基于 WinUI3 框架开发的 ME-Frp 第三方客户端，包含安装、配置和使用指南，支持 Windows 10/11 和 Windows Server。',
  ogDescription: 'ZNext Launcher 详细使用文档，包含安装、配置和使用指南',
  ogImage: 'https://image.mefrp-tpca.yealqp.cn/image/views/yealqp/home.png',
  ogUrl: 'https://mefrp-tpca.yealqp.cn/docs/zl',
  ogType: 'article',
  twitterCard: 'summary_large_image'
})

// 预览图数据
const previewImages = [
  { src: 'https://alist.yealqp.cn/d/images/views/zerosnow/znext/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-02-26%20093349.png?sign=lnZaaiqawaToC0B8bAdYQyEf5QG-goBOB6wYKhVrm88=:0', alt: '登录界面' },
  { src: 'https://alist.yealqp.cn/d/images/views/zerosnow/znext/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202026-04-11%20112942.png?sign=jI8i4592mJMRzFoJxDAX9PQX-f8GuYjCMqPY_QAYvcI=:0', alt: '主页面' },
  { src: 'https://alist.yealqp.cn/d/images/views/zerosnow/znext/tunnel.png?sign=521oN5786ZmUM6SRcCScLLYU4VEUT6rsTYYeoyaujt0=:0', alt: '隧道管理' },
  { src: 'https://alist.yealqp.cn/d/images/views/zerosnow/znext/create.png?sign=-GnCS-xAtK0Iayje_98qpL3cGF-ioGH912O9M01CC00=:0', alt: '节点选择' },
  { src: 'https://alist.yealqp.cn/d/images/views/zerosnow/znext/create.png?sign=-GnCS-xAtK0Iayje_98qpL3cGF-ioGH912O9M01CC00=:0', alt: '创建隧道' },
  { src: 'https://alist.yealqp.cn/d/images/views/zerosnow/znext/password.png?sign=KuqUtyOjWWQla0ewyW2mjXTgmjHpxISADvTv67xof-Y=:0', alt: '安全访问' },
  { src: 'https://alist.yealqp.cn/d/images/views/zerosnow/znext/help.png?sign=Z3Y_6sc4bXoZOP0VJ_J3H3apo5XFXS3ZxcExizonaw4=:0', alt: '帮助页面' },
  { src: 'https://alist.yealqp.cn/d/images/views/zerosnow/znext/about.png?sign=ERyoSLG-HXiVpSQLk44bj3y5gbjuNtzxb_m1z4vHnFM=:0', alt: '配置设置' },
  { src: 'https://alist.yealqp.cn/d/images/views/zerosnow/znext/about.png?sign=ERyoSLG-HXiVpSQLk44bj3y5gbjuNtzxb_m1z4vHnFM=:0', alt: '关于页面' }
]

// 更新日志状态
const loading = ref(false)
const error = ref(null)
const updates = ref([])

// 本地更新日志数据
const localChangelog = {
  data: {
    '1.8': {
      date: '2026-04-11',
      changes: [

        '修复一些已知问题'
      ]
    },
    '1.7': {
      date: '2026-03-25',
      note: '补充功能说明',
      changes: [
        '优化节点管理界面',
        '增加系统托盘支持'
      ]
    }
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

// 转换本地数据为组件更新列表
const transformApiData = (apiData) => {
  if (!apiData || !apiData.data) {
    throw new Error('更新日志数据格式错误')
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
  updates.value = []

  const apiData = localChangelog

  if (!apiData) {
    error.value = '更新日志数据不存在'
    updates.value = []
    loading.value = false
    return
  }

  if (!apiData.data || Object.keys(apiData.data).length === 0) {
    error.value = '暂无更新日志'
    updates.value = []
    loading.value = false
    return
  }

  const transformed = transformApiData(apiData)
  if (!transformed || transformed.length === 0) {
    error.value = '暂无更新日志'
    updates.value = []
  } else {
    updates.value = transformed
  }

  loading.value = false
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