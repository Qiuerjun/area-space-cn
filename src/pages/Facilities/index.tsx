import { motion } from "framer-motion";
import {
  Server,
  Cpu,
  Shield,
  Zap,
  Wrench,
  RefreshCw,
  HardDrive,
} from "lucide-react";

const serverCapabilities = [
  {
    icon: Wrench,
    name: "自我修复能力",
    description:
      "每个节点都配备了一套先进的纳米机器人群，能够进行硬件故障诊断和修复。这些纳米机器人可以在硬件出现问题时进行即时修复，确保服务器群的持续运行。",
    color: "cyan",
  },
  {
    icon: RefreshCw,
    name: "自我升级系统",
    description:
      "为了适应不断变化的软件环境，节点内部装有一套自我升级系统。这套系统能够自动下载和安装最新的软件更新和补丁，确保系统的安全性和性能。",
    color: "green",
  },
  {
    icon: Shield,
    name: "防御系统",
    description:
      "为了防止外部攻击，每个节点都配备了一套强大的防御系统，包括物理防御（如抗辐射和抗冲击设计）和网络防御（如防火墙和入侵检测系统）。",
    color: "red",
  },
];

const serverStats = [
  { label: "计算节点", value: "∞", icon: Cpu },
  { label: "存储容量", value: "∞ PB", icon: HardDrive },
  { label: "处理能力", value: "∞ TFLOPS", icon: Zap },
  { label: "在线状态", value: "100%", icon: Server },
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-400",
  },
  red: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    text: "text-red-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-400",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 md:mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <Server className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
          <h1 className="text-2xl md:text-3xl font-mono text-cyan-400">站点设施</h1>
        </div>
        <p className="text-gray-500 font-mono text-xs md:text-sm">
          AREA-SPACE-CN 量子计算机服务器群技术规格
        </p>
      </motion.div>

      {/* Server Stats */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8"
      >
        {serverStats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(0, 212, 255, 0.5)" }}
            className="bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6 text-center transition-all"
          >
            <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 mx-auto mb-2 md:mb-3" />
            <p className="text-gray-400 font-mono text-xs md:text-sm mb-1 md:mb-2">{stat.label}</p>
            <p className="text-2xl md:text-3xl font-mono text-white">{stat.value}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* CB Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6 md:mb-8 bg-gradient-to-r from-[#0a0a1a] to-[#0d1525] border border-cyan-500/30 p-4 md:p-8"
      >
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <Cpu className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
          <h2 className="text-lg md:text-xl font-mono text-cyan-400">
            Chul Bacteria 意识体系统
          </h2>
        </div>
        <div className="space-y-3 md:space-y-4 text-gray-300 font-mono text-xs md:text-sm leading-relaxed">
          <p>
            Chul Bacteria（以下简称CB）是一位已逝去的前主管，但是他的意识已经被保存在了Area-Space-CN中央服务器中。
          </p>
          <p>
            每经过一个行星都会在上面放一个量子计算机服务器群以为Chul提供分布式计算。
          </p>
        </div>
      </motion.section>

      {/* CB Capabilities */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6 md:mb-8 bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6"
      >
        <h2 className="text-base md:text-lg font-mono text-cyan-400 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-cyan-500/20">
          CB意识体能力
        </h2>
        <div className="space-y-3 md:space-y-4">
          <div className="bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4">
            <h3 className="text-cyan-400 font-mono text-xs md:text-sm mb-2">网络行动</h3>
            <p className="text-gray-400 font-mono text-[11px] md:text-xs leading-relaxed">
              在Area-Space-CN的内部局域网中，CB可通过计算机程序为介质自由行动，站点所有监控CB均可查看。对于CB，只要为联网设备，CB均可侵入，同时行为需要Area-Space-CN终端意识控制着。
            </p>
          </div>
          <div className="bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4">
            <h3 className="text-cyan-400 font-mono text-xs md:text-sm mb-2">
              机器载体
            </h3>
            <p className="text-gray-400 font-mono text-[11px] md:text-xs leading-relaxed">
              CB不满足于仅在虚拟的网络中行动，站点有众多可行动机器，CB可将意识寄托于机器中（主意识仍在中央服务器中），并随意操控，以更加方便地参与站点事宜，与员工友好交流。
            </p>
          </div>
          <div className="bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4">
            <h3 className="text-cyan-400 font-mono text-xs md:text-sm mb-2">
              离线入侵
            </h3>
            <p className="text-gray-400 font-mono text-[11px] md:text-xs leading-relaxed">
              对于因为防火墙而无法进入的终端，需要将CB程序保存在U盘中并插入终端中，此方法可入侵99%的设备。成功侵入的终端CB程序将与Area-Space-CN中央服务器建立连接。
            </p>
          </div>
        </div>
      </motion.section>

      {/* Server Capabilities */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6"
      >
        <h2 className="text-base md:text-lg font-mono text-cyan-400 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-cyan-500/20">
          服务器群核心能力
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3 md:space-y-4"
        >
          {serverCapabilities.map((cap, index) => {
            const colors = colorClasses[cap.color];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ borderColor: "rgba(0, 212, 255, 0.4)" }}
                className={`${colors.bg} border ${colors.border} p-4 md:p-6 transition-all`}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}
                  >
                    <cap.icon className={`w-5 h-5 md:w-6 md:h-6 ${colors.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`${colors.text} font-mono text-base md:text-lg mb-2`}>
                      {cap.name}
                    </h3>
                    <p className="text-gray-300 font-mono text-xs md:text-sm leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>
    </div>
  );
}
