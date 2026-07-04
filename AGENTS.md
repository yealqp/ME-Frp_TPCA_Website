# AGENTS.md

本文档用于指导 AI（或新加入的联盟成员）在 ME-Frp TPCA 网站中为自己的客户端产品创建文档页并完成相关配置。

---

## 工作流程概述

添加一个新的客户端产品需要完成以下 5 步：

1. 在 `src/data/products.ts` 中添加产品定义
2. 在 `src/composables/useProductVersions.ts` 中添加版本号回退值
3. 在 `src/data/api.ts` 中添加 changelog API 路径
4. 在 `src/pages/docs/` 下创建文档页面 `[id].vue`
5. 在 `nuxt.config.ts` 中添加新路由到预渲染列表

每一步的具体规范如下。

---

## 1. 产品数据 (`src/data/products.ts`)

在 `productBases` 数组中添加你的产品对象，参考以下格式：

```ts
{
  id: "你的产品ID",          // 唯一标识，用于路由和 API 映射，全小写英文
  name: "你的产品名",         // 完整产品名称
  author: "作者名",           // 你的名字或昵称
  description: "一句话产品介绍，约30-60字",
  icon: "图标 URL",           // 正方形图标，建议 128x128 以上
  fallbackIcon?: "备用图标 URL",  // 可选：当主图标 CDN 不可用时的备用 URL
  screenshot: "截图 URL",       // 主截图或产品展示图
  fallbackScreenshot?: "备用截图 URL", // 可选
  link: "/docs/你的产品ID",     // 文档链接（注意：如果不是本站路由需要完整 URL）
  tags: ["标签1", "标签2"],     // 技术标签，2-4个
  features: [
    "特性描述1",
    "特性描述2",
    // ... 3-5 条主要特性
  ],
}
```

**注意事项：**
- `id` 必须全局唯一，全小写英文字母，不能包含空格或特殊字符
- 产品总数 `PRODUCT_COUNT` 会自动从 `productBases.length` 推导，无需手动修改
- 所有图片 URL 优先使用 `https://image.mefrp-tpca.yealqp.cn` CDN 域名，必要时提供 fallback

---

## 2. 版本号回退值 (`src/composables/useProductVersions.ts`)

在 `DEFAULT_VERSIONS` 对象中添加你的产品 ID 和默认版本号。格式：`v主版本.次版本.修订号`。

```ts
const DEFAULT_VERSIONS: VersionData = {
  xl: "v1.5.5",
  lx: "v2.6",
  pml: "v2.1.0",
  zl: "v1.8",
  fm: "v1.0.0",
  fd: "v1.4.5",
  你的产品ID: "v1.0.0",  // 在此添加
};
```

同时在 `VersionData` interface 中添加你的产品 ID 类型：

```ts
export interface VersionData {
  xl: string;
  lx: string;
  pml: string;
  zl: string;
  fm: string;
  fd: string;
  你的产品ID: string;  // 在此添加
}
```

**注意事项：**
- `DEFAULT_VERSIONS` 的 key 名必须与 `products.ts` 中的 `id` 完全一致
- 版本号格式为 `v` 前缀 + semver，如 `v1.0.0`

---

## 3. Changelog API 路径 (`src/data/api.ts`)

在 `CHANGELOG_PATHS` 对象中添加 changelog JSON 文件的 Alist 下载路径：

```ts
export const CHANGELOG_PATHS: Record<string, string> = {
  xl: `${ALIST_BASE}/download/ME-Frp%20XL%20Client/meta/changelog.json`,
  lx: `${ALIST_BASE}/download/LX-ME-Frp-Launch/meta/changelog.json`,
  pml: `${ALIST_BASE}/download/ME-Frp%20PML2/meta/changelog.json`,
  zl: `${ALIST_BASE}/download/ZNext%20Launcher/meta/changelog.json`,
  fm: `${ALIST_BASE}/download/Fan-ME-FRP-Launcher/meta/changelog.json`,
  fd: `${ALIST_BASE}/download/DashFrp/meta/changelog.json`,
  你的产品ID: `${ALIST_BASE}/download/你的路径/meta/changelog.json`,  // 在此添加
};
```

**Changelog JSON 格式要求：**
```json
{
  "data": {
    "1.0.0": {
      "changes": ["新增功能A", "修复问题B"],
      "date": "2025-01-01",
      "note": "可选的补充说明"
    },
    "0.9.0": ["初始版本，基本功能实现"]
  }
}
```

- key 为不带 `v` 前缀的版本号字符串
- value 可以是对象（推荐，支持 changes/date/note 字段）或字符串数组（简单兼容旧格式）

---

## 4. 创建文档页 (`src/pages/docs/[id].vue`)

这是最核心的一步。参考 `src/pages/docs/xl.vue` 或 `src/pages/docs/fm.vue` 创建。

### 4.1 页面结构规范

文档页应包含以下区块（按顺序）。你可以选择最符合你产品的区块组合：

| 区块 | 说明 | 是否必须 |
|------|------|---------|
| 页面标题 + 技术标签 | 产品名、简介、技术栈标签 | 必须 |
| 项目介绍 | 产品定位、主要特性列表、系统要求 | 必须 |
| 预览图 | 交互式轮播图，展示 UI 截图 | 推荐 |
| 功能清单 | 详细的功能点分类说明 | 推荐 |
| 下载安装 | 下载按钮、系统要求、安装步骤 | 必须 |
| 使用指南 | 详细的操作说明、命令行示例等 | 推荐（复杂产品） |
| 更新记录 | Changelog 组件，自动从 API 获取 | 推荐 |
| 相关链接 | GitHub 仓库、下载页面等外链 | 推荐 |

### 4.2 模板代码规范

```vue
<template>
  <div>
    <!-- 页面标题 -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <img src="图标URL" alt="产品名" class="w-12 h-12 rounded-lg"
          onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='备用URL'}else{this.style.display='none'}" />
        <div>
          <h1 class="text-3xl font-bold text-white">产品名称</h1>
          <p class="text-gray-400">一句话简介</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-2">
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-primary-500/20 text-primary-400">标签1</span>
        <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400">标签2</span>
      </div>
    </div>

    <!-- 项目介绍 -->
    <div ref="introRef" class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': introVisible }">
      ...
    </div>

    <!-- ... 其他区块 ... -->

    <!-- 更新记录 -->
    <div ref="updateRef" class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ 'visible': updateVisible }">
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">更新记录</h2>
      </div>
      <ChangelogList :updates="updates" :loading="loading" :error="error" :page-size="5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SITE_URL, SITE_NAME } from "~/data/constants";

// 使用文档布局
definePageMeta({
  layout: 'docs'
})

// 滚动动画 - 每个区块都需要
const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation()
const { elementRef: updateRef, isVisible: updateVisible } = useScrollAnimation()

// 更新日志
const { updates, loading, error, fetchChangelog } = useProductChangelog('你的产品ID')

onMounted(() => {
  fetchChangelog()
})

// 页面元数据
useHead({
  title: '产品名 文档',
  link: [
    { rel: 'canonical', href: `${SITE_URL}/docs/你的产品ID` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: '产品名',
        applicationCategory: 'NetworkApplication',
        operatingSystem: '支持的系统',
        description: '产品描述',
        author: { '@type': 'Person', name: '作者名' }
      })
    }
  ]
})

useSeoMeta({
  title: `产品名 文档 | ${SITE_NAME}`,
  ogTitle: `产品名 文档 - ${SITE_NAME}`,
  description: 'SEO 描述',
  ogDescription: 'OG 描述',
  ogUrl: `${SITE_URL}/docs/你的产品ID`,
  ogType: 'article',
  twitterCard: 'summary_large_image'
})
</script>
```

### 4.3 关键样式类

每个区块必须使用以下样式结构：
- 外层容器：`glass-card rounded-xl overflow-hidden scroll-animate hover-lift` + `:class="{ 'visible': visibleRef }"`
- 标题区域：`p-6 border-b border-white/10`
- 内容区域：`p-6`
- 区块内子卡片：`glass-card rounded-lg p-4 hover-lift overflow-hidden`

### 4.4 预览图轮播图实现

参考 `xl.vue` 或 `fm.vue`，使用以下模式：
- 图片数组定义在 script 中
- `currentImageIndex` 响应式状态控制当前显示
- 左右导航按钮 + 底部指示器圆点
- 点击图片可放大（使用 `window.open` 或 Teleport 模态框）
- 对于有备用 CDN 的产品（如 fm.vue），实现图片加载失败回退逻辑

### 4.5 下载安装区块

必须包含：
- 下载按钮（指向你的下载链接）
- 系统要求提示框（使用 `bg-yellow-500/10` 或 `bg-blue-500/10` 背景）
- 安装步骤（使用编号列表）

---

## 5. 更新路由配置 (`nuxt.config.ts`)

在 `nitro.prerender.routes` 数组中添加你的文档路径：

```ts
prerender: {
  routes: [
    '/',
    '/about',
    '/brand',
    '/products',
    '/docs',
    '/docs/xl',
    '/docs/lx',
    '/docs/pml',
    '/docs/zl',
    '/docs/fm',
    '/docs/fd',
    '/docs/你的产品ID',  // 在此添加
    '/docs/alliance/whitebook',
    '/docs/alliance/members',
  ],
  crawlLinks: true
},
```

---

## 6. 自动生效的内容

完成以上步骤后，以下内容会自动更新无需额外操作：
- **首页产品网格**：`MainContent.vue` 会通过 `getProductSummaries(versions)` 自动显示新产品
- **产品页**：`products.vue` 会通过 `getProducts(versions)` 自动显示新产品
- **文档侧边栏**：`docs.vue` 布局会通过 `getDocSidebarClients(versions)` 自动添加导航项
- **文档首页**：`docs/index.vue` 会通过 `getDocClients(versions)` 自动显示新产品卡片
- **产品/成员/赞助统计数字**：`PRODUCT_COUNT` 自动推导

---

## 代码规范

- 使用 TypeScript 类型定义（`interface`），避免 `any`
- Composables、data 层 utils 层使用 `.ts`，页面/组件使用 `.vue`
- 图片错误处理使用 `onerror` 内联属性，提供 fallback URL
- 标签颜色规范：主色标签用 `bg-primary-500/20 text-primary-400`，其他标签用不同颜色区分（blue/yellow/green/cyan/orange/purple）
- 所有用户可见文本使用中文
- 不要硬编码版本号，通过 `useProductVersions` composable 获取
