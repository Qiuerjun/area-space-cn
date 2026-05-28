import { motion } from "framer-motion";
import {
  Shield,
  Swords,
  Wrench,
  Clock,
  Bug,
  Brain,
  FileQuestion,
  Shovel,
} from "lucide-react";
import { mtfUnits } from "../../data/mtfData";

const mtfIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "mtf-sun-01": Clock,
  "mtf-sun-02": Bug,
  "mtf-sun-14": Brain,
  "mtf-sun-17": FileQuestion,
  "etf-sun-04": Shovel,
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function MTFPage() {
  const combatUnits = mtfUnits.filter((u) => u.type === "combat");
  const engineeringUnits = mtfUnits.filter((u) => u.type === "engineering");

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 md:mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <Shield className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
          <h1 className="text-2xl md:text-3xl font-mono text-cyan-400">机动特遣队</h1>
        </div>
        <p className="text-gray-500 font-mono text-xs md:text-sm">
          AREA-SPACE-CN 机动特遣队编制档案
        </p>
      </motion.div>

      {/* Combat MTF Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 md:mb-8"
      >
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <Swords className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
          <h2 className="text-lg md:text-xl font-mono text-red-400">作战特遣队</h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3 md:space-y-4"
        >
          {combatUnits.map((unit) => {
            const UnitIcon = mtfIcons[unit.id] || Shield;
            return (
              <motion.div
                key={unit.id}
                variants={itemVariants}
                whileHover={{ borderColor: "rgba(0, 212, 255, 0.4)" }}
                className="bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6 transition-all"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                    <UnitIcon className="w-6 h-6 md:w-8 md:h-8 text-red-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                      <span className="text-red-400 font-mono text-base md:text-lg font-bold">
                        {unit.code}
                      </span>
                      <span className="text-white font-mono text-base md:text-lg break-words">
                        "{unit.name}"
                      </span>
                      <span className="ml-auto px-2 md:px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 text-[10px] md:text-xs font-mono">
                        活跃
                      </span>
                    </div>
                    <p className="text-gray-300 font-mono text-xs md:text-sm mb-2 md:mb-3">
                      {unit.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-gray-500 font-mono text-[10px] md:text-xs">
                        专长：
                      </span>
                      <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] md:text-xs">
                        {unit.specialty}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Engineering Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <Wrench className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
          <h2 className="text-lg md:text-xl font-mono text-yellow-400">工程特遣队</h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3 md:space-y-4"
        >
          {engineeringUnits.map((unit) => {
            const UnitIcon = mtfIcons[unit.id] || Wrench;
            return (
              <motion.div
                key={unit.id}
                variants={itemVariants}
                whileHover={{ borderColor: "rgba(0, 212, 255, 0.4)" }}
                className="bg-[#0d0d15] border border-cyan-500/20 p-4 md:p-6 transition-all"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                    <UnitIcon className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                      <span className="text-yellow-400 font-mono text-base md:text-lg font-bold">
                        {unit.code}
                      </span>
                      <span className="text-white font-mono text-base md:text-lg break-words">
                        "{unit.name}"
                      </span>
                      <span className="ml-auto px-2 md:px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 text-[10px] md:text-xs font-mono">
                        活跃
                      </span>
                    </div>
                    <p className="text-gray-300 font-mono text-xs md:text-sm mb-2 md:mb-3">
                      {unit.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-gray-500 font-mono text-[10px] md:text-xs">
                        专长：
                      </span>
                      <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] md:text-xs">
                        {unit.specialty}
                      </span>
                    </div>
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
