import { motion } from "framer-motion";
import {
  Archive,
  Building,
  Users,
  Shield,
  Cpu,
  Box,
  Wrench,
  Hammer,
  Rocket,
  Sun,
  Monitor,
  Truck,
  Heart,
  FlaskConical,
  Compass,
  Atom,
  HelpCircle,
} from "lucide-react";
import { siteInfo, departments, techSpecs } from "../../data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Building,
  Shield,
  Cpu,
  Box,
  Wrench,
  Hammer,
  Rocket,
  Sun,
  Monitor,
  Truck,
  Heart,
  FlaskConical,
  Compass,
  Atom,
  HelpCircle,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function ArchivePage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 md:mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <Archive className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
          <h1 className="text-2xl md:text-3xl font-mono text-cyan-400">站点档案</h1>
        </div>
        <p className="text-gray-500 font-mono text-xs md:text-sm">
          AREA-SPACE-CN 站点核心档案数据库
        </p>
      </motion.div>

      {/* Motto Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 md:mb-8 bg-gradient-to-r from-[#0a0a1a] to-[#0d1525] border border-cyan-500/30 p-6 md:p-12 text-center"
      >
        <p className="text-2xl md:text-4xl font-mono text-cyan-400 mb-3 md:mb-4 tracking-wider">
          {siteInfo.motto}
        </p>
        <p className="text-gray-500 font-mono text-xs md:text-sm">
          —— Area-Space-CN 站点格言
        </p>
      </motion.section>

      {/* Site Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6 md:mb-8 bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6"
      >
        <h2 className="text-base md:text-lg font-mono text-cyan-400 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-cyan-500/20">
          站点简介
        </h2>
        <p className="text-gray-300 font-mono text-xs md:text-sm leading-relaxed">
          {siteInfo.description}
        </p>
        <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4">
            <p className="text-gray-500 font-mono text-xs mb-1">站点全称</p>
            <p className="text-white font-mono text-xs md:text-sm">{siteInfo.fullName}</p>
          </div>
          <div className="bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4">
            <p className="text-gray-500 font-mono text-xs mb-1">巡航区域</p>
            <p className="text-white font-mono text-xs md:text-sm">{siteInfo.location}</p>
          </div>
          <div className="bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4">
            <p className="text-gray-500 font-mono text-xs mb-1">运行状态</p>
            <p className="text-green-400 font-mono text-xs md:text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {siteInfo.status}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Tech Specs */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-6 md:mb-8 bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6"
      >
        <h2 className="text-base md:text-lg font-mono text-cyan-400 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-cyan-500/20">
          核心技术规格
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {Object.values(techSpecs).map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-cyan-400 font-mono text-xs md:text-sm mb-2">
                {tech.name}
              </h3>
              <p className="text-gray-500 font-mono text-xs mb-2">
                来源：{tech.origin}
              </p>
              <p className="text-gray-400 font-mono text-xs">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Departments */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6"
      >
        <h2 className="text-base md:text-lg font-mono text-cyan-400 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-cyan-500/20">
          站点部门列表
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3"
        >
          {departments.map((dept, index) => {
            const IconComponent = iconMap[dept.icon] || HelpCircle;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(0, 212, 255, 0.4)",
                }}
                className="flex items-center gap-3 bg-[#0a0a0f] border border-cyan-500/10 p-3 md:p-4 transition-all cursor-default"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                </div>
                <span className="text-gray-300 font-mono text-xs md:text-sm">
                  {dept.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>
    </div>
  );
}
