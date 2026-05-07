<template>
  <div
    class="changelog-card bg-white/5 rounded-lg p-5 hover:bg-white/10 transition-smooth border border-white/10"
    :style="{ contentVisibility: 'auto', containIntrinsicSize: '0 200px' }"
  >
    <!-- 版本头部 -->
    <div class="flex flex-wrap items-center gap-3 mb-3">
      <h3 class="text-xl font-bold text-white">{{ update.version }}</h3>

      <!-- 标签组 -->
      <div class="flex flex-wrap items-center gap-2">
        <span
          v-if="update.isLatest"
          class="px-2.5 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400 border border-green-500/30"
        >
          <UIcon
            name="i-lucide-sparkles"
            class="size-3 inline-block mr-1"
          />
          最新版本
        </span>

        <a
          v-if="update.codename"
          :href="`https://api.rycb.tech/codename/${update.codename}`"
          target="_blank"
          class="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-colors cursor-pointer inline-flex items-center"
        >
          <UIcon name="i-lucide-tag" class="size-3 inline-block mr-1" />
          {{ update.codename }}
        </a>

        <span
          v-if="update.date"
          class="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-500/20 text-gray-400 border border-gray-500/30"
        >
          <UIcon
            name="i-lucide-calendar"
            class="size-3 inline-block mr-1"
          />
          {{ update.date }}
        </span>
      </div>
    </div>

    <!-- 版本描述 -->
    <p
      v-if="update.description || update.note"
      class="text-gray-400 text-sm mb-4 italic"
      v-html="update.description || update.note"
    ></p>

    <!-- 更新内容 -->
    <div class="space-y-2">
      <h4
        class="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2"
      >
        <UIcon name="i-lucide-list" class="size-4 text-primary-400" />
        更新内容
      </h4>
      <ul class="space-y-2">
        <li
          v-for="(item, index) in changeList"
          :key="index"
          class="flex items-start space-x-3 text-gray-300 text-sm group"
        >
          <span
            class="flex-shrink-0 w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 group-hover:scale-125 transition-transform"
          ></span>
          <span
            class="flex-1 leading-relaxed"
            v-html="formatChangeItem(item)"
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Update {
  version: string
  isLatest?: boolean
  date?: string
  description?: string
  note?: string
  codename?: string
  changes?: string[]
  notes?: string[]
}

const props = defineProps<{
  update: Update
}>()

// 统一处理 changes 和 notes
const changeList = computed(() => {
  return props.update.changes || props.update.notes || []
})

// 格式化更新项（处理换行和HTML）
const formatChangeItem = (item: string): string => {
  if (!item) return ''
  // 将 \n 转换为 <br>，保留原有的 HTML 标签
  return item.replace(/\n/g, '<br>')
}
</script>

<style scoped>
.changelog-card {
  /* 使用 contain 优化渲染性能 */
  contain: layout style paint;
}

/* 优化 hover 性能 */
.changelog-card:hover {
  will-change: background-color;
}
</style>
