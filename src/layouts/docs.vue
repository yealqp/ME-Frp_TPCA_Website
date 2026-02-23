<template>
  <div class="min-h-screen" style="background: linear-gradient(135deg, #0F172A 0%, #111827 50%, #0A0E27 100%);">
    <!-- 动态光斑背景 -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
    </div>

    <!-- 导航栏 -->
    <AppHeader />

    <!-- 文档容器 -->
    <div class="flex pt-16 relative z-10">
      <!-- 左侧导航栏 -->
      <aside
        class="fixed left-0 top-16 bottom-0 w-64 border-r border-white/10 overflow-y-auto z-40 transition-transform duration-300 -translate-x-full lg:translate-x-0"
        style="background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(12px);"
        :class="{ 'translate-x-0': sidebarOpen }"
      >
        <div class="p-6">
          <h2 class="text-lg font-semibold text-white mb-4">文档导航</h2>

          <!-- 导航菜单 -->
          <nav class="space-y-2">
            <!-- 介绍 -->
            <div class="mb-4">
              <NuxtLink
                to="/docs"
                class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-white/5 transition-all duration-200"
                :class="{
                  'text-primary-400 bg-white/10': $route.path === '/docs',
                }"
              >
                <UIcon name="i-lucide-file-text" class="size-5" />
                <span>项目介绍</span>
              </NuxtLink>
            </div>

            <!-- 客户端文档 -->
            <div>
              <div
                class="flex items-center space-x-2 px-3 py-2 text-gray-400 text-sm font-medium"
              >
                <UIcon name="i-lucide-folder" class="size-4" />
                <span>客户端文档</span>
              </div>

              <div class="ml-4 space-y-1">
                <NuxtLink
                  v-for="client in clients"
                  :key="client.id"
                  :to="client.path"
                  class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-white/5 transition-all duration-200"
                  :class="{
                    'text-primary-400 bg-white/10':
                      $route.path === client.path,
                  }"
                >
                  <img
                    :src="client.icon"
                    :alt="client.name"
                    class="w-4 h-4 rounded"
                  />
                  <span class="text-sm">{{ client.name }}</span>
                </NuxtLink>
              </div>
            </div>

            <!-- 快速链接 -->
            <div class="mt-6 pt-4 border-t border-white/10">
              <div
                class="flex items-center space-x-2 px-3 py-2 text-gray-400 text-sm font-medium mb-2"
              >
                <UIcon name="i-lucide-link" class="size-4" />
                <span>快速链接</span>
              </div>

              <div class="space-y-1">
                <a
                  href="https://github.com/yealqp/ME-Frp_TPCA_Website"
                  target="_blank"
                  class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-white/5 transition-all duration-200"
                >
                  <UIcon name="i-lucide-github" class="size-4" />
                  <span class="text-sm">GitHub 仓库</span>
                </a>

                <NuxtLink
                  to="/about"
                  class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-white/5 transition-all duration-200"
                >
                  <UIcon
                    name="i-lucide-info"
                    class="size-4"
                  />
                  <span class="text-sm">关于我们</span>
                </NuxtLink>
                <NuxtLink
                  to="https://www.idcxl.cn/"
                  class="group flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 transition-all duration-200 relative overflow-hidden special-link"
                >
                  <img
                    src="https://image.mefrp-tpca.yealqp.cn/images/xianlin.ico"
                    alt="仙林云计算"
                    class="w-4 h-4 rounded group-hover:scale-110 transition-transform duration-200"
                  />
                  <span class="text-sm bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent font-medium">仙林云计算</span>
                  <UIcon name="i-lucide-external-link" class="size-3 text-primary-400/60 group-hover:text-primary-400 transition-colors" />
                </NuxtLink>
              </div>
            </div>

            <!-- 广告位 -->
            <div class="mt-6 pt-4 border-t border-white/10">
              <a
                href="mailto:im@yealqp.cn?subject=广告位购买咨询"
                class="flex items-center justify-center space-x-2 px-3 py-2.5 rounded-lg text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-500/50 transition-all duration-200"
              >
                <UIcon name="i-lucide-megaphone" class="size-4" />
                <span class="text-sm font-medium">购买广告位</span>
              </a>
            </div>
          </nav>
        </div>
      </aside>

      <!-- 移动端遮罩 -->
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
        @click="sidebarOpen = false"
      ></div>

      <!-- 主要内容区域 -->
      <main class="flex-1 lg:ml-64">
        <!-- 移动端菜单按钮 -->
        <div class="lg:hidden p-4 border-b border-white/10">
          <UButton
            variant="ghost"
            size="sm"
            @click="sidebarOpen = !sidebarOpen"
          >
            <UIcon name="i-lucide-menu" class="size-5 mr-2" />
            文档菜单
          </UButton>
        </div>

        <!-- 页面内容 -->
        <div class="px-4 sm:px-6 lg:px-8 py-8 max-w-5xl mx-auto">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const sidebarOpen = ref(false);

const clients = [
  {
    id: "xl",
    name: "XL-ME-Frp-Launcher",
    path: "/docs/xl",
    icon: "https://image.mefrp-tpca.yealqp.cn/images/views/icon/xl_icon.webp",
  },
  {
    id: "lx",
    name: "LX-ME-Frp-Launcher",
    path: "/docs/lx",
    icon: "https://image.mefrp-tpca.yealqp.cn/images/views/icon/lx_icon.webp",
  },
  {
    id: "pml",
    name: "Plain ME Frp Launcher",
    path: "/docs/pml",
    icon: "https://image.mefrp-tpca.yealqp.cn/images/views/icon/pml_icon.webp",
  },
];

// 监听路由变化，关闭移动端侧边栏
watch(
  () => useRoute().path,
  () => {
    sidebarOpen.value = false;
  }
);
</script>
