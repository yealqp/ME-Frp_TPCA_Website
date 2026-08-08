export interface Sponsor {
  name: string;
  avatar: string;
  role: string;
  link: string;
  special: boolean;
}

export const sponsors: Sponsor[] = [
  { name: "落雪无痕LxHTT", avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=3395314362&spec=4", role: "特别鸣谢", link: "https://github.com/LxHTT", special: false },
  { name: "MCSLTeam-Website-Next", avatar: "https://avatars.githubusercontent.com/u/138136619?s=48&v=4", role: "特别鸣谢", link: "https://github.com/MCSLTeam/MCSLTeam-Website-Next", special: false },
  { name: "仙林云计算", avatar: "https://image.mefrp-tpca.yealqp.cn/images/xianlin.ico", role: "服务提供商", link: "https://www.idcxl.cn/", special: true },
];
