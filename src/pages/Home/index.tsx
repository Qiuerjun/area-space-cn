import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  Users,
  Server,
  Zap,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { siteInfo, siteHistory } from "../../data/siteData";

const stats = [
  {
    icon: Users,
    label: "活跃人员",
    value: "1,247",
    change: "+12",
    color: "cyan",
  },
  {
    icon: Shield,
    label: "收容项目",
    value: "3,891",
    change: "+5",
    color: "green",
  },
  {
    icon: Server,
    label: "系统负载",
    value: "67%",
    change: "-3%",
    color: "yellow",
  },
  {
    icon: Activity,
    label: "任务执行",
    value: "156",
    change: "+23",
    color: "purple",
  },
];

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

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-6 md:mb-8 bg-gradient-to-r from-[#0a0a1a] to-[#0d1525] border border-cyan-500/20 rounded-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="relative z-10 p-6 md:p-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-mono text-cyan-400 mb-3 md:mb-4 tracking-wider">
              {siteInfo.name}
            </h1>
            <p className="text-base md:text-xl text-gray-300 font-mono mb-2">
              {siteInfo.fullName}
            </p>
            <p className="text-cyan-300/60 font-mono text-sm md:text-lg italic">
              "{siteInfo.motto}"
            </p>
          </motion.div>

          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-xs md:text-sm font-mono">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-400">状态：{siteInfo.status}</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-mono">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
              <span className="text-gray-400">速度：{siteInfo.speed}</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-mono">
              <span className="text-gray-400">
                位置：{siteInfo.location}
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(0, 212, 255, 0.5)" }}
            className="bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6 transition-all cursor-default"
          >
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
              </div>
              <span
                className={`text-xs md:text-sm font-mono ${
                  stat.change.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm font-mono mb-1">{stat.label}</p>
            <p className="text-2xl md:text-3xl font-mono text-white">{stat.value}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Site Description */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6"
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-cyan-500/20">
            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            <h2 className="text-base md:text-lg font-mono text-cyan-400">站点概述</h2>
          </div>
          <p className="text-gray-300 font-mono text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
            {siteInfo.description}
          </p>
          <div className="bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4">
            <p className="text-gray-500 font-mono text-xs italic">
              "意识在宇宙中就像鱼在水中一样。我是说，淹死的都是会水的"
            </p>
            <p className="text-gray-600 font-mono text-xs mt-2 text-right">
              —— Area-Space-CN副主管 丘尔·巴克特里亚
            </p>
          </div>
        </motion.section>

        {/* Recent Updates */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6"
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-cyan-500/20">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
            <h2 className="text-base md:text-lg font-mono text-cyan-400">最新动态</h2>
          </div>
          <div className="space-y-3 md:space-y-4">
            {siteHistory.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a0f] border border-cyan-500/10 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 md:w-16 text-center">
                  <span className="text-cyan-400 font-mono text-xs md:text-sm font-bold">
                    {item.date}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-mono text-xs md:text-sm mb-1">
                    {item.event}
                  </h3>
                  <p className="text-gray-500 font-mono text-xs mb-1">
                    By {item.author}
                  </p>
                  <p className="text-gray-400 font-mono text-xs">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Bottom Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 md:mt-8 bg-[#0d0d15] border border-cyan-500/20 p-3 md:p-4 flex flex-wrap items-center justify-between gap-2"
      >
        <div className="flex flex-wrap items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-400 font-mono text-xs">
              系统在线
            </span>
          </div>
          <span className="text-gray-600 font-mono text-xs">
            CB意识体状态：活跃
          </span>
          <span className="text-gray-600 font-mono text-xs">
            防火墙：正常
          </span>
        </div>
        <span className="text-gray-600 font-mono text-xs">
          安全等级：机密
        </span>
      </motion.div>
    </div>
  );
}
