<template>
  <section class="py-16 lg:py-24 relative" style="background: linear-gradient(180deg, #111827 0%, #0F172A 100%);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- 产品标题 -->
      <div ref="productTitleRef" class="text-center mb-16 scroll-animate" :class="{ 'visible': productTitleVisible }">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">我们的产品</h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          为不同需求的用户提供多样化的 ME-Frp 客户端解决方案
        </p>
      </div>

      <!-- 产品网格 -->
      <div ref="productGridRef" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 pt-2">
        <div v-for="(product, index) in products" :key="product.id" class="scroll-animate-scale pt-2"
          :class="{ 'visible': productGridVisible }" :style="{ transitionDelay: `${getProductDelay(index)}ms` }">
          <div class="glass-card hover-lift h-full relative rounded-xl">
            <div class="px-4 py-4 sm:px-6 border-b border-white/10">
              <div class="flex items-center space-x-4">
                <img :src="product.icon" :alt="`${product.name} 图标`" class="w-12 h-12 rounded-lg" loading="lazy"
                  :onerror="product.fallbackIcon ? `if(!this.dataset.fallback){this.dataset.fallback='1';this.src='${product.fallbackIcon}'}` : undefined">
                <div>
                  <h3 class="text-xl font-semibold text-white">{{ product.name }}</h3>
                  <p class="text-sm text-gray-400">{{ product.author }} · {{ product.version }}</p>
                </div>
              </div>
            </div>
            <div class="px-4 py-4 sm:px-6 space-y-4">
              <p class="text-gray-300 leading-relaxed">{{ product.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in product.tags" :key="tag"
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500/20 text-teal-300">{{
                  tag }}</span>
              </div>
            </div>
            <div class="px-4 py-4 sm:px-6 border-t border-white/10">
              <UButton variant="outline" color="primary" :to="product.link" target="_blank"
                class="btn-glow cursor-pointer">
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
        <div v-for="(member, index) in members" :key="member.name" class="scroll-animate-bounce pt-2"
          :class="{ 'visible': membersGridVisible }" :style="{ transitionDelay: `${getMemberDelay(index)}ms` }">
          <div class="glass-card text-center hover-lift h-full rounded-xl">
            <div class="px-4 py-6 sm:px-6 space-y-4">
              <div class="flex justify-center">
                <img :src="member.avatar" :alt="`${member.name} - ${member.role}`"
                  class="w-20 h-20 rounded-full border-2 border-teal-500/50" loading="lazy" @error="handleImageError">
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">{{ member.name }}</h3>
                <p class="text-sm text-gray-400">{{ member.role }}</p>
              </div>
              <UButton variant="ghost" color="primary" size="sm" :to="member.link" target="_blank"
                class="btn-glow cursor-pointer">
                <UIcon name="i-lucide-github" class="size-4 mr-2" />
                GitHub
              </UButton>
            </div>
          </div>
        </div>
      </div>

      <!-- 特别鸣谢 -->
      <div class="border-t border-gray-800 pt-16 mb-24">
        <div ref="sponsorsTitleRef" class="text-center mb-12 scroll-animate"
          :class="{ 'visible': sponsorsTitleVisible }">
          <h3 class="text-2xl font-bold text-white mb-4">特别鸣谢</h3>
          <p class="text-gray-400">感谢以下个人和组织的支持</p>
        </div>
        <div ref="sponsorsGridRef" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          <div v-for="(sponsor, index) in sponsors" :key="sponsor.name" class="scroll-animate-flip pt-2"
            :class="{ 'visible': sponsorsGridVisible }" :style="{ transitionDelay: `${getSponsorDelay(index)}ms` }">
            <div class="glass-card text-center hover-lift overflow-hidden h-full relative"
              :class="{ 'special-card': sponsor.special }">
              <div class="px-4 py-6 sm:px-6 space-y-4">
                <div class="flex justify-center">
                  <img :src="sponsor.avatar" :alt="`${sponsor.name} - ${sponsor.role}`" class="w-16 h-16 rounded-full"
                    :class="{ 'ring-2 ring-teal-400 ring-offset-2 ring-offset-gray-900': sponsor.special }"
                    loading="lazy" @error="handleImageError">
                </div>
                <div>
                  <h4 class="text-lg font-semibold" :class="sponsor.special ? 'text-teal-300' : 'text-white'">{{
                    sponsor.name }}</h4>
                  <p class="text-sm text-gray-400">{{ sponsor.role }}</p>
                </div>
                <UButton variant="ghost" color="primary" size="sm" :to="sponsor.link" target="_blank"
                  class="btn-glow cursor-pointer">
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
          <div v-for="(stat, index) in stats" :key="stat.label" class="scroll-animate"
            :class="{ 'visible': statsGridVisible }" :style="{ transitionDelay: `${getStatsDelay(index)}ms` }">
            <div class="glass-card text-center p-6 rounded-xl hover-lift overflow-hidden h-full">
              <div class="flex justify-center mb-4">
                <div class="p-4 rounded-full transition-all duration-300" style="background: rgba(20, 184, 166, 0.2);">
                  <UIcon :name="stat.icon" class="size-8 text-teal-400" />
                </div>
              </div>
              <div class="text-3xl md:text-4xl font-bold text-white mb-2"
                style="text-shadow: 0 0 20px rgba(59, 130, 246, 0.3);">{{ stat.value }}</div>
              <div class="text-sm text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getProductSummaries } from "~/data/products";

// 产品区域动画
const { elementRef: productTitleRef, isVisible: productTitleVisible } = useScrollAnimation()
const { containerRef: productGridRef, isVisible: productGridVisible, getItemDelay: getProductDelay } = useScrollAnimationGroup(6, { staggerDelay: 150 })

// 团队区域动画
const { elementRef: teamTitleRef, isVisible: teamTitleVisible } = useScrollAnimation()
// 【修改】成员数量由 5 增至 6（新增 zhai）
const { containerRef: membersGridRef, isVisible: membersGridVisible, getItemDelay: getMemberDelay } = useScrollAnimationGroup(6, { staggerDelay: 100 })

// 特别鸣谢区域动画
const { elementRef: sponsorsTitleRef, isVisible: sponsorsTitleVisible } = useScrollAnimation()
const { containerRef: sponsorsGridRef, isVisible: sponsorsGridVisible, getItemDelay: getSponsorDelay } = useScrollAnimationGroup(3, { staggerDelay: 150 })

// 统计区域动画
const { containerRef: statsGridRef, isVisible: statsGridVisible, getItemDelay: getStatsDelay } = useScrollAnimationGroup(4, { staggerDelay: 100 })

// 使用版本管理 composable
const { versions, fetchAllVersions } = useProductVersions()

// 产品列表（从共享数据文件获取，保持 version 字段响应式）
const products = computed(() => getProductSummaries(versions.value))

// 组件挂载时获取版本号
onMounted(() => {
  fetchAllVersions()
})

const members = ref([
  { name: 'Yealqp', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=1592239257&spec=4', role: 'DevOps / 创始人 / 成员', link: 'https://github.com/Yealqp' },
  { name: '灵弦MuaMua', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=407176772&spec=4', role: '创始人 / 成员', link: 'https://github.com/lngxian' },
  { name: 'QYF', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3561786358&spec=4', role: '创始人 / 成员', link: 'https://github.com/QYF-RYCBStudio' },
  { name: 'ZeroSnow', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3976141098&spec=4', role: '成员', link: 'https://github.com/chencomcdyun' },
  { name: 'xiaofan', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2183576276&spec=4', role: '成员', link: 'https://github.com/xiaofanforfabric/' },
  // 【新增】zhai：FrpDash（面向安卓端的 ME-Frp 第三方客户端）开发者
  { name: 'zhai', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=2088264797&spec=4', role: '成员', link: 'https://github.com/zcj-ui' }
])

const sponsors = ref([
  { name: '落雪无痕LxHTT', avatar: 'https://q2.qlogo.cn/headimg_dl?dst_uin=3395314362&spec=4', role: '特别鸣谢', link: 'https://github.com/LxHTT', special: false },
  { name: 'MCSLTeam-Website-Next', avatar: 'https://avatars.githubusercontent.com/u/138136619?s=48&v=4', role: '特别鸣谢', link: 'https://github.com/MCSLTeam/MCSLTeam-Website-Next', special: false },
  { name: '仙林云计算', avatar: 'https://image.mefrp-tpca.yealqp.cn/images/xianlin.ico', role: '服务提供商', link: 'https://www.idcxl.cn/', special: true }
])

const stats = ref([
  { icon: 'i-lucide-box', value: '6+', label: '客户端产品' },
  { icon: 'i-lucide-users', value: '6+', label: '团队成员' },
  { icon: 'i-lucide-code', value: '100%', label: '社区驱动' },
  { icon: 'i-lucide-heart', value: '∞', label: '用户支持' }
])

const handleImageError = (event) => {
  event.target.style.display = 'none'
}
</script>
