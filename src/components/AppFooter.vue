<template>
  <footer class="bg-gray-900/50 backdrop-blur-md border-t border-white/10">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <!-- 左侧信息 -->
        <div class="space-y-2">
          <p class="text-gray-400 text-sm">
            Copyright © 2026 ME-Frp Third-Party Client Alliance.
          </p>
          <p class="text-gray-500 text-xs">
            我们已奋斗 {{ runtimeText }}
          </p>
          <p class="text-gray-400 text-sm">
            本站借鉴自
            <NuxtLink :to="MCSLTEAM_URL" target="_blank"
              class="text-teal-400 hover:text-teal-300 transition-smooth cursor-pointer">
              MCSLTeam官网
            </NuxtLink>
            。
          </p>
        </div>

        <!-- 右侧链接 -->
        <div class="flex flex-col items-start md:items-end space-y-3">
          <NuxtLink :to="ICP_QUERY_URL" target="_blank"
            class="text-gray-400 hover:text-teal-400 text-sm transition-smooth cursor-pointer">
            {{ ICP_BEIAN }}
          </NuxtLink>

          <div class="flex items-center space-x-4">
            <UButton variant="ghost" size="sm" color="neutral" :to="GITHUB_REPO"
              target="_blank" class="text-gray-400 hover:text-teal-400 btn-glow cursor-pointer">
              <UIcon name="i-lucide-github" class="size-5" />
              Github
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FOUNDING_DATE, ICP_BEIAN, GITHUB_REPO, MCSLTEAM_URL, ICP_QUERY_URL } from "~/data/constants";

const runtimeText = ref('')

const calculateRuntime = () => {
  const startTime = new Date(FOUNDING_DATE)
  const now = new Date()
  const diff = now - startTime

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  runtimeText.value = `${days}天${hours}小时${minutes}分钟${seconds}秒`
}

onMounted(() => {
  calculateRuntime()
  setInterval(calculateRuntime, 1000)
})
</script>
