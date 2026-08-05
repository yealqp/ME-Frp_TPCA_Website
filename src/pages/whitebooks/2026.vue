<template>
    <div class="pt-16">
        <!-- Hero Section -->
        <section class="py-16 lg:py-24 relative overflow-hidden"
            style="background: linear-gradient(135deg, #0F172A 0%, #111827 50%, #0A0E27 100%);">
            <div class="absolute inset-0">
                <div
                    class="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow">
                </div>
                <div
                    class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000">
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div class="animate-fade-in-up">
                    <div
                        class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm mb-6">
                        <UIcon name="i-lucide-book-open" class="size-4" />
                        <span>白皮书</span>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4"
                        style="text-shadow: 0 0 30px rgba(20, 184, 166, 0.3);">
                        ME Frp TPCA 联盟白皮书
                    </h1>
                    <p class="text-2xl text-teal-400 font-medium mb-4">2026</p>
                    <p class="text-xl text-gray-400 max-w-3xl mx-auto">
                        从三人行到群英会——社区驱动的内网穿透客户端生态
                    </p>
                </div>
            </div>
        </section>

        <!-- 正文内容 -->
        <section class="py-12 lg:py-16 relative" style="background: linear-gradient(180deg, #111827 0%, #0F172A 100%);">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

                <!-- 一、摘要 -->
                <div ref="section1Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                    :class="{ 'visible': section1Visible }">
                    <div class="p-6 border-b border-white/10">
                        <div class="flex items-center space-x-3">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                                <span class="text-teal-400 font-bold text-sm">一</span>
                            </div>
                            <h2 class="text-2xl font-bold text-white">摘要</h2>
                        </div>
                    </div>
                    <div class="p-6 text-gray-300 leading-relaxed space-y-4">
                        <p>
                            <strong class="text-teal-400">ME Frp TPCA</strong>（Third-Party Client
                            Alliance，第三方客户端联盟）是一个由社区开发者自发组成的组织，现归属<strong class="text-white">幻缘网络</strong>旗下。联盟致力于为 ME
                            Frp（幻缘映射）用户提供"更美观、更便捷、更强大"的内网穿透客户端体验。
                        </p>
                        <p>
                            自 <strong class="text-white">2025 年 8 月 13 日</strong> 正式成立以来，联盟已汇聚 <strong
                                class="text-teal-400">7 位独立开发者</strong>，孵化 <strong class="text-teal-400">7 款</strong>覆盖
                            Windows、Linux、macOS、Android 全平台的第三方客户端，技术栈横跨 .NET、Rust、Java、易语言、WinUI3、Flutter
                            等多个领域。联盟以<strong
                                class="text-white">"不畏难、勇创新、敢作为、同努力"</strong>为核心价值，从闭源起步，逐步迈向开源协作，成为内网穿透领域最具活力的社区生态之一。
                        </p>
                    </div>
                </div>

                <!-- 二、背景与缘起 -->
                <div ref="section2Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                    :class="{ 'visible': section2Visible }">
                    <div class="p-6 border-b border-white/10">
                        <div class="flex items-center space-x-3">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                                <span class="text-teal-400 font-bold text-sm">二</span>
                            </div>
                            <h2 class="text-2xl font-bold text-white">背景与缘起</h2>
                        </div>
                    </div>
                    <div class="p-6 text-gray-300 leading-relaxed space-y-6">
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-2">2.1 内网穿透的需求</h3>
                            <p>
                                随着个人云计算、自建 NAS、远程办公、游戏联机等场景的普及，内网穿透技术已成为众多开发者和极客用户的刚需。ME Frp（幻缘映射）作为国内知名的免费内网穿透服务平台，自
                                2021 年起步，已服务超过 5 万名注册用户，稳定运营 60+ 节点，积累了庞大的用户基础。
                            </p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-2">2.2 官方客户端的局限</h3>
                            <p>
                                尽管 ME Frp 服务本身稳定高效，但其官方客户端长期以命令行界面为主，对非技术用户不够友好；图形化方案缺乏统一标准，用户体验参差不齐。这为第三方客户端留下了广阔的创新空间。
                            </p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-2">2.3 社区的萌芽</h3>
                            <p>
                                2025 年 7 月 11 日，一位开发者写下了 <strong class="text-teal-400">LX-ME-Frp-Launcher</strong>
                                的第一行代码——这成为联盟历史的起点。随后，<strong class="text-teal-400">PML 2</strong>（当时为闭源项目）、<strong
                                    class="text-teal-400">XL Client</strong> 等项目陆续诞生。三位素未谋面的开发者，在社区中彼此发现，萌生了协作的意愿。
                            </p>
                            <blockquote class="mt-3 pl-4 border-l-2 border-teal-500/50 text-gray-400 italic">
                                "我们最初只是各自解决自己的需求，后来发现，原来大家在做同样的事情。"
                            </blockquote>
                        </div>
                    </div>
                </div>

                <!-- 三、联盟概览 -->
                <div ref="section3Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                    :class="{ 'visible': section3Visible }">
                    <div class="p-6 border-b border-white/10">
                        <div class="flex items-center space-x-3">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                                <span class="text-teal-400 font-bold text-sm">三</span>
                            </div>
                            <h2 class="text-2xl font-bold text-white">联盟概览</h2>
                        </div>
                    </div>
                    <div class="p-6 text-gray-300 leading-relaxed space-y-6">
                        <!-- 3.1 基本信息 -->
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">3.1 基本信息</h3>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left border-collapse">
                                    <thead>
                                        <tr class="border-b border-white/10">
                                            <th class="py-3 px-4 text-teal-400 font-semibold">项目</th>
                                            <th class="py-3 px-4 text-teal-400 font-semibold">内容</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-white/5">
                                        <tr>
                                            <td class="py-3 px-4 font-medium text-white">正式名称</td>
                                            <td class="py-3 px-4">ME Frp 第三方客户端联盟（ME Frp TPCA）</td>
                                        </tr>
                                        <tr>
                                            <td class="py-3 px-4 font-medium text-white">组织性质</td>
                                            <td class="py-3 px-4">自发性社区组织，现归属幻缘网络旗下</td>
                                        </tr>
                                        <tr>
                                            <td class="py-3 px-4 font-medium text-white">成立时间</td>
                                            <td class="py-3 px-4">2025 年 8 月 13 日</td>
                                        </tr>
                                        <tr>
                                            <td class="py-3 px-4 font-medium text-white">发起成员</td>
                                            <td class="py-3 px-4">PML 2、XL Client、LX-ME-Frp-Launcher（"元老三款"）</td>
                                        </tr>
                                        <tr>
                                            <td class="py-3 px-4 font-medium text-white">当前规模</td>
                                            <td class="py-3 px-4">7 位独立开发者 / 团队，7 款客户端产品</td>
                                        </tr>
                                        <tr>
                                            <td class="py-3 px-4 font-medium text-white">覆盖平台</td>
                                            <td class="py-3 px-4">Windows、Linux、macOS（Intel/Apple Silicon）、Android</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- 3.2 视觉识别 -->
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">3.2 视觉识别</h3>
                            <ul class="space-y-2 list-disc list-inside">
                                <li><strong class="text-white">Logo 与品牌设计</strong>：由联盟成员 <strong
                                        class="text-teal-400">yealqp</strong> 提供</li>
                                <li><strong class="text-white">主色调</strong>：<span
                                        class="inline-flex items-center space-x-1"><span class="w-4 h-4 rounded"
                                            style="background: #14b8a6;"></span><code
                                            class="text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded text-sm">#14b8a6</code></span>（青绿色），象征生长、信任与科技感
                                </li>
                                <li><strong class="text-white">设计理念</strong>：连接性、联盟性、创新性</li>
                                <li><strong class="text-white">美术与 UI 顾问</strong>：<strong
                                        class="text-teal-400">ZeroSnow</strong> 为 PML 2 提供美术参考及 UI 优化建议，并主导 ZNext
                                    Launcher 的开发</li>
                            </ul>
                        </div>

                        <!-- 3.3 核心价值 -->
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">3.3 核心价值</h3>
                            <blockquote class="pl-4 border-l-2 border-teal-500/50 text-gray-400 italic text-lg">
                                不畏难、勇创新、敢作为、同努力
                            </blockquote>
                            <p class="mt-2">这十二个字既是联盟的精神底色，也是对每一位用户的承诺。</p>
                        </div>
                    </div>
                </div>

                <!-- 四、核心产品生态 -->
                <div ref="section4Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                    :class="{ 'visible': section4Visible }">
                    <div class="p-6 border-b border-white/10">
                        <div class="flex items-center space-x-3">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                                <span class="text-teal-400 font-bold text-sm">四</span>
                            </div>
                            <h2 class="text-2xl font-bold text-white">核心产品生态</h2>
                        </div>
                    </div>
                    <div class="p-6 text-gray-300 leading-relaxed space-y-6">
                        <p>联盟目前已收录 <strong class="text-teal-400">7 款</strong>各具特色的客户端，覆盖不同平台与技术栈：</p>

                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr class="border-b border-white/10">
                                        <th class="py-3 px-3 text-teal-400 font-semibold">客户端</th>
                                        <th class="py-3 px-3 text-teal-400 font-semibold">开发者</th>
                                        <th class="py-3 px-3 text-teal-400 font-semibold">技术栈</th>
                                        <th class="py-3 px-3 text-teal-400 font-semibold">平台</th>
                                        <th class="py-3 px-3 text-teal-400 font-semibold">特色</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-white/5">
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-teal-400">PML 2</td>
                                        <td class="py-3 px-3">RYCB 工作室</td>
                                        <td class="py-3 px-3">.NET 10</td>
                                        <td class="py-3 px-3">Win / Linux / macOS / Android</td>
                                        <td class="py-3 px-3">跨平台，Fluent 2 UI，性能卓越</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-teal-400">XL Client</td>
                                        <td class="py-3 px-3">yealqp</td>
                                        <td class="py-3 px-3">Tauri (Rust)</td>
                                        <td class="py-3 px-3">Win / Linux</td>
                                        <td class="py-3 px-3">高仿官网样式，包体最小，bug 最少</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-teal-400">LX-ME-Frp-Launcher</td>
                                        <td class="py-3 px-3">灵弦 MuaMua</td>
                                        <td class="py-3 px-3">易语言 &amp; Exui</td>
                                        <td class="py-3 px-3">Windows</td>
                                        <td class="py-3 px-3">高仿官方图形化 V4.0，元老之一</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-teal-400">ZNext Launcher</td>
                                        <td class="py-3 px-3">ZeroSnow</td>
                                        <td class="py-3 px-3">WinUI3</td>
                                        <td class="py-3 px-3">Windows</td>
                                        <td class="py-3 px-3">Windows 原生体验，Fluent Design</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-teal-400">Fan-ME-FRP Launcher</td>
                                        <td class="py-3 px-3">xiaofanforfabric</td>
                                        <td class="py-3 px-3">Java</td>
                                        <td class="py-3 px-3">跨平台</td>
                                        <td class="py-3 px-3">GUI + 命令行双模式</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-teal-400">FrpDash</td>
                                        <td class="py-3 px-3">zhai</td>
                                        <td class="py-3 px-3">Java</td>
                                        <td class="py-3 px-3">Android</td>
                                        <td class="py-3 px-3">内置四架构 frpc，免 Root 一键启动</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-teal-400">EM Launcher</td>
                                        <td class="py-3 px-3">eee</td>
                                        <td class="py-3 px-3">Flutter</td>
                                        <td class="py-3 px-3">Android</td>
                                        <td class="py-3 px-3">移动端触控优化，支持一键启动、日志查看与多账户切换</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p class="text-sm text-gray-500 italic">注：FrpMC Aoao 为独立开发的 Minecraft 服务端插件，不属于 TPCA 联盟成员。</p>

                        <!-- 4.1 -->
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">4.1 技术多样性</h3>
                            <p>联盟最大的特色之一，是技术栈的<strong class="text-white">高度多元化</strong>：</p>
                            <ul class="mt-2 space-y-2 list-disc list-inside">
                                <li><strong class="text-white">.NET 生态</strong>（PML 2）：原生 AOT 编译，极致性能</li>
                                <li><strong class="text-white">Rust 生态</strong>（XL Client）：内存安全，包体极小</li>
                                <li><strong class="text-white">Java 生态</strong>（Fan-Launcher、FrpDash）：Write Once, Run
                                    Anywhere</li>
                                <li><strong class="text-white">易语言生态</strong>（LX）：低门槛，快速迭代</li>
                                <li><strong class="text-white">WinUI3 生态</strong>（ZNext）：Windows 原生体验的标杆</li>
                                <li><strong class="text-white">Flutter 生态</strong>（EM Launcher）：移动端跨平台，触控优化</li>
                            </ul>
                            <p class="mt-2">这种多样性不是碎片化，而是<strong
                                    class="text-teal-400">生态繁荣的体现</strong>——每个开发者都可以选择自己最擅长的工具，为用户创造最好的体验。</p>
                        </div>

                        <!-- 4.2 -->
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">4.2 跨平台覆盖</h3>
                            <p>联盟产品组合起来，实现了对主流操作系统和架构的<strong class="text-white">完整覆盖</strong>：</p>
                            <ul class="mt-2 space-y-2 list-disc list-inside">
                                <li><strong class="text-white">Windows</strong>：x64 / ARM64（PML 2、ZNext、LX、XL Client）
                                </li>
                                <li><strong class="text-white">Linux</strong>：x64 / ARM64（PML 2、XL Client）</li>
                                <li><strong class="text-white">macOS</strong>：Intel / Apple Silicon（PML 2）</li>
                                <li><strong class="text-white">Android</strong>：ARM64 / ARMv7（FrpDash、EM Launcher、PML 2）
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 五、发展历程 -->
                <div ref="section5Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                    :class="{ 'visible': section5Visible }">
                    <div class="p-6 border-b border-white/10">
                        <div class="flex items-center space-x-3">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                                <span class="text-teal-400 font-bold text-sm">五</span>
                            </div>
                            <h2 class="text-2xl font-bold text-white">发展历程</h2>
                        </div>
                    </div>
                    <div class="p-6 text-gray-300 leading-relaxed space-y-6">
                        <!-- 5.1 -->
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">5.1 萌芽期（2025 年 7 月 — 8 月）</h3>
                            <p>
                                2025 年 7 月 11 日，<strong class="text-teal-400">LX-ME-Frp-Launcher</strong>
                                写下第一行代码。同一时期，<strong class="text-teal-400">PML 2</strong> 的前身和 <strong
                                    class="text-teal-400">XL Client</strong> 也各自开始了开发工作。三者最初均为闭源的个人项目，彼此独立，互不知晓。
                            </p>
                            <p class="mt-2">
                                随着各自项目在社区中发布，三位开发者通过用户反馈和社区讨论彼此发现。经过短暂交流，大家意识到：与其各自为战，不如汇聚力量。
                            </p>
                            <p class="mt-2">
                                <strong class="text-white">2025 年 8 月 13 日</strong>，ME Frp TPCA 联盟正式成立。三位元老决定：
                            </p>
                            <ul class="mt-2 space-y-1 list-disc list-inside">
                                <li>统一品牌形象与视觉规范</li>
                                <li>逐步推动项目向开源转型</li>
                                <li>建立协作机制，共享社区资源</li>
                            </ul>
                        </div>

                        <!-- 5.2 -->
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">5.2 开源转型期（2025 年 8 月 — 2026 年 3 月）</h3>
                            <p>
                                联盟成立后，成员们开始<strong
                                    class="text-white">逐步将项目从闭源转向半开源、开源</strong>。这一转变标志着联盟从"个人工具集"走向"社区共治"的理念升级：
                            </p>
                            <ul class="mt-2 space-y-1 list-disc list-inside">
                                <li><strong class="text-white">透明度提升</strong>：代码公开让用户可以审查安全性与可靠性</li>
                                <li><strong class="text-white">协作增强</strong>：开源降低了新贡献者的参与门槛</li>
                                <li><strong class="text-white">信任建立</strong>：开源是社区项目对用户最真诚的姿态</li>
                            </ul>
                        </div>

                        <!-- 5.3 -->
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">5.3 成长与扩展期（2025 年 12 月 — 2026 年 6 月）</h3>
                            <p>联盟的成长并非一蹴而就，而是一个持续吸纳、稳步壮大的过程：</p>
                            <ul class="mt-2 space-y-2 list-disc list-inside">
                                <li><strong class="text-white">2025 年 12 月</strong>：<strong
                                        class="text-teal-400">ZeroSnow</strong> 加入联盟，为 PML 2 提供美术参考及 UI 优化建议，并于 2026 年 3
                                    月启动 ZNext Launcher（WinUI3）项目开发</li>
                                <li><strong class="text-white">2026 年 1 月 11 日</strong>：<strong
                                        class="text-teal-400">eee</strong> 携 EM Launcher（Flutter / Android
                                    移动端）加入，联盟首次迎来移动端开发者</li>
                                <li><strong class="text-white">2026 年 5 月</strong>：<strong
                                        class="text-teal-400">xiaofanforfabric</strong> 携 Fan-ME-FRP Launcher（Java /
                                    双模式）加入</li>
                                <li><strong class="text-white">2026 年 6 月</strong>：<strong
                                        class="text-teal-400">zhai</strong> 携 FrpDash（Android / 免 Root）加入</li>
                            </ul>
                            <blockquote class="mt-3 pl-4 border-l-2 border-teal-500/50 text-gray-400 italic">
                                <strong class="not-italic text-white">时代观察</strong>：这一时期的增长恰逢 AI Agent 技术在开发者社区的大规模普及。AI
                                辅助编程工具的成熟，显著降低了独立开发者从"想法"到"可用产品"的落地成本。或许正是这种技术普惠，让更多优秀开发者能够将创意转化为现实，并最终汇聚于联盟的生态之中。
                            </blockquote>
                            <p class="mt-3">
                                至此，联盟从最初的三款元老客户端，发展为 <strong class="text-teal-400">7 款覆盖全平台、横跨多技术栈</strong> 的完整生态格局。
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 六、开源理念与社区治理 -->
                <div ref="section6Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                    :class="{ 'visible': section6Visible }">
                    <div class="p-6 border-b border-white/10">
                        <div class="flex items-center space-x-3">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                                <span class="text-teal-400 font-bold text-sm">六</span>
                            </div>
                            <h2 class="text-2xl font-bold text-white">开源理念与社区治理</h2>
                        </div>
                    </div>
                    <div class="p-6 text-gray-300 leading-relaxed space-y-6">
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">6.1 从闭源到开源的演进</h3>
                            <p>联盟并非一开始就拥抱开源。早期阶段，各项目均为闭源状态，开发者更多聚焦于产品本身。随着联盟的成立和成员间的深入协作，大家逐渐认识到：</p>
                            <ul class="mt-2 space-y-1 list-disc list-inside">
                                <li><strong class="text-white">开源不是放弃，而是共享</strong></li>
                                <li><strong class="text-white">代码公开不会削弱价值，反而会增强信任</strong></li>
                                <li><strong class="text-white">社区的力量在于汇聚，而非独占</strong></li>
                            </ul>
                            <p class="mt-2">目前，联盟各项目已根据自身情况，分别处于 <strong class="text-teal-400">半开源</strong> 或 <strong
                                    class="text-teal-400">完全开源</strong> 状态，并持续向更开放的方向演进。</p>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">6.2 治理模式</h3>
                            <p>联盟采用 <strong class="text-white">轻量化、自组织</strong> 的治理模式：</p>
                            <ul class="mt-2 space-y-1 list-disc list-inside">
                                <li>各项目由各自开发者独立决策，保持创作自由</li>
                                <li>联盟层面通过共识机制协调品牌、推广等公共事务</li>
                                <li>新成员加入采用 <strong class="text-white">邀请 + 自荐</strong> 结合的方式，需经现有成员一致认可</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">6.3 加入联盟</h3>
                            <p>联盟欢迎符合以下条件的开发者 / 项目申请加入：</p>
                            <ul class="mt-2 space-y-1 list-disc list-inside">
                                <li>为 ME Frp 开发第三方客户端</li>
                                <li>认同联盟的核心价值与开源理念</li>
                                <li>项目具备基本的功能完整性与用户体验</li>
                            </ul>
                            <p class="mt-2 text-sm text-gray-500">（有意者可访问联盟官网了解详情。）</p>
                        </div>
                    </div>
                </div>

                <!-- 七、未来展望 -->
                <div ref="section7Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                    :class="{ 'visible': section7Visible }">
                    <div class="p-6 border-b border-white/10">
                        <div class="flex items-center space-x-3">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                                <span class="text-teal-400 font-bold text-sm">七</span>
                            </div>
                            <h2 class="text-2xl font-bold text-white">未来展望</h2>
                        </div>
                    </div>
                    <div class="p-6 text-gray-300 leading-relaxed space-y-6">
                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">7.1 短期目标（2026 年下半年）</h3>
                            <ul class="space-y-1 list-disc list-inside">
                                <li><strong class="text-white">生态完善</strong>：推动更多客户端功能对齐，提升整体体验</li>
                                <li><strong class="text-white">文档建设</strong>：完善开发者文档，降低新成员加入门槛</li>
                                <li><strong class="text-white">用户增长</strong>：通过联盟品牌效应，触达更多 ME Frp 用户</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">7.2 长期愿景</h3>
                            <ul class="space-y-1 list-disc list-inside">
                                <li>成为 <strong class="text-white">最具影响力的社区驱动 Frp 客户端生态</strong></li>
                                <li>推动 <strong class="text-white">第三方客户端开发标准</strong> 的形成</li>
                                <li>探索与官方 ME Frp 的更深度协作，共同服务用户</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">7.3 对社区的承诺</h3>
                            <p>联盟将继续坚持 <strong class="text-white">"社区驱动、用户优先"</strong> 的理念：</p>
                            <ul class="mt-2 space-y-1 list-disc list-inside">
                                <li>所有核心客户端保持 <strong class="text-teal-400">免费可用</strong></li>
                                <li>持续倾听用户反馈，快速迭代</li>
                                <li>保持技术探索精神，拥抱新工具与新框架</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 八、致谢 -->
                <div ref="section8Ref" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                    :class="{ 'visible': section8Visible }">
                    <div class="p-6 border-b border-white/10">
                        <div class="flex items-center space-x-3">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20">
                                <span class="text-teal-400 font-bold text-sm">八</span>
                            </div>
                            <h2 class="text-2xl font-bold text-white">致谢</h2>
                        </div>
                    </div>
                    <div class="p-6 text-gray-300 leading-relaxed space-y-3">
                        <p><strong class="text-white">致每一位开发者</strong>——是你们的深夜编码与执着追求，让这些客户端从想法变为现实。</p>
                        <p><strong class="text-white">致每一位用户</strong>——是你们的使用、反馈与鼓励，让联盟的存在有了意义。</p>
                        <p><strong class="text-white">致幻缘网络与 ME Frp 官方</strong>——是你们提供了稳定高效的服务平台，为联盟的诞生提供了土壤。</p>
                        <p><strong class="text-white">致 yealqp</strong>——不仅开发了 XL Client，还为联盟设计了 Logo 与品牌视觉，奠定了联盟的形象基础。
                        </p>
                        <p><strong class="text-white">致这个时代</strong>——AI 技术的普及让独立开发者拥有了前所未有的创造力，而联盟正是这种创造力的集体呈现。</p>
                    </div>
                </div>

                <!-- 附录：联盟成员名录 -->
                <div ref="appendixRef" class="glass-card scroll-animate hover-lift rounded-xl overflow-hidden"
                    :class="{ 'visible': appendixVisible }">
                    <div class="p-6 border-b border-white/10">
                        <div class="flex items-center space-x-3">
                            <UIcon name="i-lucide-users" class="size-6 text-teal-400" />
                            <h2 class="text-2xl font-bold text-white">附录：联盟成员名录</h2>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr class="border-b border-white/10">
                                        <th class="py-3 px-3 text-teal-400 font-semibold">代号 / 昵称</th>
                                        <th class="py-3 px-3 text-teal-400 font-semibold">项目</th>
                                        <th class="py-3 px-3 text-teal-400 font-semibold">技术栈</th>
                                        <th class="py-3 px-3 text-teal-400 font-semibold">加入时间</th>
                                        <th class="py-3 px-3 text-teal-400 font-semibold">备注</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-white/5">
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-white">RYCB 工作室（qyf）</td>
                                        <td class="py-3 px-3 text-teal-400">PML 2</td>
                                        <td class="py-3 px-3">.NET 10</td>
                                        <td class="py-3 px-3">2025.08</td>
                                        <td class="py-3 px-3">元老</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-white">yealqp</td>
                                        <td class="py-3 px-3 text-teal-400">XL Client</td>
                                        <td class="py-3 px-3">Tauri (Rust)</td>
                                        <td class="py-3 px-3">2025.08</td>
                                        <td class="py-3 px-3">元老，同时提供联盟 Logo 与品牌设计</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-white">灵弦 MuaMua</td>
                                        <td class="py-3 px-3 text-teal-400">LX-ME-Frp-Launcher</td>
                                        <td class="py-3 px-3">易语言 &amp; Exui</td>
                                        <td class="py-3 px-3">2025.08</td>
                                        <td class="py-3 px-3">元老</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-white">ZeroSnow</td>
                                        <td class="py-3 px-3 text-teal-400">ZNext Launcher</td>
                                        <td class="py-3 px-3">WinUI3</td>
                                        <td class="py-3 px-3">2025.12</td>
                                        <td class="py-3 px-3">先为 PML 2 提供美术/UI 建议，后转型开发</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-white">eee</td>
                                        <td class="py-3 px-3 text-teal-400">EM Launcher</td>
                                        <td class="py-3 px-3">Flutter</td>
                                        <td class="py-3 px-3">2026.01.11</td>
                                        <td class="py-3 px-3">首位移动端开发者</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-white">xiaofanforfabric</td>
                                        <td class="py-3 px-3 text-teal-400">Fan-ME-FRP Launcher</td>
                                        <td class="py-3 px-3">Java</td>
                                        <td class="py-3 px-3">2026.05</td>
                                        <td class="py-3 px-3">—</td>
                                    </tr>
                                    <tr>
                                        <td class="py-3 px-3 font-semibold text-white">zhai</td>
                                        <td class="py-3 px-3 text-teal-400">FrpDash</td>
                                        <td class="py-3 px-3">Java (Android)</td>
                                        <td class="py-3 px-3">2026.06</td>
                                        <td class="py-3 px-3">—</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- 页脚信息 -->
                <div class="text-center py-8 space-y-4">
                    <p class="text-gray-500 text-sm">
                        <strong class="text-white">ME Frp TPCA 联盟</strong>
                    </p>
                    <p class="text-gray-600 text-sm">
                        官网：<a href="https://mefrp-tpca.yealqp.cn" target="_blank" rel="noopener noreferrer"
                            class="text-teal-400 hover:text-teal-300 transition-colors">https://mefrp-tpca.yealqp.cn</a>
                    </p>
                    <p class="text-gray-600 text-xs italic">本白皮书最后更新于 2026 年 6 月</p>
                </div>

            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import useScrollAnimation from '../../composables/useScrollAnimation'

// 为每个 section 设置滚动动画
const { elementRef: section1Ref, isVisible: section1Visible } = useScrollAnimation()
const { elementRef: section2Ref, isVisible: section2Visible } = useScrollAnimation()
const { elementRef: section3Ref, isVisible: section3Visible } = useScrollAnimation()
const { elementRef: section4Ref, isVisible: section4Visible } = useScrollAnimation()
const { elementRef: section5Ref, isVisible: section5Visible } = useScrollAnimation()
const { elementRef: section6Ref, isVisible: section6Visible } = useScrollAnimation()
const { elementRef: section7Ref, isVisible: section7Visible } = useScrollAnimation()
const { elementRef: section8Ref, isVisible: section8Visible } = useScrollAnimation()
const { elementRef: appendixRef, isVisible: appendixVisible } = useScrollAnimation()
</script>
