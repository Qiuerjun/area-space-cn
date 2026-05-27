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
    <div className="min-h-screen p-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-8 bg-gradient-to-r from-[#0a0a1a] to-[#0d1525] border border-cyan-500/20 rounded-none overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="relative z-10 p-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl font-mono text-cyan-400 mb-4 tracking-wider">
              {siteInfo.name}
            </h1>
            <p className="text-xl text-gray-300 font-mono mb-2">
              {siteInfo.fullName}
            </p>
            <p className="text-cyan-300/60 font-mono text-lg italic">
              "{siteInfo.motto}"
            </p>
          </motion.div>

          <div className="mt-8 flex justify-center gap-8">
            <div className="flex items-center gap-2 text-sm font-mono">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-400">状态：{siteInfo.status}</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-mono">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-400">速度：{siteInfo.speed}</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-mono">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(0, 212, 255, 0.5)" }}
            className="bg-[#0d0d15] border border-cyan-500/20 p-6 transition-all cursor-default"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <span
                className={`text-sm font-mono ${
                  stat.change.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-gray-400 text-sm font-mono mb-1">{stat.label}</p>
            <p className="text-3xl font-mono text-white">{stat.value}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Site Description */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#0d0d15] border border-cyan-500/20 p-6"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cyan-500/20">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <h2 className="text-lg font-mono text-cyan-400">站点概述</h2>
          </div>
          <p className="text-gray-300 font-mono text-sm leading-relaxed mb-6">
            {siteInfo.description}
          </p>
          <div className="bg-[#0a0a0f] border border-cyan-500/10 p-4">
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
          className="bg-[#0d0d15] border border-cyan-500/20 p-6"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cyan-500/20">
            <Clock className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-mono text-cyan-400">最新动态</h2>
          </div>
          <div className="space-y-4">
            {siteHistory.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex gap-4 p-4 bg-[#0a0a0f] border border-cyan-500/10 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex-shrink-0 w-16 text-center">
                  <span className="text-cyan-400 font-mono text-sm font-bold">
                    {item.date}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-mono text-sm mb-1">
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
        className="mt-8 bg-[#0d0d15] border border-cyan-500/20 p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-6">
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
