import { sponsors } from "./sponsors";
import { stats } from "./stats";

/* ========== 基础计数 ========== */

/** 特别鸣谢总数 */
export const SPONSOR_COUNT = sponsors.length;

/** 数据统计项数 */
export const STAT_COUNT = stats.length;

/* ========== 动画配置 ========== */

export const ANIMATION = {
  /** 产品网格各卡片间错开延迟 (ms) */
  PRODUCT_STAGGER: 150,
  /** 团队成员各卡片间错开延迟 (ms) */
  MEMBER_STAGGER: 100,
  /** 特别鸣谢各卡片间错开延迟 (ms) */
  SPONSOR_STAGGER: 150,
  /** 数据统计各卡片间错开延迟 (ms) */
  STAT_STAGGER: 100,
  /** 首页平滑滚动持续时间 (ms) */
  SCROLL_DURATION: 800,
  /** 首页吸附滚动边界阈值 (px) */
  SNAP_OFFSET: 100,
  /** 首页触摸滑动阈值 (px) */
  SWIPE_THRESHOLD: 50,
} as const;

/* ========== 超时 / 延迟配置 ========== */

/** 缓存有效期 (ms) */
export const CACHE_TTL = 5 * 60 * 1000;

/** 自定义协议回退跳转延迟 (ms) */
export const PROTOCOL_FALLBACK_DELAY = 1000;

/** 协议页面倒计时初始值 (s) */
export const PROTOCOL_COUNTDOWN_INIT = 5;

/** 协议页面重试倒计时间隔 (ms) */
export const PROTOCOL_TICK_INTERVAL = 1000;

/* ========== 站点信息 ========== */

/** 站点名称 */
export const SITE_NAME = "ME-Frp 第三方客户端联盟";

/** 站点简称 */
export const SITE_SHORT_NAME = "ME-Frp TPCA";

/** 站点描述 */
export const SITE_DESCRIPTION = "专注于 ME-Frp 第三方客户端开发，为用户提供更美观、更便捷、更强大的内网穿透体验";

/** 站点 URL */
export const SITE_URL = "https://mefrp-tpca.yealqp.cn";

/** CDN 镜像基 URL */
export const CDN_BASE = "https://image.mefrp-tpca.yealqp.cn";

/** OG 图片 URL */
export const OG_IMAGE = `${CDN_BASE}/images/views/icon/og-image.png`;

/** 联盟成立时间 */
export const FOUNDING_DATE = "2025/08/13 11:25:27";

/** 站点备案号 */
export const ICP_BEIAN = "冀ICP备2025123259号-2";

/** GitHub 仓库地址 */
export const GITHUB_REPO = "https://github.com/yealqp/ME-Frp_TPCA_Website";

/* ========== API ========== */

/** Alist API 基地址 */
export const ALIST_BASE = "https://alist.yealqp.cn";

/** EdgeOne CDN 刷新 API */
export const EO_API = "https://check.yealqp.cn";

/** Umami 分析脚本地址 */
export const UMAMI_URL = "https://umami.yealqp.cn";

/* ========== 分析平台 ========== */

/** Microsoft Clarity 项目 ID */
export const CLARITY_PROJECT_ID = "u33c3orphh";

/** Umami 网站 ID */
export const UMAMI_WEBSITE_ID = "2c44a45e-a4bb-40ea-ab3c-75936119e6a2";

/* ========== 外部链接 ========== */

/** 仙林云计算链接 */
export const XIANLIN_URL = "https://www.idcxl.cn/";

/** MCSLTeam 官网（本站借鉴来源） */
export const MCSLTEAM_URL = "https://github.com/MCSLTeam/MCSLTeam-Website-Next";

/** 工信部备案查询 */
export const ICP_QUERY_URL = "https://beian.miit.gov.cn/";

/** 联系邮箱 */
export const CONTACT_EMAIL = "im@yealqp.cn";

/** 广告位联系邮箱前缀 */
export const AD_EMAIL_SUBJECT = "TPCAW广告位购买咨询";
