export interface Milestone {
  date: string;
  title: string;
  description: string;
  icon: string;
}

export const timeline: Milestone[] = [
  {
    date: "2025/07/11",
    title: "写下第一行代码",
    description: "LX-ME-Frp-Launcher 的第一行代码被写下，命运的齿轮悄然转动",
    icon: "i-lucide-code",
  },
  {
    date: "2025/08/01",
    title: "逐渐扩大",
    description: "LX-ME-Frp-Launcher 的开发纷纷让其他开发者也开始开发ME-Frp第三方客户端",
    icon: "i-lucide-trending-up",
  },
  {
    date: "2025/8/13",
    title: "ME-Frp TPCA成立",
    description: "ME-Frp第三方客户端的开发者们聚集在一起，ME-Frp TPCA正式成立",
    icon: "i-lucide-flag",
  },
  {
    date: "未来",
    title: "展望未来",
    description: "我们会变得更好...",
    icon: "i-lucide-rocket",
  },
];
