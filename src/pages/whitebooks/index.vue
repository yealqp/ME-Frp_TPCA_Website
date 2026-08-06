<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="py-16 lg:py-24 relative overflow-hidden"
      style="background: linear-gradient(135deg, #0F172A 0%, #111827 50%, #0A0E27 100%);">
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="animate-fade-in-up">
          <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm mb-6">
            <UIcon name="i-lucide-library" class="size-4" />
            <span>文档库</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6"
            style="text-shadow: 0 0 30px rgba(20, 184, 166, 0.3);">
            白皮书
          </h1>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            ME Frp TPCA 联盟官方白皮书，记录联盟的发展历程、理念与愿景
          </p>
        </div>
      </div>
    </section>

    <!-- 白皮书列表 -->
    <section class="py-16 lg:py-24 relative" style="background: linear-gradient(180deg, #111827 0%, #0F172A 100%);">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-6">
          <div v-for="(paper, index) in whitebooks" :key="paper.year"
            :ref="el => { if (el) cardRefs[index] = el }"
            class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden cursor-pointer group"
            :class="{ 'visible': cardVisibility[index] }"
            :style="{ transitionDelay: `${index * 100}ms` }"
            @click="navigateTo(paper.link)">
            <div class="p-6 flex items-center gap-6">
              <!-- 年份标识 -->
              <div class="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-colors"
                :style="{ background: `rgba(20, 184, 166, ${paper.featured ? 0.2 : 0.1})` }">
                <span class="text-2xl font-bold" :class="paper.featured ? 'text-teal-400' : 'text-teal-500'">
                  {{ String(paper.year).slice(2) }}
                </span>
              </div>

              <!-- 信息 -->
              <div class="flex-grow min-w-0">
                <div class="flex items-center gap-3 mb-1">
                  <h2 class="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {{ paper.title }}
                  </h2>
                  <span v-if="paper.featured"
                    class="px-2 py-0.5 text-xs font-medium rounded-full bg-teal-500/20 text-teal-400">
                    最新
                  </span>
                </div>
                <p class="text-gray-400 line-clamp-2">
                  {{ paper.subtitle }}
                </p>
                <div class="flex items-center gap-4 mt-3 text-sm text-gray-500">
                  <span class="flex items-center gap-1">
                    <UIcon name="i-lucide-calendar" class="size-3.5" />
                    {{ paper.date }}
                  </span>
                  <span class="flex items-center gap-1">
                    <UIcon name="i-lucide-file-text" class="size-3.5" />
                    {{ paper.sections }} 章
                  </span>
                </div>
              </div>

              <!-- 箭头 -->
              <div class="flex-shrink-0 text-gray-600 group-hover:text-teal-400 transition-colors">
                <UIcon name="i-lucide-chevron-right" class="size-5" />
              </div>
            </div>
          </div>
        </div>

        <!-- 空状态 -->
        <div v-if="whitebooks.length === 0" class="text-center py-16">
          <UIcon name="i-lucide-book-open" class="size-16 text-gray-600 mx-auto mb-4" />
          <p class="text-gray-500 text-lg">暂无白皮书</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 白皮书列表（按年份倒序，新白皮书追加到数组最前面）
const whitebooks = [
  {
    year: 2026,
    title: 'ME Frp TPCA 联盟白皮书 (2026)',
    subtitle: '从三人行到群英会——社区驱动的内网穿透客户端生态',
    date: '2026 年 6 月',
    sections: 8,
    link: '/whitebooks/2026',
    featured: true,
  },
]

const cardRefs = ref<(HTMLElement | null)[]>([])
const cardVisibility = ref<boolean[]>(whitebooks.map(() => false))

onMounted(() => {
  cardRefs.value.forEach((el, i) => {
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardVisibility.value[i] = true
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    observer.observe(el)
  })
})
</script>
