export interface NavItem {
  name: string;
  href: string;
  icon: string;
}

export const navigation: NavItem[] = [
  { name: "首页", href: "/", icon: "i-lucide-home" },
  { name: "产品", href: "/products", icon: "i-lucide-box" },
  { name: "关于", href: "/about", icon: "i-lucide-info" },
  { name: "文档", href: "/docs", icon: "i-lucide-file-text" },
];
