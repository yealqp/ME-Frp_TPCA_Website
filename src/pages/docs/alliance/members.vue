<template>
    <div>
        <!-- 页面头部 -->
        <div class="mb-8 text-center">
            <div
                class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm mb-4">
                <UIcon name="i-lucide-scale" class="size-4" />
                <span>规范</span>
            </div>
            <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
                ME Frp TPCA 成员行为规范
            </h1>
            <p class="text-gray-400 max-w-3xl mx-auto">
                维护联盟的技术质量、社区声誉与协作精神
            </p>
        </div>

        <!-- 正文内容 -->
        <div class="space-y-6">

            <!-- 一、总则 -->
            <div ref="section1Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                :class="{ 'visible': section1Visible }">
                <div class="p-6 border-b border-white/10">
                    <div class="flex items-center space-x-3">
                        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                            <span class="text-teal-400 font-bold text-sm">一</span>
                        </div>
                        <h2 class="text-2xl font-bold text-white">总则</h2>
                    </div>
                </div>
                <div class="p-6 text-gray-300 leading-relaxed space-y-4">
                    <p>
                        本规范旨在维护 ME Frp TPCA 联盟的技术质量、社区声誉与协作精神。所有联盟成员（含已加入及申请加入者）应共同遵守，确保联盟的客户端产品具备真实的技术价值与用户体验。
                    </p>
                    <p>
                        联盟尊重开发者使用各类工具的自由，但坚决反对<strong class="text-white">完全依赖生成式人工智能（AI）</strong>产出的"成品级"项目。联盟的核心价值在于<strong class="text-teal-400">人的创造力、问题解决能力与技术热情</strong>，AI 仅应作为辅助工具。
                    </p>
                </div>
            </div>

            <!-- 二、对生成式 AI 的使用原则 -->
            <div ref="section2Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                :class="{ 'visible': section2Visible }">
                <div class="p-6 border-b border-white/10">
                    <div class="flex items-center space-x-3">
                        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                            <span class="text-teal-400 font-bold text-sm">二</span>
                        </div>
                        <h2 class="text-2xl font-bold text-white">对生成式 AI 的使用原则</h2>
                    </div>
                </div>
                <div class="p-6 text-gray-300 leading-relaxed space-y-4">
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-2">允许广泛使用</h3>
                        <p>联盟认可生成式 AI 作为开发辅助工具的价值。成员可以使用 AI 进行代码生成、文档撰写、错误分析、思路启发等环节，包括直接使用 AI 生成的部分或全部代码。</p>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-2">核心底线：可读可懂</h3>
                        <p>使用 AI 生成代码的前提是：<strong class="text-white">开发者本人必须能够读懂 AI 生成的代码，并理解其功能逻辑</strong>。换言之：</p>
                        <ul class="mt-2 space-y-1 list-disc list-inside">
                            <li>AI 可以写代码，但你得知道它写了什么、为什么这么写</li>
                            <li>AI 可以写文档，但你得确认内容真实、技术细节准确</li>
                            <li>AI 可以实现功能，但你得能维护它、调试它、向他人解释它</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-2">不欢迎的行为</h3>
                        <p>以下情况联盟不予收录或有权劝退：</p>
                        <ul class="mt-2 space-y-1 list-disc list-inside">
                            <li>开发者本人无法读懂或解释 AI 所生成的代码</li>
                            <li>项目功能逻辑开发者本人无法独立维护或调试</li>
                            <li>项目文档、使用说明完全由 AI 杜撰，缺乏真实的技术细节</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-2">倡导透明</h3>
                        <p>鼓励成员在项目文档中注明 AI 的使用范围（如"部分 UI 布局由 AI 辅助生成"），但必须明确标注自己的核心贡献。</p>
                    </div>

                    <div class="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                        <p class="text-red-400 font-medium">
                            <UIcon name="i-lucide-alert-triangle" class="size-4 inline mr-1" />
                            违反以上原则的，联盟有权拒绝收录该客户端，或劝退相关成员。
                        </p>
                    </div>
                </div>
            </div>

            <!-- 三、成员基本能力要求 -->
            <div ref="section3Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                :class="{ 'visible': section3Visible }">
                <div class="p-6 border-b border-white/10">
                    <div class="flex items-center space-x-3">
                        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                            <span class="text-teal-400 font-bold text-sm">三</span>
                        </div>
                        <h2 class="text-2xl font-bold text-white">成员基本能力要求</h2>
                    </div>
                </div>
                <div class="p-6 text-gray-300 leading-relaxed space-y-6">
                    <p>联盟成员应具备以下基本技术素养，以确保能够独立维护项目并参与社区协作：</p>

                    <!-- 3.1 -->
                    <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                        <h3 class="text-lg font-semibold text-teal-400 mb-3">3.1 基本编码能力</h3>
                        <p class="mb-3">联盟本质上是一个<strong class="text-white">开发者社区</strong>，因此<strong class="text-white">编码能力是成员的基本门槛</strong>。具体包括：</p>
                        <ul class="space-y-3">
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span><strong class="text-white">掌握至少一门主流编程语言</strong>：能够熟练使用该语言进行项目开发，理解其语法特性、标准库及常见生态工具，而非仅仅能"看懂"或"复制粘贴"。</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span><strong class="text-white">具备独立开发完整功能模块的能力</strong>：能够将一个用户需求拆解为代码实现，独立完成从接口设计到功能落地的全过程，而非始终依赖外部帮助完成核心逻辑。</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span><strong class="text-white">具备代码阅读与理解能力</strong>：能够读懂他人（包括 AI 生成）的代码，准确判断其意图、逻辑与潜在缺陷，并在此基础上进行修改、优化或重构。</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span><strong class="text-white">具备基本工程意识</strong>：了解代码组织与模块划分的基本原则，能够写出结构清晰、可维护的代码，而非堆积成山、难以维护的"一次性脚本"。</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span><strong class="text-white">能够为自己的代码负责</strong>：当自己提交的代码出现 Bug 或用户反馈问题时，能够独立分析问题根源并修复，而非将排查责任推给他人或 AI。</span>
                            </li>
                        </ul>
                        <div class="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                            <p class="text-amber-400 text-sm">
                                <UIcon name="i-lucide-info" class="size-4 inline mr-1" />
                                联盟不要求成员必须是资深架构师或算法专家，但<strong>必须能够证明自己具备项目核心代码的独立掌控能力</strong>。如果一个项目的绝大部分逻辑开发者自己都无法解释、修改或调试，该项目将被视为"完全 AI 产物"，联盟将不予收录。
                            </p>
                        </div>
                    </div>

                    <!-- 3.2 -->
                    <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                        <h3 class="text-lg font-semibold text-teal-400 mb-3">3.2 网络访问与调试能力</h3>
                        <ul class="space-y-2">
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span>能够正常访问互联网，并具备使用 ME Frp 服务的实际网络环境。</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span>了解基础的网络协议（如 TCP/UDP/HTTP）、端口转发、NAT 穿透等概念，能够调试常见的连接问题。</span>
                            </li>
                        </ul>
                    </div>

                    <!-- 3.3 -->
                    <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                        <h3 class="text-lg font-semibold text-teal-400 mb-3">3.3 问题解决能力</h3>
                        <ul class="space-y-2">
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span>在遇到代码报错、依赖冲突、运行环境异常等问题时，能够独立查阅资料、分析日志并尝试修复。</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span>具备基本的调试工具使用能力（如 IDE 调试、命令行工具、抓包工具等）。</span>
                            </li>
                        </ul>
                    </div>

                    <!-- 3.4 -->
                    <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                        <h3 class="text-lg font-semibold text-teal-400 mb-3">3.4 互联网知识</h3>
                        <ul class="space-y-2">
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span>了解开源协议（如 GPL、MIT、Apache）的基本含义。</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span>知晓网络安全基础（如密码管理、HTTPS、防注入等），避免在客户端中引入明显安全漏洞。</span>
                            </li>
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span>能够阅读英文技术文档（不要求流利，但应具备借助翻译工具理解核心术语的能力）。</span>
                            </li>
                        </ul>
                    </div>

                    <!-- 3.5 -->
                    <div class="p-4 rounded-lg bg-white/5 border border-white/10">
                        <h3 class="text-lg font-semibold text-teal-400 mb-3">3.5 版本控制意识</h3>
                        <ul class="space-y-2">
                            <li class="flex items-start space-x-3">
                                <UIcon name="i-lucide-check-circle" class="size-5 text-teal-400 mt-0.5 shrink-0" />
                                <span>熟悉 Git 的基本操作（clone、commit、push、pull、fork、PR），能够将项目代码托管于公开平台（如 GitHub、GitLab），便于协作与审查。</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 四、成员行为守则 -->
            <div ref="section4Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                :class="{ 'visible': section4Visible }">
                <div class="p-6 border-b border-white/10">
                    <div class="flex items-center space-x-3">
                        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                            <span class="text-teal-400 font-bold text-sm">四</span>
                        </div>
                        <h2 class="text-2xl font-bold text-white">成员行为守则</h2>
                    </div>
                </div>
                <div class="p-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                            <div class="flex items-center space-x-2 mb-2">
                                <UIcon name="i-lucide-shield-check" class="size-5 text-teal-400" />
                                <h3 class="text-white font-semibold">诚信</h3>
                            </div>
                            <p class="text-gray-400 text-sm">如实申报项目功能、性能与兼容性，不夸大或虚假宣传。</p>
                        </div>
                        <div class="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                            <div class="flex items-center space-x-2 mb-2">
                                <UIcon name="i-lucide-handshake" class="size-5 text-teal-400" />
                                <h3 class="text-white font-semibold">尊重</h3>
                            </div>
                            <p class="text-gray-400 text-sm">尊重其他成员的项目与决策，避免恶性竞争或贬低他人作品。</p>
                        </div>
                        <div class="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                            <div class="flex items-center space-x-2 mb-2">
                                <UIcon name="i-lucide-users" class="size-5 text-teal-400" />
                                <h3 class="text-white font-semibold">协作</h3>
                            </div>
                            <p class="text-gray-400 text-sm">在联盟公共事务（如品牌推广、活动组织）中积极沟通，遵守共识决策。</p>
                        </div>
                        <div class="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                            <div class="flex items-center space-x-2 mb-2">
                                <UIcon name="i-lucide-award" class="size-5 text-teal-400" />
                                <h3 class="text-white font-semibold">维护声誉</h3>
                            </div>
                            <p class="text-gray-400 text-sm">不得以联盟名义发表不当言论或从事违法活动，不得滥用联盟品牌。</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 五、加入与退出 -->
            <div ref="section5Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                :class="{ 'visible': section5Visible }">
                <div class="p-6 border-b border-white/10">
                    <div class="flex items-center space-x-3">
                        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                            <span class="text-teal-400 font-bold text-sm">五</span>
                        </div>
                        <h2 class="text-2xl font-bold text-white">加入与退出</h2>
                    </div>
                </div>
                <div class="p-6 text-gray-300 leading-relaxed space-y-4">
                    <div class="flex items-start space-x-4 p-4 rounded-lg bg-white/5 border border-white/10">
                        <UIcon name="i-lucide-log-in" class="size-6 text-teal-400 mt-0.5 shrink-0" />
                        <div>
                            <h3 class="text-white font-semibold mb-1">新成员申请</h3>
                            <p>需提交项目链接、技术说明及开发者简介，经现有成员半数以上同意方可加入。</p>
                        </div>
                    </div>
                    <div class="flex items-start space-x-4 p-4 rounded-lg bg-white/5 border border-white/10">
                        <UIcon name="i-lucide-log-out" class="size-6 text-amber-400 mt-0.5 shrink-0" />
                        <div>
                            <h3 class="text-white font-semibold mb-1">现有成员退出</h3>
                            <p>可自愿退出；若严重违反本规范，经联盟讨论可劝退。</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 六、规范更新 -->
            <div ref="section6Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                :class="{ 'visible': section6Visible }">
                <div class="p-6 border-b border-white/10">
                    <div class="flex items-center space-x-3">
                        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                            <span class="text-teal-400 font-bold text-sm">六</span>
                        </div>
                        <h2 class="text-2xl font-bold text-white">规范更新</h2>
                    </div>
                </div>
                <div class="p-6 text-gray-300 leading-relaxed space-y-4">
                    <p>本规范自发布之日起试行，联盟保留根据实际情况修订的权利。</p>

                    <div class="p-4 rounded-lg bg-teal-500/5 border border-teal-500/20 text-center">
                        <p class="text-gray-400 text-sm">
                            <strong class="text-white">ME-Frp Third-Party Client Alliance</strong>
                        </p>
                        <p class="text-gray-500 text-xs mt-1">2026 年 6 月 24 日</p>
                    </div>
                </div>
            </div>

            <!-- 页脚信息 -->
            <div class="text-center py-8">
                <p class="text-gray-600 text-xs italic">本规范最后更新于 2026 年 6 月 24 日</p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { SITE_NAME, SITE_URL, OG_IMAGE } from "~/data/constants";
import useScrollAnimation from '../../../composables/useScrollAnimation'

// Nuxt 4: 页面布局
definePageMeta({
    layout: 'docs'
})

// 滚动动画
const { elementRef: section1Ref, isVisible: section1Visible } = useScrollAnimation()
const { elementRef: section2Ref, isVisible: section2Visible } = useScrollAnimation()
const { elementRef: section3Ref, isVisible: section3Visible } = useScrollAnimation()
const { elementRef: section4Ref, isVisible: section4Visible } = useScrollAnimation()
const { elementRef: section5Ref, isVisible: section5Visible } = useScrollAnimation()
const { elementRef: section6Ref, isVisible: section6Visible } = useScrollAnimation()

// SEO: 页面元数据 + 结构化数据
useHead({
    title: '成员行为规范',
    link: [
        { rel: 'canonical', href: `${SITE_URL}/docs/alliance/members` }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: () => JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: 'ME Frp TPCA 成员行为规范',
                description: 'ME Frp TPCA 联盟成员行为规范 — 维护联盟的技术质量、社区声誉与协作精神。规范涵盖 AI 使用原则、技术能力要求、行为守则、加入与退出机制等。',
                author: {
                    '@type': 'Organization',
                    name: SITE_NAME,
                    url: SITE_URL
                },
                datePublished: '2026-06-24',
                dateModified: '2026-06-24',
                publisher: {
                    '@type': 'Organization',
                    name: '幻缘网络',
                    url: SITE_URL
                },
                inLanguage: 'zh-CN'
            })
        }
    ]
})

// SEO: Open Graph / Twitter 标签
useSeoMeta({
    title: '成员行为规范 | ME-Frp TPCA',
    ogTitle: 'ME Frp TPCA 成员行为规范',
    description: 'ME Frp TPCA 联盟成员行为规范 — AI 使用原则、技术能力要求、行为守则、加入与退出机制。维护联盟的技术质量、社区声誉与协作精神。',
    ogDescription: '维护联盟的技术质量、社区声誉与协作精神。AI 使用原则、技术能力要求、行为守则、加入与退出机制。',
    ogImage: OG_IMAGE,
    ogUrl: `${SITE_URL}/docs/alliance/members`,
    ogType: 'article',
    ogLocale: 'zh_CN',
    twitterCard: 'summary_large_image',
    articlePublishedTime: '2026-06-24',
    articleModifiedTime: '2026-06-24'
})
</script>
