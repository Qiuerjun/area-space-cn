 import { motion } from "framer-motion";
import {
  User,
  Shield,
  Brain,
  Activity,
  Server,
  Clock,
  Award,
  Cpu,
} from "lucide-react";
import { currentUser } from "../../data/userData";

export default function ProfilePage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 md:mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <User className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
          <h1 className="text-2xl md:text-3xl font-mono text-cyan-400">用户档案</h1>
        </div>
        <p className="text-gray-500 font-mono text-xs md:text-sm">
          当前登入用户身份信息
        </p>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-[#0a0a1a] to-[#0d1525] border border-cyan-500/30 p-4 md:p-8 mb-6 md:mb-8"
      >
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-cyan-500/10 border-2 border-cyan-500/50 flex items-center justify-center">
            <Brain className="w-8 h-8 md:w-12 md:h-12 text-cyan-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-mono text-white mb-2">
              {currentUser.name}
            </h2>
            <p className="text-cyan-400 font-mono text-base md:text-lg mb-1">
              {currentUser.title}
            </p>
            <p className="text-gray-500 font-mono text-xs md:text-sm mb-3 md:mb-4">
              {currentUser.role}
            </p>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <span className="px-2 md:px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-mono flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                意识体在线
              </span>
              <span className="px-2 md:px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs font-mono">
                {currentUser.clearanceLevel}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
        {/* Basic Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6"
        >
          <div className="flex items-center gap-3 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-cyan-500/20">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
            <h3 className="text-base md:text-lg font-mono text-cyan-400">基本信息</h3>
          </div>
          <div className="space-y-3 md:space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-cyan-500/10">
              <span className="text-gray-500 font-mono text-xs md:text-sm">用户标识</span>
              <span className="text-white font-mono text-xs md:text-sm">
                {currentUser.username}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-cyan-500/10">
              <span className="text-gray-500 font-mono text-xs md:text-sm">所属部门</span>
              <span className="text-white font-mono text-xs md:text-sm">
                {currentUser.department}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-cyan-500/10">
              <span className="text-gray-500 font-mono text-xs md:text-sm">加入时间</span>
              <span className="text-white font-mono text-xs md:text-sm">
                {currentUser.joinDate}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-500 font-mono text-xs md:text-sm">上次登录</span>
              <span className="text-white font-mono text-xs md:text-sm">
                {new Date(currentUser.lastLogin).toLocaleString("zh-CN")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6"
        >
          <div className="flex items-center gap-3 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-cyan-500/20">
            <Activity className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
            <h3 className="text-base md:text-lg font-mono text-cyan-400">运行统计</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4 text-center">
              <p className="text-gray-500 font-mono text-[10px] md:text-xs mb-1">完成任务</p>
              <p className="text-xl md:text-2xl font-mono text-cyan-400">
                {currentUser.stats.tasksCompleted.toLocaleString()}
              </p>
            </div>
            <div className="bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4 text-center">
              <p className="text-gray-500 font-mono text-[10px] md:text-xs mb-1">监控系统</p>
              <p className="text-xl md:text-2xl font-mono text-cyan-400">
                {currentUser.stats.systemsMonitored.toLocaleString()}
              </p>
            </div>
            <div className="bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4 text-center">
              <p className="text-gray-500 font-mono text-[10px] md:text-xs mb-1">运行时间</p>
              <p className="text-xl md:text-2xl font-mono text-green-400">
                {currentUser.stats.uptime}
              </p>
            </div>
            <div className="bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4 text-center">
              <p className="text-gray-500 font-mono text-[10px] md:text-xs mb-1">网络节点</p>
              <p className="text-xl md:text-2xl font-mono text-purple-400">
                {currentUser.stats.networkNodes}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6 mb-6 md:mb-8"
      >
        <div className="flex items-center gap-3 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-cyan-500/20">
          <Cpu className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
          <h3 className="text-base md:text-lg font-mono text-cyan-400">档案描述</h3>
        </div>
        <p className="text-gray-300 font-mono text-xs md:text-sm leading-relaxed">
          {currentUser.bio}
        </p>
      </motion.div>

      {/* Abilities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6"
      >
        <div className="flex items-center gap-3 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-cyan-500/20">
          <Award className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
          <h3 className="text-base md:text-lg font-mono text-cyan-400">能力档案</h3>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {currentUser.abilities.map((ability, index) => (
            <span
              key={index}
              className="px-3 md:px-4 py-1 md:py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs md:text-sm"
            >
              {ability}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
