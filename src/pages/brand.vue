<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="py-16 lg:py-24 relative overflow-hidden" style="background: linear-gradient(135deg, #0F172A 0%, #111827 50%, #0A0E27 100%);">
      <!-- 动态光斑背景 -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="animate-fade-in-up">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6" style="text-shadow: 0 0 30px rgba(20, 184, 166, 0.3);">
            品牌资源
          </h1>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            ME-Frp 第三方客户端联盟的品牌标识和使用指南
          </p>
        </div>
      </div>
    </section>

    <!-- Logo 展示 -->
    <section class="py-16 lg:py-24 relative" style="background: linear-gradient(180deg, #111827 0%, #0F172A 100%);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- 主要 Logo -->
        <div 
          ref="mainLogoRef"
          class="glass-card mb-12 scroll-animate hover-lift rounded-xl overflow-hidden"
          :class="{ 'visible': mainLogoVisible }"
        >
          <div class="p-6 border-b border-white/10">
            <h2 class="text-2xl font-bold text-white">主要 Logo</h2>
          </div>
          
          <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- 完整版 Logo -->
            <div class="text-center space-y-4">
              <div class="glass-card rounded-lg p-8 flex items-center justify-center hover-lift overflow-hidden cursor-pointer">
                <LogoIcon :size="128" :animated="true" />
              </div>
              <h3 class="text-lg font-semibold text-white">完整版 Logo</h3>
              <p class="text-gray-400 text-sm">包含动画效果的完整版本，适用于网站首页和重要展示场景</p>
              <UButton variant="outline" color="primary" size="sm" class="btn-glow cursor-pointer" @click="downloadLogo('logo.svg')">
                <UIcon name="i-lucide-download" class="size-4 mr-2" />
                下载 SVG
              </UButton>
            </div>

            <!-- 简化版 Logo -->
            <div class="text-center space-y-4">
              <div class="glass-card rounded-lg p-8 flex items-center justify-center hover-lift overflow-hidden cursor-pointer">
                <LogoIcon :size="128" :animated="false" />
              </div>
              <h3 class="text-lg font-semibold text-white">简化版 Logo</h3>
              <p class="text-gray-400 text-sm">简化版本，适用于小尺寸显示和应用图标</p>
              <UButton variant="outline" color="primary" size="sm" class="btn-glow cursor-pointer" @click="downloadLogo('logo-simple.svg')">
                <UIcon name="i-lucide-download" class="size-4 mr-2" />
                下载 SVG
              </UButton>
            </div>
          </div>
        </div>

        <!-- 文字版 Logo -->
        <div 
          ref="textLogoRef"
          class="glass-card mb-12 scroll-animate hover-lift rounded-xl overflow-hidden"
          :class="{ 'visible': textLogoVisible }"
        >
          <div class="p-6 border-b border-white/10">
            <h2 class="text-2xl font-bold text-white">文字版 Logo</h2>
          </div>
          
          <div class="p-6 text-center space-y-6">
            <div class="glass-card rounded-lg p-8 flex items-center justify-center hover-lift overflow-hidden cursor-pointer">
              <div class="flex items-center space-x-4">
                <LogoIcon :size="60" :animated="false" />
                <div class="text-left">
                  <div class="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                    ME-Frp
                  </div>
                  <div class="text-sm text-teal-300">
                    Third-Party Client Alliance
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white mb-2">横版文字 Logo</h3>
              <p class="text-gray-400 text-sm mb-4">包含图标和文字的横版布局，适用于页面头部和官方文档</p>
              <UButton variant="outline" color="primary" size="sm" class="btn-glow cursor-pointer" @click="downloadLogo('logo-text.svg')">
                <UIcon name="i-lucide-download" class="size-4 mr-2" />
                下载 SVG
              </UButton>
            </div>
          </div>
        </div>

        <!-- Favicon -->
        <div 
          ref="faviconRef"
          class="glass-card mb-12 scroll-animate hover-lift rounded-xl overflow-hidden"
          :class="{ 'visible': faviconVisible }"
        >
          <div class="p-6 border-b border-white/10">
            <h2 class="text-2xl font-bold text-white">Favicon</h2>
          </div>
          
          <div class="p-6 text-center space-y-6">
            <div class="glass-card rounded-lg p-8 flex items-center justify-center hover-lift overflow-hidden cursor-pointer">
              <LogoIcon :size="64" :animated="false" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white mb-2">网站图标</h3>
              <p class="text-gray-400 text-sm mb-4">用于浏览器标签页和书签的小尺寸图标</p>
              <div class="flex justify-center space-x-4">
                <UButton variant="outline" color="primary" size="sm" class="btn-glow cursor-pointer" @click="downloadLogo('favicon.svg')">
                  <UIcon name="i-lucide-download" class="size-4 mr-2" />
                  SVG 格式
                </UButton>
                <UButton variant="outline" color="neutral" size="sm" class="btn-glow cursor-pointer" @click="downloadLogo('favicon.ico')">
                  <UIcon name="i-lucide-download" class="size-4 mr-2" />
                  ICO 格式
                </UButton>
              </div>
            </div>
          </div>
        </div>

        <!-- 使用指南 -->
        <div 
          ref="guideRef"
          class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
          :class="{ 'visible': guideVisible }"
        >
          <div class="p-6 border-b border-white/10">
            <h2 class="text-2xl font-bold text-white">使用指南</h2>
          </div>
          
          <div class="p-6 space-y-6 text-gray-300">
            <div>
              <h3 class="text-lg font-semibold text-white mb-3">Logo 设计理念</h3>
              <p class="mb-4">我们的 Logo 设计体现了 ME-Frp 第三方客户端联盟的核心价值：</p>
              <ul class="space-y-2">
                <li class="flex items-start space-x-2">
                  <UIcon name="i-lucide-link" class="size-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span><strong>连接性</strong>：中心节点和辐射连接线象征网络连接和内网穿透</span>
                </li>
                <li class="flex items-start space-x-2">
                  <UIcon name="i-lucide-users" class="size-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span><strong>联盟性</strong>：多个节点连接到中心，代表不同客户端的联合</span>
                </li>
                <li class="flex items-start space-x-2">
                  <UIcon name="i-lucide-sparkles" class="size-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span><strong>创新性</strong>：动态效果和现代配色体现技术创新精神</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-white mb-3">使用规范</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="glass-card p-4 rounded-lg overflow-hidden hover-lift">
                  <h4 class="font-semibold text-teal-400 mb-2">✅ 正确使用</h4>
                  <ul class="space-y-1 text-sm">
                    <li>• 保持 Logo 的完整性和比例</li>
                    <li>• 在深色背景上使用浅色版本</li>
                    <li>• 确保足够的留白空间</li>
                    <li>• 使用官方提供的文件格式</li>
                  </ul>
                </div>
                <div class="glass-card p-4 rounded-lg overflow-hidden hover-lift">
                  <h4 class="font-semibold text-red-400 mb-2">❌ 避免使用</h4>
                  <ul class="space-y-1 text-sm">
                    <li>• 不要拉伸或变形 Logo</li>
                    <li>• 不要改变 Logo 的颜色</li>
                    <li>• 不要在低对比度背景上使用</li>
                    <li>• 不要添加阴影或特效</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-white mb-3">颜色规范</h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="text-center">
                  <div class="w-16 h-16 rounded-lg mx-auto mb-2" style="background: #14b8a6;"></div>
                  <div class="text-sm">
                    <div class="font-medium text-white">主色调</div>
                    <div class="text-gray-400">#14b8a6</div>
                  </div>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 rounded-lg mx-auto mb-2" style="background: #2dd4bf;"></div>
                  <div class="text-sm">
                    <div class="font-medium text-white">辅助色</div>
                    <div class="text-gray-400">#2dd4bf</div>
                  </div>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 rounded-lg mx-auto mb-2" style="background: #5eead4;"></div>
                  <div class="text-sm">
                    <div class="font-medium text-white">高亮色</div>
                    <div class="text-gray-400">#5eead4</div>
                  </div>
                </div>
                <div class="text-center">
                  <div class="w-16 h-16 rounded-lg mx-auto mb-2" style="background: #99f6e4;"></div>
                  <div class="text-sm">
                    <div class="font-medium text-white">浅色调</div>
                    <div class="text-gray-400">#99f6e4</div>
                  </div>
                </div>
              </div>
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
  title: '品牌资源',
  link: [
    { rel: 'canonical', href: 'https://mefrp-tpca.yealqp.cn/brand' }
  ]
})

// SEO 优化
useSeoMeta({
  title: '品牌资源 | ME-Frp 第三方客户端联盟',
  ogTitle: '品牌资源 - ME-Frp 第三方客户端联盟',
  description: 'ME-Frp 第三方客户端联盟的品牌标识、Logo 下载和使用指南，包含完整版 Logo、简化版 Logo 和颜色规范。',
  ogDescription: 'ME-Frp 第三方客户端联盟的品牌标识、Logo 和使用指南',
  ogImage: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/og-image.png',
  ogUrl: 'https://mefrp-tpca.yealqp.cn/brand',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

// 滚动动画
const { elementRef: mainLogoRef, isVisible: mainLogoVisible } = useScrollAnimation()
const { elementRef: textLogoRef, isVisible: textLogoVisible } = useScrollAnimation()
const { elementRef: faviconRef, isVisible: faviconVisible } = useScrollAnimation()
const { elementRef: guideRef, isVisible: guideVisible } = useScrollAnimation()

const downloadLogo = (filename) => {
  // 创建下载链接
  const link = document.createElement('a')
  link.href = `/${filename}`
  link.download = filename
  link.click()
}
</script>