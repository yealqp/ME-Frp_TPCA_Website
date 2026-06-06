<template>
  <svg :width="size" :height="size" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
    :class="className">
    <!-- 背景圆形 -->
    <circle cx="60" cy="60" r="58" fill="url(#gradient1)" stroke="url(#gradient2)" stroke-width="2" />

    <!-- 中心连接点 -->
    <circle cx="60" cy="60" r="8" fill="#14b8a6" />

    <!-- 网络连接线 -->
    <!-- 主要连接线 -->
    <line x1="60" y1="20" x2="60" y2="52" stroke="url(#gradient3)" stroke-width="3" stroke-linecap="round" />
    <line x1="60" y1="68" x2="60" y2="100" stroke="url(#gradient3)" stroke-width="3" stroke-linecap="round" />
    <line x1="20" y1="60" x2="52" y2="60" stroke="url(#gradient3)" stroke-width="3" stroke-linecap="round" />
    <line x1="68" y1="60" x2="100" y2="60" stroke="url(#gradient3)" stroke-width="3" stroke-linecap="round" />

    <!-- 对角连接线 -->
    <line x1="35" y1="35" x2="52" y2="52" stroke="url(#gradient4)" stroke-width="2" stroke-linecap="round" />
    <line x1="68" y1="68" x2="85" y2="85" stroke="url(#gradient4)" stroke-width="2" stroke-linecap="round" />
    <line x1="85" y1="35" x2="68" y2="52" stroke="url(#gradient4)" stroke-width="2" stroke-linecap="round" />
    <line x1="52" y1="68" x2="35" y2="85" stroke="url(#gradient4)" stroke-width="2" stroke-linecap="round" />

    <!-- 外围节点 -->
    <circle cx="60" cy="20" r="6" fill="#2dd4bf" />
    <circle cx="60" cy="100" r="6" fill="#2dd4bf" />
    <circle cx="20" cy="60" r="6" fill="#2dd4bf" />
    <circle cx="100" cy="60" r="6" fill="#2dd4bf" />

    <!-- 对角节点 -->
    <circle cx="35" cy="35" r="4" fill="#5eead4" />
    <circle cx="85" cy="35" r="4" fill="#5eead4" />
    <circle cx="35" cy="85" r="4" fill="#5eead4" />
    <circle cx="85" cy="85" r="4" fill="#5eead4" />

    <!-- 数据流动效果 (仅在启用动画时显示) -->
    <circle v-if="animated" cx="60" cy="30" r="2" fill="#99f6e0" opacity="0.8">
      <animate attributeName="cy" values="30;50;30" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
    </circle>

    <circle v-if="animated" cx="30" cy="60" r="2" fill="#99f6e0" opacity="0.8">
      <animate attributeName="cx" values="30;50;30" dur="2.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
    </circle>

    <circle v-if="animated" cx="90" cy="60" r="2" fill="#99f6e0" opacity="0.8">
      <animate attributeName="cx" values="90;70;90" dur="2.2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.2s" repeatCount="indefinite" />
    </circle>

    <!-- 渐变定义 -->
    <defs>
      <!-- 背景渐变 -->
      <radialGradient id="gradient1" cx="0.3" cy="0.3" r="0.8">
        <stop offset="0%" stop-color="#134e4a" stop-opacity="0.1" />
        <stop offset="100%" stop-color="#042f2e" stop-opacity="0.3" />
      </radialGradient>

      <!-- 边框渐变 -->
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#14b8a6" />
        <stop offset="50%" stop-color="#2dd4bf" />
        <stop offset="100%" stop-color="#5eead4" />
      </linearGradient>

      <!-- 主连接线渐变 -->
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#14b8a6" />
        <stop offset="100%" stop-color="#2dd4bf" />
      </linearGradient>

      <!-- 次连接线渐变 -->
      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#5eead4" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#99f6e0" stop-opacity="0.6" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: [Number, String],
    default: 120
  },
  animated: {
    type: Boolean,
    default: true
  },
  className: {
    type: String,
    default: ''
  }
})
</script>