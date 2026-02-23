<template>
  <section class="py-16 lg:py-24 relative" style="background: linear-gradient(180deg, #111827 0%, #0F172A 100%);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- 产品标题 -->
      <div 
        ref="productTitleRef"
        class="text-center mb-16 scroll-animate"
        :class="{ 'visible': productTitleVisible }"
      >
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">我们的产品</h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          为不同需求的用户提供多样化的 ME-Frp 客户端解决方案
        </p>
      </div>

      <!-- 产品网格 -->
      <div 
        ref="productGridRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 pt-2"
      >
        <div 
          v-for="(product, index) in products" 
          :key="product.id"
          class="scroll-animate-scale pt-2"
          :class="{ 'visible': productGridVisible }"
          :style="{ transitionDelay: `${getProductDelay(index)}ms` }"
        >
          <div class="glass-card hover-lift h-full relative rounded-xl">
            <div class="px-4 py-4 sm:px-6 border-b border-white/10">
              <div class="flex items-center space-x-4">
                <img :src="product.icon" :alt="`${product.name} 图标`" class="w-12 h-12 rounded-lg" loading="lazy">
                <div>
                  <h3 class="text-xl font-semibold text-white">{{ product.name }}</h3>
                  <p class="text-sm text-gray-400">{{ product.author }} · {{ product.version }}</p>
                </div>
              </div>
            </div>
            <div class="px-4 py-4 sm:px-6 space-y-4">
              <p class="text-gray-300 leading-relaxed">{{ product.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in product.tags" :key="tag" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500/20 text-teal-300">{{ tag }}</span>
              </div>
            </div>
            <div class="px-4 py-4 sm:px-6 border-t border-white/10">
              <UButton variant="outline" color="primary" :to="product.link" target="_blank" class="btn-glow cursor-pointer">
                <UIcon name="i-lucide-external-link" class="size-4 mr-2" />
                查看详情
              </UButton>
            </div>
          </div>
        </div>
      </div>

      <!-- 团队标题 -->
      <div ref="teamTitleRef" class="text-center mb-16 scroll-animate" :class="{ 'visible': teamTitleVisible }">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">团队成员</h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">我们是一群热爱技术、勇于创新的开发者</p>
      </div>

      <!-- 成员网格 -->
      <div ref="membersGridRef" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 pt-2">
        <div 
          v-for="(member, index) in members" 
          :key="member.name" 
          class="scroll-animate-bounce pt-2" 
          :class="{ 'visible': membersGridVisible }" 
          :style="{ transitionDelay: `${getMemberDelay(index)}ms` }"
        >
          <div class="glass-card text-center hover-lift h-full rounded-xl">
            <div class="px-4 py-6 sm:px-6 space-y-4">
              <div class="flex justify-center">
                <img :src="member.avatar" :alt="`${member.name} - ${member.role}`" class="w-20 h-20 rounded-full border-2 border-teal-500/50" loading="lazy" @error="handleImageError">
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">{{ member.name }}</h3>
                <p class="text-sm text-gray-400">{{ member.role }}</p>
              </div>
              <UButton variant="ghost" color="primary" size="sm" :to="member.link" target="_blank" class="btn-glow cursor-pointer">
                <UIcon name="i-lucide-github" class="size-4 mr-2" />
                GitHub
              </UButton>
            </div>
          </div>
        </div>
      </div>

      <!-- 特别鸣谢 -->
      <div class="border-t border-gray-800 pt-16 mb-24">
        <div ref="sponsorsTitleRef" class="text-center mb-12 scroll-animate" :class="{ 'visible': sponsorsTitleVisible }">
          <h3 class="text-2xl font-bold text-white mb-4">特别鸣谢</h3>
          <p class="text-gray-400">感谢以下个人和组织的支持</p>
        </div>
        <div ref="sponsorsGridRef" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          <div 
            v-for="(sponsor, index) in sponsors" 
            :key="sponsor.name" 
            class="scroll-animate-flip pt-2" 
            :class="{ 'visible': sponsorsGridVisible }" 
            :style="{ transitionDelay: `${getSponsorDelay(index)}ms` }"
          >
            <div class="glass-card text-center hover-lift overflow-hidden h-full relative" :class="{ 'special-card': sponsor.special }">
              <div class="px-4 py-6 sm:px-6 space-y-4">
                <div class="flex justify-center">
                  <img :src="sponsor.avatar" :alt="`${sponsor.name} - ${sponsor.role}`" class="w-16 h-16 rounded-full" :class="{ 'ring-2 ring-teal-400 ring-offset-2 ring-offset-gray-900': sponsor.special }" loading="lazy" @error="handleImageError">
                </div>
                <div>
                  <h4 class="text-lg font-semibold" :class="sponsor.special ? 'text-teal-300' : 'text-white'">{{ sponsor.name }}</h4>
                  <p class="text-sm text-gray-400">{{ sponsor.role }}</p>
                </div>
                <UButton variant="ghost" color="primary" size="sm" :to="sponsor.link" target="_blank" class="btn-glow cursor-pointer">
                  <UIcon name="i-lucide-external-link" class="size-4 mr-2" />
                  访问
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 数据统计 -->
      <div class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">数据一览</h2>
          <p class="text-gray-400">我们的成长与贡献</p>
        </div>
        <div ref="statsGridRef" class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div 
            v-for="(stat, index) in stats" 
            :key="stat.label" 
            class="scroll-animate" 
            :class="{ 'visible': statsGridVisible }" 
            :style="{ transitionDelay: `${getStatsDelay(index)}ms` }"
          >
            <div class="glass-card text-center p-6 rounded-xl hover-lift overflow-hidden h-full">
              <div class="flex justify-center mb-4">
                <div class="p-4 rounded-full transition-all duration-300" style="background: rgba(20, 184, 166, 0.2);">
                  <UIcon :name="stat.icon" class="size-8 text-teal-400" />
                </div>
              </div>
              <div class="text-3xl md:text-4xl font-bold text-white mb-2" style="text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);">{{ stat.value }}</div>
              <div class="text-sm text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 产品区域动画
const { elementRef: productTitleRef, isVisible: productTitleVisible } = useScrollAnimation()
const { containerRef: productGridRef, isVisible: productGridVisible, getItemDelay: getProductDelay } = useScrollAnimationGroup(3, { staggerDelay: 150 })

// 团队区域动画
const { elementRef: teamTitleRef, isVisible: teamTitleVisible } = useScrollAnimation()
const { containerRef: membersGridRef, isVisible: membersGridVisible, getItemDelay: getMemberDelay } = useScrollAnimationGroup(4, { staggerDelay: 100 })

// 特别鸣谢区域动画
const { elementRef: sponsorsTitleRef, isVisible: sponsorsTitleVisible } = useScrollAnimation()
const { containerRef: sponsorsGridRef, isVisible: sponsorsGridVisible, getItemDelay: getSponsorDelay } = useScrollAnimationGroup(3, { staggerDelay: 150 })

// 统计区域动画
const { containerRef: statsGridRef, isVisible: statsGridVisible, getItemDelay: getStatsDelay } = useScrollAnimationGroup(4, { staggerDelay: 100 })

// 使用版本管理 composable
const { versions, fetchAllVersions } = useProductVersions()

// 产品列表（使用计算属性动态获取版本号）
const products = computed(() => [
  { id: 'xl', name: 'XL-ME-Frp-Launcher', author: 'yealqp', version: versions.value.xl, description: '由yealqp使用Tauri框架开发，界面高仿官网样式，可能是目前收录的三个客户端中最美观的一个，也可能也是包体最小的一个，亦或是bug最少的一个。', icon: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/xl_icon.webp', link: 'https://mefrp-tpca.yealqp.cn/docs/xl', tags: ['Tauri', '跨平台', '轻量级'] },
  { id: 'lx', name: 'LX-ME-Frp-Launcher', author: '灵弦MuaMua', version: versions.value.lx, description: '由灵弦MuaMua使用易语言&Exui开发，界面高仿官方图形化V4.0。', icon: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/lx_icon.webp', link: 'https://mefrp-tpca.yealqp.cn/docs/lx', tags: ['易语言', 'Windows', '官方风格'] },
  { id: 'pml', name: 'Plain ME Frp Launcher', author: 'RYCB工作室', version: versions.value.pml, description: 'PML 2使用.NET提供了简单便捷的操作, 也是目前三个产品中唯一一个跨平台的软件。支持常见主流平台(Windows, Linux, MacOS, Android)。', icon: 'https://image.mefrp-tpca.yealqp.cn/images/views/icon/pml_icon.webp', link: 'https://mefrp-tpca.yealqp.cn/docs/pml', tags: ['.NET', '跨平台', '多系统'] }
])

// 组件挂载时获取版本号
onMounted(() => {
  fetchAllVersions()
})

const members = ref([
  { name: 'Yealqp', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1592239257&spec=4', role: 'DevOps / 创始人 / 成员', link: 'https://github.com/Yealqp' },
  { name: '灵弦MuaMua', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=407176772&spec=4', role: '创始人 / 成员', link: 'https://github.com/lngxian' },
  { name: 'QYF', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3561786358&spec=4', role: '创始人 / 成员', link: 'https://github.com/QYF-RYCBStudio' },
  { name: 'ZeroSnow', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3976141098&spec=4', role: '联盟网盘维护者', link: 'https://github.com/chencomcdyun' }
])

const sponsors = ref([
  { name: '落雪无痕LxHTT', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3395314362&spec=4', role: '特别鸣谢', link: 'https://github.com/LxHTT', special: false },
  { name: 'MCSLTeam-Website-Next', avatar: 'https://avatars.githubusercontent.com/u/138136619?s=48&v=4', role: '特别鸣谢', link: 'https://github.com/MCSLTeam/MCSLTeam-Website-Next', special: false },
  { name: '仙林云计算', avatar: 'https://image.mefrp-tpca.yealqp.cn/images/xianlin.ico', role: '服务提供商', link: 'https://www.idcxl.cn/', special: true }
])

const stats = ref([
  { icon: 'i-lucide-box', value: '3+', label: '客户端产品' },
  { icon: 'i-lucide-users', value: '4+', label: '团队成员' },
  { icon: 'i-lucide-code', value: '100%', label: '社区驱动' },
  { icon: 'i-lucide-heart', value: '∞', label: '用户支持' }
])

const handleImageError = (event) => {
  event.target.style.display = 'none'
}
</script>
