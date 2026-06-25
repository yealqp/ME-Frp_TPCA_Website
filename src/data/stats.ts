import { PRODUCT_COUNT } from "./products";
import { MEMBER_COUNT } from "./members";

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

/** 数据统计（数值从实际产品/成员数据自动推导） */
export const stats: Stat[] = [
  { icon: "i-lucide-box", value: `${PRODUCT_COUNT}+`, label: "客户端产品" },
  { icon: "i-lucide-users", value: `${MEMBER_COUNT}+`, label: "团队成员" },
  { icon: "i-lucide-code", value: "100%", label: "社区驱动" },
  { icon: "i-lucide-heart", value: "∞", label: "用户支持" },
];
