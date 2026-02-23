<template>
  <div class="w-full overflow-x-hidden">
    <!-- 页面标题 -->
    <div class="mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <img
          src="https://image.mefrp-tpca.yealqp.cn/images/views/icon/pml_icon.webp"
          alt="PML 2"
          class="w-12 h-12 rounded-lg"
        />
        <div>
          <h1 class="text-3xl font-bold text-white">PML 2</h1>
          <p class="text-gray-400">基于 .NET 的跨平台客户端</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <span
          class="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400"
          >.NET 10.0</span
        >
        <span
          class="px-2 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-400"
          >Avalonia UI</span
        >
        <span
          class="px-2 py-1 text-xs font-medium rounded-full bg-indigo-500/20 text-indigo-400"
          >Fluent Design</span
        >
        <span
          class="px-2 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400"
          >跨平台</span
        >
      </div>
    </div>

    <!-- 项目介绍 -->
    <div
      ref="introRef"
      class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ visible: introVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">项目介绍</h2>
      </div>

      <div class="p-6 space-y-4 text-gray-300">
        <p>
          PML 2 是由
          <strong class="text-primary-400">RYCB Studio</strong> 使用 .NET 10.0
          开发的 ME-Frp 第三方客户端。 该客户端是对 ME Frp (幻缘映射)
          的图形化实现，提供了简单便捷的操作，可以快速启动隧道，支持 Windows,
          Linux 和 MacOS 三端。
          <em class="text-primary-300"
            >也是目前三个产品中唯一一个支持跨平台的软件。</em
          >
        </p>

        <div class="space-y-4">
          <div>
            <h3
              class="text-lg font-semibold text-white mb-3 flex items-center gap-2"
            >
              <UIcon name="i-lucide-sparkles" class="size-5 text-primary-400" />
              主要特性
            </h3>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <UIcon
                  name="i-lucide-check-circle"
                  class="size-4 text-primary-400 mt-0.5 flex-shrink-0"
                />
                <span
                  >作者：<strong class="text-primary-400"
                    >RYCB Studio</strong
                  ></span
                >
              </li>
              <li class="flex items-start space-x-2">
                <UIcon
                  name="i-lucide-check-circle"
                  class="size-4 text-primary-400 mt-0.5 flex-shrink-0"
                />
                <span
                  >命名灵感：<strong class="text-blue-400">PCL Ⅱ</strong></span
                >
              </li>
              <li class="flex items-start space-x-2">
                <UIcon
                  name="i-lucide-check-circle"
                  class="size-4 text-primary-400 mt-0.5 flex-shrink-0"
                />
                <span>基于 .NET 10.0 框架，跨平台支持</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon
                  name="i-lucide-check-circle"
                  class="size-4 text-primary-400 mt-0.5 flex-shrink-0"
                />
                <span>支持 Windows、Linux、MacOS 三端</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon
                  name="i-lucide-check-circle"
                  class="size-4 text-primary-400 mt-0.5 flex-shrink-0"
                />
                <span>操作简单便捷，功能丰富</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon
                  name="i-lucide-check-circle"
                  class="size-4 text-primary-400 mt-0.5 flex-shrink-0"
                />
                <span>持续更新，社区活跃</span>
              </li>
            </ul>
          </div>

          <div>
            <h3
              class="text-lg font-semibold text-white mb-3 flex items-center gap-2"
            >
              <UIcon name="i-lucide-monitor" class="size-5 text-primary-400" />
              系统要求
            </h3>
            <ul class="space-y-2">
              <li class="flex items-start space-x-2">
                <UIcon
                  name="i-lucide-monitor"
                  class="size-4 text-primary-400 mt-0.5 flex-shrink-0"
                />
                <span>Windows 10/11/Server 2019+</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon
                  name="i-lucide-monitor"
                  class="size-4 text-primary-400 mt-0.5 flex-shrink-0"
                />
                <span>常见 Linux x64 发行版</span>
              </li>
              <li class="flex items-start space-x-2">
                <UIcon
                  name="i-lucide-monitor"
                  class="size-4 text-primary-400 mt-0.5 flex-shrink-0"
                />
                <span>macOS（Intel/Apple Silicon）</span>
              </li>
            </ul>
          </div>

          <div class="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <div class="flex items-start space-x-3">
              <UIcon
                name="i-lucide-info"
                class="size-5 text-blue-400 mt-0.5 flex-shrink-0"
              />
              <div>
                <h4 class="font-semibold text-blue-400">
                  查看官网以获得最新消息
                </h4>
                <UButton
                  size="sm"
                  color="info"
                  variant="soft"
                  to="https://rycb.mxj.pub/mefl/"
                  target="_blank"
                  class="cursor-pointer"
                >
                  <UIcon name="i-lucide-external-link" class="size-4 mr-1" />
                  访问官网
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 预览图 -->
    <div
      ref="previewRef"
      class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ visible: previewVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">预览图</h2>
      </div>

      <div class="p-6 relative rounded-lg overflow-hidden bg-gray-900/50">
        <!-- 图片容器 -->
        <div class="relative h-96 flex items-center justify-center">
          <img
            :src="previewImages[currentImageIndex].src"
            :alt="previewImages[currentImageIndex].alt + ' - PML 2 界面截图'"
            class="max-w-full max-h-full object-contain cursor-pointer"
            loading="lazy"
            @click="openImageModal(previewImages[currentImageIndex])"
          />

          <!-- 标题遮罩 -->
          <div
            class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
          >
            <p class="text-white text-center font-medium">
              {{ previewImages[currentImageIndex].alt }}
            </p>
          </div>
        </div>

        <!-- 导航箭头 -->
        <button
          @click="previousImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          :disabled="previewImages.length <= 1"
        >
          <UIcon name="i-lucide-chevron-left" class="size-5" />
        </button>

        <button
          @click="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          :disabled="previewImages.length <= 1"
        >
          <UIcon name="i-lucide-chevron-right" class="size-5" />
        </button>

        <!-- 指示器 -->
        <div
          class="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2"
        >
          <button
            v-for="(image, index) in previewImages"
            :key="index"
            @click="currentImageIndex = index"
            class="w-2 h-2 rounded-full transition-colors"
            :class="index === currentImageIndex ? 'bg-white' : 'bg-white/50'"
          />
        </div>
      </div>
    </div>

    <!-- 使用方法 -->
    <div
      ref="usageRef"
      class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ visible: usageVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">使用方法</h2>
      </div>

      <div class="p-6 space-y-6">
        <div class="space-y-4">
          <div class="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <div class="flex items-start space-x-3">
              <UIcon
                name="i-lucide-info"
                class="size-5 text-blue-400 mt-0.5 flex-shrink-0"
              />
              <div>
                <h4 class="font-semibold text-blue-400">
                  教程：如何在 Linux 上顺利运行本软件？
                </h4>
                <ol class="space-y-2 text-gray-300 text-sm">
                  <li class="flex items-start space-x-2">
                    <span
                      class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                      >1</span
                    >
                    <span>下载 macOS 应用包 (.dmg)</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span
                      class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                      >2</span
                    >
                    <span>拖拽到应用程序文件夹</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span
                      class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                      >3</span
                    >
                    <span>在启动台中打开终端</span>
                  </li>
                  <li class="flex items-start space-x-2">
                    <span
                      class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                      >4</span
                    >
                    <span
                      >执行命令移除门禁标签：<code
                        class="bg-gray-700 px-1 py-0.5 rounded text-xs break-all"
                        >xattr -d com.apple.quarantine
                        /Applications/PML2.app</code
                      ></span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <span
                      class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                      >5</span
                    >
                    <span>启动应用程序</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 下载安装 -->
    <div
      ref="downloadRef"
      class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ visible: downloadVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">下载安装</h2>
      </div>
      <div class="p-6 space-y-6">
        <div class="text-center">
          <UButton
            size="lg"
            color="primary"
            to="https://alist.yealqp.cn/ME-Frp%20PML2/mefrp"
            target="_blank"
            class="btn-glow cursor-pointer"
          >
            <UIcon name="i-lucide-download" class="size-5 mr-2" />
            OpenList 下载
          </UButton>
        </div>

        <div class="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
          <div class="flex items-start space-x-3">
            <UIcon
              name="i-lucide-alert-circle"
              class="size-5 text-red-400 mt-0.5 flex-shrink-0"
            />
            <div>
              <h4 class="font-semibold text-red-400">重要提醒</h4>
              <p class="text-gray-300 text-sm mt-1">
                安装或使用本软件表明您同意本软件的用户协议和隐私政策。Windows下安装时请不要将软件安装至C:\Program
                Files等需要管理员权限的目录。请使用 ME Frp 官网账号登录。若在
                Linux 下使用 root 账户运行，软件可能将无法正常运行。
              </p>
            </div>
          </div>
        </div>

        <div
          class="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20"
        >
          <div class="flex items-start space-x-3">
            <UIcon
              name="i-lucide-alert-triangle"
              class="size-5 text-yellow-400 mt-0.5 flex-shrink-0"
            />
            <div>
              <h4 class="font-semibold text-yellow-400">需要帮助？</h4>
              <p class="text-gray-300 text-sm mt-1">
                遇到问题，请先查看下方的快速修复。需要更多功能或报告 Bug,
                请发送邮件至 rycbstudio@163.com
              </p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Windows 安装 -->
          <div
            class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth"
          >
            <h3 class="text-lg font-semibold text-white mb-3 flex items-center">
              <UIcon
                name="i-lucide-monitor"
                class="size-5 mr-2 text-blue-400"
              />
              Windows 安装
            </h3>
            <ol class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start space-x-2">
                <span
                  class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <span>下载 Windows 安装包 (.msi 或 .exe)</span>
              </li>
              <li class="flex items-start space-x-2">
                <span
                  class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span>运行安装程序，按提示完成安装</span>
              </li>
              <li class="flex items-start space-x-2">
                <span
                  class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span>启动程序，开始配置</span>
              </li>
            </ol>
          </div>

          <!-- Linux 安装 -->
          <div
            class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth"
          >
            <h3 class="text-lg font-semibold text-white mb-3 flex items-center">
              <UIcon
                name="i-lucide-terminal"
                class="size-5 mr-2 text-yellow-400"
              />
              Linux 安装
            </h3>
            <ol class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start space-x-2">
                <span
                  class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <span>下载 Linux 包 (.deb/.rpm/.tar.gz)</span>
              </li>
              <li class="flex items-start space-x-2">
                <span
                  class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span>安装 .NET Runtime (如未安装)</span>
              </li>
              <li class="flex items-start space-x-2">
                <span
                  class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span>解压并运行程序</span>
              </li>
            </ol>
          </div>

          <!-- macOS 安装 -->
          <div
            class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth"
          >
            <h3 class="text-lg font-semibold text-white mb-3 flex items-center">
              <UIcon name="i-lucide-laptop" class="size-5 mr-2 text-gray-300" />
              macOS 安装
            </h3>
            <ol class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start space-x-2">
                <span
                  class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <span>下载 macOS 应用包 (.dmg)</span>
              </li>
              <li class="flex items-start space-x-2">
                <span
                  class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span>拖拽到应用程序文件夹</span>
              </li>
              <li class="flex items-start space-x-2">
                <span
                  class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span>首次运行需要允许未知开发者</span>
              </li>
            </ol>
          </div>

          <!-- Android 安装 -->
          <div
            class="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-smooth"
          >
            <h3 class="text-lg font-semibold text-white mb-3 flex items-center">
              <UIcon
                name="i-lucide-smartphone"
                class="size-5 mr-2 text-green-400"
              />
              Android 安装
            </h3>
            <ol class="space-y-2 text-gray-300 text-sm">
              <li class="flex items-start space-x-2">
                <span
                  class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >1</span
                >
                <span>下载 Android APK 文件</span>
              </li>
              <li class="flex items-start space-x-2">
                <span
                  class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >2</span
                >
                <span>允许安装未知来源应用</span>
              </li>
              <li class="flex items-start space-x-2">
                <span
                  class="flex-shrink-0 w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold"
                  >3</span
                >
                <span>安装并启动应用</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- 快速修复 -->
    <div
      ref="fixRef"
      class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ visible: fixVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">快速修复</h2>
      </div>

      <div class="p-6 space-y-8">
        <!-- Windows 问题 -->
        <div class="border-l-2 border-red-500/30 pl-4">
          <h3 class="text-lg font-semibold text-white mb-3">
            Windows - 软件无法启动
          </h3>
          <div class="space-y-3 text-gray-300 text-sm">
            <p>
              <strong class="text-red-400">问题重现：</strong>点击软件，窗口闪退
              / 无响应 / 白色边框。
            </p>
            <p>
              <strong class="text-yellow-400">原因：</strong
              >特定目录下需要管理员权限。
            </p>
            <p><strong class="text-green-400">解决方法：</strong></p>
            <ol class="space-y-2 ml-4">
              <li>
                1. 打开安装目录（如
                <code class="bg-gray-700 px-1 py-0.5 rounded break-all"
                  >C:\Program Files\...</code
                >）
              </li>
              <li>
                2. 右键
                <code class="bg-gray-700 px-1 py-0.5 rounded break-all"
                  >MEFrpLauncherX.exe</code
                >
                → 属性
              </li>
              <li>3. 切换到"兼容性" → 点击"更改所有用户的设置"</li>
              <li>4. 勾选"以管理员身份运行此程序" → 确定</li>
              <li>5. 重新启动软件</li>
            </ol>
          </div>
        </div>

        <!-- Linux 问题 -->
        <div class="border-l-2 border-blue-500/30 pl-4">
          <h3 class="text-lg font-semibold text-white mb-3">
            Linux - 软件无法启动
          </h3>
          <div class="space-y-3 text-gray-300 text-sm">
            <p>
              <strong class="text-red-400">问题重现：</strong>无窗口，控制台报错
              "UnauthorizedException"。
            </p>
            <p><strong class="text-yellow-400">原因：</strong>权限不足。</p>
            <p><strong class="text-green-400">解决方法：</strong></p>
            <ol class="space-y-2 ml-4">
              <li>
                1. (2.1.0.0 以下)打开终端，执行：<code
                  class="bg-gray-700 px-1 py-0.5 rounded text-xs break-all"
                  >chmod -R a+r,a+w /usr/share/mefrplauncherx/*</code
                >
              </li>
              <li>
                2. (2.1.0.0 及以上)打开终端，执行：<code
                  class="bg-gray-700 px-1 py-0.5 rounded text-xs break-all"
                  >chmod -R a+r,a+w /opt/pml-2</code
                >
              </li>
              <li>
                3. 重新运行：(2.1.0.0 以下)
                <code class="bg-gray-700 px-1 py-0.5 rounded text-xs"
                  >mefrplauncherx</code
                >
                或(2.1.0.0 及以上)
                <code class="bg-gray-700 px-1 py-0.5 rounded text-xs"
                  >pml-2</code
                >
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- 更新记录 -->
    <div
      ref="updateRef"
      class="mb-8 glass-card rounded-xl overflow-hidden scroll-animate hover-lift"
      :class="{ visible: updateVisible }"
    >
      <div class="p-6 border-b border-white/10">
        <h2 class="text-xl font-semibold text-white">更新记录</h2>
      </div>

      <!-- 使用优化的 ChangelogList 组件 -->
      <ChangelogList
        :updates="updates"
        :loading="loading"
        :error="error"
        :page-size="5"
      />
    </div>
  </div>
</template>

<script setup>
// 使用文档布局
definePageMeta({
  layout: "docs",
});

// 滚动动画
const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation();
const { elementRef: previewRef, isVisible: previewVisible } =
  useScrollAnimation();
const { elementRef: usageRef, isVisible: usageVisible } = useScrollAnimation();
const { elementRef: downloadRef, isVisible: downloadVisible } =
  useScrollAnimation();
const { elementRef: fixRef, isVisible: fixVisible } = useScrollAnimation();
const { elementRef: updateRef, isVisible: updateVisible } =
  useScrollAnimation();

// 防止未使用警告
void introRef;
void previewRef;
void usageRef;
void downloadRef;
void fixRef;
void updateRef;

// 使用版本管理 composable
const { getVersion, fetchAllVersions } = useProductVersions();

// 获取当前产品版本
const currentVersion = computed(() => getVersion("pml"));

// 页面元数据
useHead({
  title: "PML 2 文档",
  link: [{ rel: "canonical", href: "https://mefrp-tpca.yealqp.cn/docs/pml" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: () =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "PML 2",
          applicationCategory: "NetworkApplication",
          operatingSystem: "Windows, Linux, macOS, Android",
          softwareVersion: currentVersion.value,
          description:
            "基于 .NET 10.0 开发的跨平台 ME-Frp 第三方客户端，支持 Windows、Linux、macOS 和 Android",
          author: { "@type": "Organization", name: "RYCB Studio" },
          offers: { "@type": "Offer", price: "0", priceCurrency: "CNY" },
        }),
    },
  ],
});

// SEO 优化
useSeoMeta({
  title: "PML 2 文档 | ME-Frp 第三方客户端联盟",
  ogTitle: "PML 2 文档 - ME-Frp 第三方客户端联盟",
  description:
    "PML 2 详细使用文档，基于 .NET 10.0 开发的跨平台 ME-Frp 第三方客户端，支持 Windows、Linux、macOS 和 Android，包含多平台安装、配置和使用指南。",
  ogDescription: "PML 2 详细使用文档，包含多平台安装、配置和使用指南",
  ogImage: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/homex.png",
  ogUrl: "https://mefrp-tpca.yealqp.cn/docs/pml",
  ogType: "article",
  twitterCard: "summary_large_image",
});

// 预览图数据
const previewImages = [
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/home2.png",
    alt: "主页面",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/create2-1.png",
    alt: "创建隧道-选择节点",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/create2-2.png",
    alt: "创建隧道-填写信息",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/create2-2x.png",
    alt: "创建隧道-填写额外信息",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/manage2.png",
    alt: "隧道管理 - 隧道列表",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/manage2-1.png",
    alt: "隧道管理 - 查看隧道信息",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/manage2-2.png",
    alt: "隧道管理 - 帮助",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/manage2-3.png",
    alt: "隧道管理 - 编辑隧道",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/monitor2.png",
    alt: "节点监控",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/user2-1.png",
    alt: "用户中心 - 总览",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/user2-2.png",
    alt: "用户中心 - 账户信息",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/user2-3.png",
    alt: "用户中心 - 流量信息",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/user2-4.png",
    alt: "用户中心 - 流量历史",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/settings2.png",
    alt: "设置页面",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/update2.png",
    alt: "更新页面",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/about2.png",
    alt: "关于页面",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/terminal2.png",
    alt: "终端界面",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/home2light.png",
    alt: "主页面 (浅色模式 + 云母效果)",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/create2light.png",
    alt: "创建隧道-选择节点 (浅色模式 + 云母效果)",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/manage2light.png",
    alt: "隧道管理 - 隧道列表 (浅色模式 + 亚克力效果)",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/monitor2light.png",
    alt: "节点监控 (浅色模式 + 亚克力效果)",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/user2light-1.png",
    alt: "用户中心 - 总览 (浅色模式 + 亚克力效果)",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/user2light-2.png",
    alt: "用户中心 - 流量信息 (浅色模式 + 亚克力效果)",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/settings2light.png",
    alt: "设置页面 (浅色模式 + 亚克力效果)",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/about2light.png",
    alt: "关于页面 (浅色模式 + 亚克力效果)",
  },
  {
    src: "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/terminal2light.png",
    alt: "终端界面 (浅色模式 + 亚克力效果)",
  },
];

// 更新日志状态
const loading = ref(false);
const error = ref(null);
const updates = ref([]);

// 从 API 获取更新日志
const fetchChangelog = async () => {
  try {
    const response = await fetch("https://api.rycb.mxj.pub/api/changelog");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("获取更新日志失败:", err);
    throw err;
  }
};

// 版本号比较
const compareVersions = (version1, version2) => {
  const v1Parts = version1
    .replace(/[^\d.]/g, "")
    .split(".")
    .map((num) => parseInt(num) || 0);
  const v2Parts = version2
    .replace(/[^\d.]/g, "")
    .split(".")
    .map((num) => parseInt(num) || 0);

  const maxLength = Math.max(v1Parts.length, v2Parts.length);
  while (v1Parts.length < maxLength) v1Parts.push(0);
  while (v2Parts.length < maxLength) v2Parts.push(0);

  for (let i = 0; i < maxLength; i++) {
    if (v1Parts[i] > v2Parts[i]) return 1;
    if (v1Parts[i] < v2Parts[i]) return -1;
  }
  return 0;
};

// 转换 API 数据
const transformApiData = (apiData) => {
  if (!apiData.success || !apiData.data) {
    throw new Error("API 数据格式错误");
  }

  const transformedData = [];
  const versions = Object.keys(apiData.data).sort((a, b) =>
    compareVersions(b, a),
  );

  versions.forEach((version, index) => {
    const versionData = apiData.data[version];
    transformedData.push({
      version: `v${version}`,
      notes: versionData.changes || [],
      date: versionData.date || "",
      description: versionData.description || "",
      codename: versionData.codename || "",
      isLatest: index === 0,
    });
  });

  return transformedData;
};

// 初始化更新日志
const initializeUpdates = async () => {
  loading.value = true;
  error.value = null;

  try {
    const apiData = await fetchChangelog();
    updates.value = transformApiData(apiData);
  } catch (err) {
    error.value = "获取更新日志失败";
    updates.value = [];
  } finally {
    loading.value = false;
  }
};

// 轮播图状态
const currentImageIndex = ref(0);

// 轮播图导航
const nextImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % previewImages.length;
};

const previousImage = () => {
  currentImageIndex.value =
    currentImageIndex.value === 0
      ? previewImages.length - 1
      : currentImageIndex.value - 1;
};

// 打开图片模态框
const openImageModal = (image) => {
  window.open(image.src, "_blank");
};

// 组件挂载时初始化
onMounted(() => {
  fetchAllVersions();
  initializeUpdates();
});
</script>
