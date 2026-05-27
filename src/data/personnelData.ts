export interface Personnel {
  id: string;
  name: string;
  title: string;
  role: string;
  description: string;
  appearance: string;
  abilities: string[];
  relationships: string;
  status: "active" | "deceased" | "unknown";
}

export const personnel: Personnel[] = [
  {
    id: "mr-pomato",
    name: "Mr_pomato",
    title: "主管",
    role: "站点主管",
    description:
      "人类外形，可能是亚伯拉罕信仰体系中某个多功能实体的化身，与Chul的关系很好，有迹象表示其与O5-CN议会有直接联系，可能是全知者或O5-CN之一。",
    appearance: "人类外形",
    abilities: ["未知能力", "与O5-CN议会直接联系"],
    relationships: "与Chul关系密切",
    status: "active",
  },
  {
    id: "chul-bacteria",
    name: "Chul Bacteria",
    title: "副主管",
    role: "ASC副主管/意识体",
    description:
      "智能意识体，寄生于ASC的中央生物态超级计算机中，其原本是一名人类，但身体因为某次事件非正常死亡，结合了超级计算机后拥有了使其全息投影形象全站覆盖的能力，对ASC整体运转起着关键作用。",
    appearance: "全息投影形象",
    abilities: [
      "全息投影全站覆盖",
      "意识网络连接",
      "设备入侵",
      "分布式计算",
    ],
    relationships: "与Mr_pomato关系密切",
    status: "deceased",
  },
  {
    id: "wangsi",
    name: "妄司",
    title: "机动特遣队指挥官",
    role: "MTF指挥官",
    description:
      "本体为北极银狐。但大部分时间中以人类女性的外形出现。精通奇术以及战术指挥，与SCP-953有某种联系，富有创造力，其奇术专业知识和管理能力的高效使它成为了全站最可靠的成员。",
    appearance: "人类女性外形（本体为北极银狐）",
    abilities: ["奇术精通", "战术指挥", "高效管理"],
    relationships: "与SCP-953有某种联系",
    status: "active",
  },
  {
    id: "ltay",
    name: "特工ltay",
    title: "特工",
    role: "极端高危异常抑制与消洗命令部指挥人员",
    description:
      "机械改造人，全站最富有责任感的特工，曾一度是站点指挥所成员，后来因为个人原因退出管理层，目前是极端高危异常抑制与消洗命令部的指挥人员之一，曾参与核心中子星SCP-CN-6514的捕获行动。",
    appearance: "机械改造人",
    abilities: ["高度责任感", "异常抑制专长", "中子星捕获经验"],
    relationships: "曾参与SCP-CN-6514捕获行动",
    status: "active",
  },
  {
    id: "dr-ein",
    name: "Dr. Ein",
    title: "研究员",
    role: "ASC超形上学部创始人/叙事跳跃器调试员",
    description:
      "本体是一只黑猫，叙事学方面的专家，ASC超形上学部的创始人之一，可能曾导致十分严重的事故，现在负责ASC最先进的叙事跳跃器调试工作，可能是逆超形上学部负责人。",
    appearance: "黑猫",
    abilities: ["叙事学专家", "叙事跳跃器调试", "超形上学研究"],
    relationships: "ASC超形上学部创始人之一",
    status: "active",
  },
  {
    id: "seven-and-three-ninths",
    name: "七又九分之三",
    title: "职务未定/作家",
    role: "作家",
    description:
      "外形为人类少女，因被卷入某次收容事件获得了可通过写作手段（非必须）控制一种有较强适应、进化能力，以及极强繁育能力的昆虫外形生物，在宇宙中拥有较强的机动性，曾多次提出借用Chul Bacteria的主机打游戏，无一例外，全部否决。",
    appearance: "人类少女",
    abilities: ["写作控制昆虫生物", "宇宙高机动性"],
    relationships: "多次请求借用CB主机打游戏被拒",
    status: "active",
  },
];
