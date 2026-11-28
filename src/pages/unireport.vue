<template>
  <!-- UApp 提供 Toaster 挂载点（useToast 依赖），项目无 app.vue 故在此局部包裹 -->
  <UApp>
  <div class="pt-16">
    <!-- Hero -->
    <section class="py-8 lg:py-12 relative overflow-hidden"
      style="background: linear-gradient(135deg, #0F172A 0%, #111827 50%, #0A0E27 100%);">
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000">
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="animate-fade-in-up">
          <div
            class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm mb-6">
            <UIcon name="i-lucide-message-square-warning" class="size-4" />
            <span>聚合反馈平台</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6"
            style="text-shadow: 0 0 30px rgba(20, 184, 166, 0.3);">
            TPCA UniReport
          </h1>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            遇到了 Bug？有好的建议？选择你正在使用的客户端，把问题告诉我们
          </p>
        </div>
      </div>
    </section>

    <!-- 表单 -->
    <section class="py-8 lg:py-12 relative" style="background: linear-gradient(180deg, #111827 0%, #0F172A 100%);">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref="formRef" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
          :class="{ 'visible': formVisible }" style="cursor: default;">
          <div class="p-6 border-b border-white/10">
            <div class="flex items-center space-x-3">
              <UIcon name="i-lucide-send" class="size-6 text-teal-400" />
              <h2 class="text-2xl font-bold text-white">提交反馈</h2>
            </div>
          </div>

          <form class="p-6 space-y-6" @submit.prevent="onSubmit">
            <!-- 客户端选择 -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                选择客户端 <span class="text-red-400">*</span>
              </label>
              <USelect v-model="form.client" :items="clientItems" value-key="value" placeholder="请选择客户端"
                :avatar="selectedClientAvatar" :loading="clientsLoading" class="w-full">
                <template #leading="{ item, ui }">
                  <UAvatar v-if="item" :src="item.avatar?.src" :alt="item.label" :size="(ui.leadingAvatarSize() as AvatarProps['size'])"
                    :class="ui.leadingAvatar()" />
                </template>
              </USelect>
            </div>

            <!-- 反馈类型 -->
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">
                反馈类型 <span class="text-red-400">*</span>
              </label>
              <div class="grid grid-cols-3 gap-3">
                <button v-for="t in feedbackTypes" :key="t.value" type="button"
                  class="flex flex-col items-center gap-1 rounded-lg border px-3 py-3 text-sm transition-colors cursor-pointer"
                  :class="form.type === t.value
                    ? 'border-teal-500 bg-teal-500/10 text-teal-300'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/30 hover:text-gray-200'"
                  @click="form.type = t.value">
                  <UIcon :name="t.icon" class="size-5" />
                  <span>{{ t.label }}</span>
                </button>
              </div>
            </div>

            <!-- 邮箱 -->
            <div>
              <label for="unireport-email" class="block text-sm font-medium text-gray-300 mb-2">
                联系邮箱 <span class="text-red-400">*</span>
              </label>
              <UInput id="unireport-email" v-model="form.email" type="email" placeholder="用于接收处理进展"
                required class="w-full" />
            </div>

            <!-- 内容 -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <label for="unireport-content" class="block text-sm font-medium text-gray-300">
                  反馈内容 <span class="text-red-400">*</span>
                </label>
                <span class="text-xs" :class="contentLength > MAX_CONTENT ? 'text-red-400' : 'text-gray-500'">
                  {{ contentLength }} / {{ MAX_CONTENT }}
                </span>
              </div>
              <UTextarea id="unireport-content" v-model="form.content" :rows="6" :maxlength="MAX_CONTENT + 100"
                placeholder="请描述你遇到的问题或建议，包括复现步骤、系统环境等信息会更容易被处理" required
                class="w-full" />
            </div>

            <!-- 提示 + 提交 -->
            <div class="rounded-lg bg-blue-500/10 border border-blue-500/20 p-4 text-sm text-blue-200 flex space-x-2">
              <UIcon name="i-lucide-info" class="size-4 flex-shrink-0 mt-0.5" />
              <p>
                提交后反馈将直接发送至联盟维护者邮箱。请勿在内容中填写密码、Token 等敏感信息。
              </p>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p class="text-xs text-gray-500">
                提交即表示同意我们通过邮箱与你联系处理进展
              </p>
              <UButton type="submit" size="lg" color="primary" :loading="submitting" :disabled="!canSubmit"
                class="btn-glow cursor-pointer">
                <UIcon name="i-lucide-send" class="size-5 mr-2" />
                提交反馈
              </UButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
  </UApp>
</template>

<script setup lang="ts">
import { SITE_NAME, SITE_URL } from "~/data/constants";
import { submitFeedback, type FeedbackType } from "~/data/api";
import { getProducts } from "~/data/products";
import type { AvatarProps } from "@nuxt/ui";

const toast = useToast();

// ---------- 客户端列表 ----------
interface ClientItem {
  label: string;
  value: string;
  avatar?: { src: string; alt: string };
}

const { versions, loading: versionsLoading, fetchAllVersions } = useProductVersions();
const clientsLoading = computed(() => versionsLoading.value);

// ---------- 表单 ----------
const MAX_CONTENT = 1000;

const feedbackTypes: { value: FeedbackType; label: string; icon: string }[] = [
  { value: "bug", label: "Bug", icon: "i-lucide-bug" },
  { value: "feature", label: "建议", icon: "i-lucide-lightbulb" },
  { value: "other", label: "其他", icon: "i-lucide-message-circle" },
];

const form = reactive({
  client: "" as string,
  type: "bug" as FeedbackType,
  email: "",
  content: "",
});

// ---------- 客户端列表 ----------
interface ClientItem {
  label: string;
  value: string;
  avatar?: { src: string; alt: string };
}

const clientItems = computed<ClientItem[]>(() =>
  getProducts(versions.value).map((p) => ({
    label: p.name,
    value: p.id,
    avatar: { src: p.icon, alt: p.name },
  })),
);

const selectedClientAvatar = computed(() =>
  clientItems.value.find((i) => i.value === form.client)?.avatar,
);

const submitting = ref(false);

const contentLength = computed(() => form.content.trim().length);

const canSubmit = computed(
  () =>
    form.client !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
    contentLength.value >= 5 &&
    contentLength.value <= MAX_CONTENT,
);

// ---------- 提交 ----------
async function onSubmit() {
  if (!canSubmit.value || submitting.value) return;
  submitting.value = true;
  try {
    const result = await submitFeedback({
      client: form.client,
      type: form.type,
      email: form.email.trim(),
      content: form.content.trim(),
      page: `${SITE_URL}/unireport`,
    });
    if (result.success) {
      toast.add({ title: "提交成功", description: "感谢反馈，我们会尽快处理", color: "success" });
      form.content = "";
    } else {
      toast.add({ title: "提交失败", description: result.message, color: "error" });
    }
  } finally {
    submitting.value = false;
  }
}

// ---------- 滚动动画 ----------
const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation()

onMounted(() => {
  fetchAllVersions()
})

// ---------- SEO ----------
useHead({
  title: '聚合反馈',
  link: [{ rel: 'canonical', href: `${SITE_URL}/unireport` }],
})

useSeoMeta({
  title: `聚合反馈 | ${SITE_NAME}`,
  ogTitle: `UniReport 聚合反馈 - ${SITE_NAME}`,
  description: 'ME-Frp 第三方客户端联盟聚合反馈平台，选择客户端提交 Bug 或建议。',
  ogDescription: '选择客户端提交 Bug 或建议',
  ogUrl: `${SITE_URL}/unireport`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>