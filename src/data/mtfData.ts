export interface MTF {
  id: string;
  code: string;
  name: string;
  type: "combat" | "engineering";
  description: string;
  specialty: string;
  status: "active" | "inactive";
}

export const mtfUnits: MTF[] = [
  {
    id: "mtf-sun-01",
    code: "MTF-☉-01",
    name: "因时",
    type: "combat",
    description: "擅长处理空间、时间有关的异常",
    specialty: "时空异常处理",
    status: "active",
  },
  {
    id: "mtf-sun-02",
    code: "MTF-☉-02",
    name: "疫",
    type: "combat",
    description:
      "纳米生物组成的特遣队，擅长利用微观手段渗透、消灭那些用常规物理手段难以应对的敌意生命",
    specialty: "纳米生物渗透与消灭",
    status: "active",
  },
  {
    id: "mtf-sun-14",
    code: "MTF-☉-14",
    name: "CB近卫军",
    type: "combat",
    description:
      "副主管Chul的直属特遣队，主要由连接到CB主意识网络的人工智能作战体组成",
    specialty: "CB直属作战部队",
    status: "active",
  },
  {
    id: "mtf-sun-17",
    code: "MTF-☉-17",
    name: "不存在的特遣队",
    type: "combat",
    description: "擅长处理逻辑异常",
    specialty: "逻辑异常处理",
    status: "active",
  },
  {
    id: "etf-sun-04",
    code: "ETF-☉-04",
    name: "星铲",
    type: "engineering",
    description: "工程特遣队",
    specialty: "工程建设与维护",
    status: "active",
  },
];
