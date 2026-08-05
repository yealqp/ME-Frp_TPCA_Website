<template>
  <div class="scroll-progress" :style="{ width: `${progress}%` }" role="progressbar"
    :aria-valuenow="Math.round(progress)" aria-valuemin="0" aria-valuemax="100" aria-label="页面滚动进度" />
</template>

<script setup lang="ts">
const progress = ref(0)

const updateProgress = () => {
  if (import.meta.server) return

  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
}

onMounted(() => {
  if (import.meta.server) return
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  if (import.meta.server) return
  window.removeEventListener('scroll', updateProgress)
})
</script>
