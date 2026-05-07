<template>
  <div class="min-h-screen bg-gray-950">
    <!-- 导航栏 -->
    <AppHeader />

    <!-- 主要内容 -->
    <main>
      <slot />
    </main>

    <!-- 页脚 -->
    <AppFooter v-if="!isProtocolPage" />
  </div>
</template>

<script setup>
const route = useRoute()

// 判断是否为协议页面
const isProtocolPage = computed(() => {
  return route.path.startsWith('/protocol')
})
</script>