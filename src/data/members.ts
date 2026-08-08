export interface Member {
  name: string;
  avatar: string;
  role: string;
  link: string;
}

export const members: Member[] = [
  { name: "Yealqp", avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=1592239257&spec=4", role: "DevOps / 创始人 / 成员", link: "https://github.com/Yealqp" },
  { name: "灵弦MuaMua", avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=407176772&spec=4", role: "创始人 / 成员", link: "https://github.com/lngxian" },
  { name: "QYF", avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=3561786358&spec=4", role: "创始人 / 成员", link: "https://github.com/QYF-RYCBStudio" },
  { name: "ZeroSnow", avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=3976141098&spec=4", role: "成员", link: "https://github.com/chencomcdyun" },
  { name: "xiaofan", avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=2183576276&spec=4", role: "成员", link: "https://github.com/xiaofanforfabric/" },
  { name: "zhai", avatar: "https://q2.qlogo.cn/headimg_dl?dst_uin=2088264797&spec=4", role: "成员", link: "https://github.com/zcj-ui" },
];

/** 团队成员总数（从数据自动推导） */
export const MEMBER_COUNT = members.length;
