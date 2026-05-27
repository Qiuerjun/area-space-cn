export interface PresetQuestion {
  id: string;
  question: string;
  answer: string;
  category: "system" | "query" | "control";
  thinking: string;
  tools: string[];
}

export const presetQuestions: PresetQuestion[] = [
  {
    id: "q1",
    question: "当前站点状态如何？",
    answer: `[ASC-CB idex-2077 系统诊断报告]

正在扫描站点状态...

■ 主系统状态：在线
■ CB意识体状态：活跃
■ 护盾强度：95.2%
■ 主能源输出：87.4%
■ 曲速引擎：待机模式
■ 空间跳跃引擎：就绪
■ 核心中子星：稳定输出中

■ 活跃人员：1,247人
■ 收容项目：3,891个（安全状态）
■ 执行任务：156个进行中

系统评估：所有核心系统运行正常，当前巡航于武仙-北冕座长城区域，未检测到异常威胁。

建议：维持当前巡航状态，定期检查量子服务器群负载。`,
    category: "system",
    thinking: `分析用户查询："当前站点状态如何？"
→ 这是一个系统状态综合查询请求
→ 需要调用多个监控模块获取实时数据
→ 权限检查：Chul Bacteria（Level 5）→ 通过
→ 确定需要获取的数据范围：能源、护盾、引擎、人员、收容项目`,
    tools: [
      "system_monitor.get_status()",
      "shield.get_strength()",
      "power.get_output()",
      "engine.get_warp_status()",
      "engine.get_jump_status()",
      "personnel.get_active_count()",
      "containment.get_count()",
      "task.get_active_count()",
    ],
  },
  {
    id: "q2",
    question: "查看机动特遣队部署情况",
    answer: `[ASC-CB idex-2077 特遣队状态查询]

正在检索MTF部署数据...

■ MTF-☉-01 "因时"
  状态：部署中
  当前任务：武仙座K-7区域时空异常调查
  人员配置：12名特工
  预计完成：72小时

■ MTF-☉-02 "疫"
  状态：待命
  纳米生物集群：就绪
  备注：随时可执行微观渗透任务

■ MTF-☉-14 "CB近卫军"
  状态：活跃
  作战单元：1,024个AI作战体
  意识网络延迟：<0.001ms
  备注：直属副主管Chul指挥

■ MTF-☉-17 "不存在的特遣队"
  状态：执行中
  当前任务：逻辑异常SCP-CN-XXXX收容
  详情：机密

■ ETF-☉-04 "星铲"
  状态：施工中
  当前项目：3号行星量子计算节点建设
  进度：78%

所有特遣队运行正常，无异常情况报告。`,
    category: "query",
    thinking: `分析用户查询："查看机动特遣队部署情况"
→ 这是一个特遣队部署状态查询请求
→ 需要访问MTF指挥调度数据库
→ 权限检查：Chul Bacteria（副主管/Level 5）→ 通过
→ 确定查询范围：全部MTF和ETF单位的当前状态、位置、任务`,
    tools: [
      "mtf.get_deployment_status(MTF-☉-01)",
      "mtf.get_deployment_status(MTF-☉-02)",
      "mtf.get_deployment_status(MTF-☉-14)",
      "mtf.get_deployment_status(MTF-☉-17)",
      "etf.get_deployment_status(ETF-☉-04)",
      "command.get_active_missions()",
    ],
  },
  {
    id: "q3",
    question: "启动紧急防御协议",
    answer: `[ASC-CB idex-2077 安全协议启动]

正在验证操作权限...
■ 用户身份：Chul Bacteria（副主管）
■ 权限等级：Level 5 ✓
■ 验证通过

正在启动紧急防御协议...

■ 阶段1：护盾强化
  → 护盾输出提升至100%
  → 多层护盾激活
  → 状态：完成 ✓

■ 阶段2：武器系统预热
  → 主炮充能：就绪
  → 防御阵列：激活
  → 状态：完成 ✓

■ 阶段3：人员警报
  → 全站警报已触发
  → 非战斗人员转移至安全区
  → 状态：完成 ✓

■ 阶段4：CB近卫军部署
  → 1,024个AI作战体就位
  → 意识网络同步完成
  → 状态：完成 ✓

⚠ 紧急防御协议已完全启动
所有系统处于战斗准备状态。
如需取消，请执行"取消紧急防御协议"指令。`,
    category: "control",
    thinking: `分析用户指令："启动紧急防御协议"
→ ⚠️ 这是一个高优先级安全控制指令
→ 需要执行紧急防御协议（Emergency Defense Protocol）
→ 权限检查：Chul Bacteria（副主管/Level 5）→ 通过
→ 警告：此操作将触发全站警报并改变站点运行状态
→ 确认执行...`,
    tools: [
      "auth.verify_user(Chul_Bacteria)",
      "security.get_clearance_level()",
      "defense.init_emergency_protocol()",
      "shield.boost_to_maximum()",
      "weapons.arm_defense_systems()",
      "alert.trigger_station_wide_alarm()",
      "personnel.evacuate_non_combatants()",
      "mtf.deploy(CB_Guard_☉-14)",
      "cb_network.sync_combat_units()",
    ],
  },
  {
    id: "q4",
    question: "查询核心中子星状态",
    answer: `[ASC-CB idex-2077 核心能源查询]

正在连接SCP-CN-6514监控系统...

■ 核心中子星 SCP-CN-6514
  编号：SCP-CN-6514
  类型：恒星级能源核心
  状态：稳定运行

■ 物理参数
  质量：1.4倍太阳质量
  自转周期：11.2ms
  表面温度：6,200,000K
  磁场强度：10^8 T

■ 能源输出
  当前输出：2.7 × 10^26 W
  效率：99.97%
  能源储备：98.4%

■ 收容状态
  磁约束装置：正常
  引力屏蔽：正常
  辐射防护：正常

■ 历史记录
  捕获时间：深空纪元初期
  捕获执行：特工ltay参与
  异常事件：无

评估：核心中子星运行稳定，能源输出充足，可支持站点全功率运行约10^9年。

建议：继续监控磁场波动，定期检查磁约束装置。`,
    category: "query",
    thinking: `分析用户查询："查询核心中子星状态"
→ 这是一个SCP-CN-6514收容项目状态查询
→ 需要访问核心能源监控系统和收容数据库
→ 权限检查：Chul Bacteria（Level 5）→ 通过
→ 确定查询范围：物理参数、能源输出、收容状态、历史记录`,
    tools: [
      "containment.access_scp(SCP-CN-6514)",
      "energy.get_neutron_star_params()",
      "energy.get_output_reading()",
      "containment.check_magnetic_confinement()",
      "containment.check_gravity_shield()",
      "containment.check_radiation_protection()",
      "history.get_capture_record(SCP-CN-6514)",
    ],
  },
  {
    id: "q5",
    question: "执行空间跳跃",
    answer: `[ASC-CB idex-2077 空间跳跃序列]

正在验证跳跃条件...

■ 跳跃前检查
  → 空间跳跃引擎：就绪 ✓
  → 能量储备：充足 ✓
  → 坐标计算：完成 ✓
  → 航路安全：已扫描 ✓
  → 人员安全：确认 ✓

■ 跳跃目标
  坐标：武仙座 NGC 6205 区域
  距离：25,000光年
  预计耗时：0.003秒

■ 启动跳跃序列
  3... 2... 1...

  ████████████████████ 100%

⚠ 空间跳跃完成！

■ 跳跃后状态
  → 引擎温度：正常
  → 船体完整性：100%
  → 人员状态：全员正常
  → 新位置：NGC 6205 星团边缘

已成功抵达目标区域。曲速引擎待机，准备进入常规巡航模式。`,
    category: "control",
    thinking: `分析用户指令："执行空间跳跃"
→ ⚠️ 这是一个高风险航行控制指令
→ 需要启动空间跳跃引擎（"跃迁者"引擎）
→ 权限检查：Chul Bacteria（副主管/Level 5）→ 通过
→ 警告：空间跳跃将改变站点位置，需确认所有安全条件
→ 目标坐标：武仙座 NGC 6205 区域
→ 确认执行...`,
    tools: [
      "auth.verify_user(Chul_Bacteria)",
      "navigation.get_current_position()",
      "engine.check_jump_engine_status()",
      "energy.verify_power_reserves()",
      "navigation.calculate_jump_trajectory()",
      "navigation.scan_route_safety()",
      "personnel.confirm_all_secure()",
      "engine.initiate_jump_sequence()",
      "navigation.verify_post_jump_position()",
    ],
  },
  {
    id: "q6",
    question: "查看量子服务器群状态",
    answer: `[ASC-CB idex-2077 服务器群诊断]

正在扫描分布式计算网络...

■ 量子服务器群总览
  节点总数：∞（跨行星分布）
  活跃节点：1,247
  计算能力：∞ TFLOPS
  存储容量：∞ PB

■ 各行星节点状态

  🌍 地球节点
     状态：正常
     负载：45%
     延迟：0.001ms

  🔴 火星节点
     状态：正常
     负载：62%
     延迟：0.012ms

  🪐 木星节点
     状态：正常
     负载：78%
     延迟：0.045ms

  💫 土星节点
     状态：建设中
     进度：89%
     预计完成：30天

■ CB意识体分布式状态
  主意识位置：ASC中央服务器
  分布式副本：1,247个
  同步状态：完美同步
  响应延迟：<0.001ms

■ 自我维护系统
  纳米机器人：活跃
  上次自我修复：2小时前
  待处理修复：0项

所有服务器节点运行正常，分布式计算网络稳定。`,
    category: "system",
    thinking: `分析用户查询："查看量子服务器群状态"
→ 这是一个分布式计算基础设施状态查询
→ 需要访问CB意识体网络和量子服务器群监控系统
→ 权限检查：Chul Bacteria（Level 5）→ 通过
→ 确定查询范围：各行星节点状态、CB意识体分布式状态、自我修复系统`,
    tools: [
      "network.get_server_cluster_overview()",
      "network.get_node_status(Earth)",
      "network.get_node_status(Mars)",
      "network.get_node_status(Jupiter)",
      "network.get_node_status(Saturn)",
      "cb_network.get_distributed_status()",
      "maintenance.get_nanobot_status()",
      "maintenance.get_repair_queue()",
    ],
  },
];

export const aiSystemInfo = {
  name: "ASC-CB idex-2077",
  fullName: "Area-Space-CN 中央智能索引系统",
  version: "v2077.4.12",
  status: "online",
  host: "ASC中央生物态超级计算机",
  capabilities: [
    "站点状态监控",
    "系统参数调控",
    "特遣队指挥调度",
    "数据分析与预测",
    "紧急协议执行",
    "空间导航计算",
  ],
};
