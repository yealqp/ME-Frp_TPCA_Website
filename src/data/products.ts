/**
 * 共享产品定义
 * 集中管理所有产品数据，消除 products.vue 和 MainContent.vue 间的重复定义
 */
import type { VersionData } from "~/composables/useProductVersions";

export interface ProductFeature {
  text: string;
}

export interface Product {
  id: string;
  name: string;
  author: string;
  /** 动态版本号（来自 useProductVersions） */
  version: string;
  description: string;
  icon: string;
  fallbackIcon?: string;
  screenshot?: string;
  fallbackScreenshot?: string;
  link: string;
  tags: string[];
  features: string[];
}

/** 无版本号的基础产品定义（用于推导数量等元信息） */
type ProductBase = Omit<Product, "version">;

const productBases: ProductBase[] = [
  {
    id: "xl",
    name: "ME-Frp-XL-Client",
    author: "yealqp",
    description:
      "由yealqp使用Tauri框架开发，界面高仿官网样式，可能是目前收录的三个客户端中最美观的一个，也可能也是包体最小的一个，亦或是bug最少的一个。",
    icon: "https://image.mefrp-tpca.yealqp.cn/images/views/icon/xl_icon.webp",
    screenshot:
      "https://image.mefrp-tpca.yealqp.cn/images/views/yealqp/home.png",
    link: "https://mefrp-tpca.yealqp.cn/docs/xl",
    tags: ["Tauri", "轻量级", "Rust"],
    features: [
      "基于 Tauri 框架，性能优异",
      "界面美观，高仿官网设计",
      "包体小巧，启动迅速",
      "跨平台支持，稳定可靠",
    ],
  },
  {
    id: "lx",
    name: "LX-ME-Frp-Launcher",
    author: "灵弦MuaMua",
    description:
      "由灵弦MuaMua使用易语言&Exui开发，界面高仿官方图形化V4.0。",
    icon: "https://image.mefrp-tpca.yealqp.cn/images/views/icon/lx_icon.webp",
    screenshot:
      "https://image.mefrp-tpca.yealqp.cn/images/views/Lx_MuaMua/home.png",
    link: "https://mefrp-tpca.yealqp.cn/docs/lx",
    tags: ["易语言", "Windows", "官方风格", "Exui"],
    features: [
      "使用易语言开发，原生 Windows 体验",
      "界面高仿官方图形化 V4.0",
      "操作简单，易于上手",
      "功能完整，稳定运行",
    ],
  },
  {
    id: "pml",
    name: "PML 2",
    author: "RYCB工作室",
    description:
      "PML 2使用.NET提供了简单便捷的操作, 也是目前三个产品中唯一一个跨平台的软件。支持常见主流平台(Windows, Linux, MacOS, Android)。",
    icon: "https://image.mefrp-tpca.yealqp.cn/images/views/icon/pml_icon.webp",
    screenshot:
      "https://image.mefrp-tpca.yealqp.cn/images/views/rycb/home2.png",
    link: "https://mefrp-tpca.yealqp.cn/docs/pml",
    tags: [".NET", "跨平台", "多系统"],
    features: [
      "基于 .NET 框架，跨平台支持",
      "支持 Windows、Linux、MacOS、Android",
      "操作简单便捷，功能丰富",
      "持续更新，社区活跃",
    ],
  },
  {
    id: "zl",
    name: "ZNext Launcher",
    author: "ZeroSnow",
    description:
      "由ZeroSnow使用WinUI3框架开发的Windows原生客户端，采用Fluent Design设计语言，功能强大，性能优异。",
    icon: "https://image.mefrp-tpca.yealqp.cn/images/views/zerosnow/znext-icon.png",
    screenshot:
      "https://image.mefrp-tpca.yealqp.cn/images/views/zerosnow/znext/home.png",
    link: "https://mefrp-tpca.yealqp.cn/docs/zl",
    tags: ["WinUI3", "Windows", "Fluent Design"],
    features: [
      "基于 WinUI3 框架，性能优异",
      "Fluent Design 设计语言",
      "支持各种复杂场景",
      "拥有开机自启动、系统托盘等功能",
      "MSIX 包体小巧，启动迅速",
    ],
  },
  {
    id: "fm",
    name: "Fan-ME-FRP Launcher",
    author: "xiaofanforfabric",
    description:
      "由xiaofanforfabric使用Java开发，支持GUI图形界面和命令行双模式运行，自动下载依赖并管理frpc生命周期。",
    icon: "https://image.mefrp-tpca.yealqp.cn/images/views/icon/fm_icon.webp",
    fallbackIcon:
      "https://oss.cf.xiaofanshop.cn/tpcaw/images/views/icon/fm_icon.webp",
    screenshot:
      "https://image.mefrp-tpca.yealqp.cn/images/views/xiaofan/home.png",
    fallbackScreenshot:
      "https://oss.cf.xiaofanshop.cn/tpcaw/images/views/xiaofan/home.png",
    link: "https://mefrp-tpca.yealqp.cn/docs/fm",
    tags: ["Java", "跨平台", "GUI"],
    features: [
      "基于 Java 开发，跨平台支持",
      "GUI 图形界面 + 命令行双模式",
      "自动下载依赖并管理 frpc 生命周期",
      "支持官方 CF 节点、xiaoli 捐赠节点、CF R2 OSS 节点",
    ],
  },
  {
    id: "gr",
    name: "MeFrp-GR-Client",
    author: "GuoRan",
    description:
      "由GuoRan使用Python+Flask+PyQt5开发，支持Windows、Linux和fnOS多平台，内置WebView图形界面，自动管理frpc生命周期，提供Token认证与隧道管理功能。",
    icon: "http://iwmc.bbroot.com:8989/icon/gr_icon.webp",
    screenshot:
      "http://iwmc.bbroot.com:8989/iconhome.png",
    link: "/docs/gr",
    tags: ["Python", "跨平台", "Flask", "PyQt5"],
    features: [
      "基于 Python + Flask 开发，跨平台支持",
      "支持 Windows、Linux (.deb)、fnOS (NAS) 多平台",
      "内置 WebView 图形界面，操作直观便捷",
      "自动下载与管理 frpc 生命周期",
      "Token 认证登录，隧道一键启停",
    ],
  },
  {
    id: "fd",
    name: "FrpDash",
    author: "zhai",
    description:
      "FrpDash 由 zhai 使用 Java 原生开发，是面向安卓端的 ME-Frp 第三方客户端。应用内置 arm64、armv7、x86_64 与 x86 四架构 frpc 二进制，免 Root 开箱即用，支持隧道管理、节点监控、签到与账户操作，并对官方人机验证实现本地自动求解，是目前持续活跃更新的 ME-Frp 安卓端。",
    icon: "https://fd.0n.pub/img/logo-192.png",
    screenshot: "https://fd.0n.pub/img/home.png",
    link: "/docs/fd",
    tags: ["Android", "Java 原生", "内置 frpc"],
    features: [
      "原生安卓开发，向下兼容至 Android 5.0",
      "内置 arm64 / armv7 / x86_64 / x86 四架构 frpc，免 Root 即用",
      "隧道创建管理、节点监控、签到与权益一应俱全",
      "官方人机验证本地自动求解，无需手动过码",
    ],
  },
];

/** 客户端产品总数（从静态定义自动推导） */
export const PRODUCT_COUNT = productBases.length;

/**
 * 根据版本数据生成完整产品列表
 * 单独暴露 getProducts 函数以保持 version 字段的响应式绑定
 */
export function getProducts(versions: VersionData): Product[] {
  return productBases.map((base) => ({
    ...base,
    version: versions[base.id as keyof VersionData],
  }));
}

/** 精简版产品列表（首页网格用，不含截图和详细特性） */
export interface ProductSummary {
  id: string;
  name: string;
  author: string;
  version: string;
  description: string;
  icon: string;
  fallbackIcon?: string;
  link: string;
  tags: string[];
}

export function getProductSummaries(versions: VersionData): ProductSummary[] {
  return getProducts(versions).map(
    ({ id, name, author, version, description, icon, fallbackIcon, link, tags }) => ({
      id,
      name,
      author,
      version,
      description,
      icon,
      fallbackIcon,
      link,
      tags,
    }),
  );
}

/** 文档首页客户端列表项（含描述） */
export interface DocClient extends DocSidebarClient {
  description: string;
}

export function getDocClients(versions: VersionData): DocClient[] {
  return getProducts(versions).map(
    ({ id, name, icon, fallbackIcon, description }) => ({
      id,
      name,
      path: `/docs/${id}`,
      description,
      icon,
      fallbackIcon,
    }),
  );
}

/** 文档侧边栏客户端列表项 */
export interface DocSidebarClient {
  id: string;
  name: string;
  path: string;
  icon: string;
  fallbackIcon?: string;
}

export function getDocSidebarClients(versions: VersionData): DocSidebarClient[] {
  return getProducts(versions).map(
    ({ id, name, icon, fallbackIcon }) => ({
      id,
      name: id === "xl" ? "XL Client" : name,
      path: `/docs/${id}`,
      icon,
      fallbackIcon,
    }),
  );
}
