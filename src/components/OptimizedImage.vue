<template>
  <img :src="src" :alt="alt" :class="className" :loading="loading" :decoding="decoding" :width="width" :height="height"
    @error="handleError" />
</template>

<script setup lang="ts">
/**
 * 优化的图片组件
 * - 懒加载
 * - 错误处理
 * - 尺寸优化
 */

interface Props {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
  width?: number
  height?: number
  fallback?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  loading: 'lazy',
  decoding: 'async',
  fallback: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3C/svg%3E'
})

const handleError = (event: Event) => {
  const target = event.target as HTMLImageElement
  if (props.fallback && target.src !== props.fallback) {
    target.src = props.fallback
  }
}
</script>
