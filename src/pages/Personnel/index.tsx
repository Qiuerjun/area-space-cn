import { motion } from "framer-motion";
import {
  Users,
  User,
  Shield,
  Brain,
  Cat,
  Bug,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { personnel, type Personnel } from "../../data/personnelData";

const avatarIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "mr-pomato": User,
  "chul-bacteria": Brain,
  "wangsi": Shield,
  "ltay": Shield,
  "dr-ein": Cat,
  "seven-and-three-ninths": Bug,
};

const statusColors: Record<string, string> = {
  active: "bg-green-500/20 text-green-400 border-green-500/30",
  deceased: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  unknown: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};

const statusLabels: Record<string, string> = {
  active: "活跃",
  deceased: "意识存续",
  unknown: "未知",
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

function PersonnelCard({ person }: { person: Personnel }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const AvatarIcon = avatarIcons[person.id] || User;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ borderColor: "rgba(0, 212, 255, 0.4)" }}
      className="bg-[#0d0d15] border border-cyan-500/20 transition-all"
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <AvatarIcon className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-mono text-white mb-1">
                {person.name}
              </h3>
              <p className="text-cyan-400 font-mono text-sm">{person.title}</p>
              <p className="text-gray-500 font-mono text-xs mt-1">
                {person.role}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 text-xs font-mono border ${
                statusColors[person.status]
              }`}
            >
              {statusLabels[person.status]}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-6 pb-6 border-t border-cyan-500/20"
        >
          <div className="pt-4 space-y-4">
            <div>
              <h4 className="text-gray-400 font-mono text-xs uppercase tracking-wider mb-2">
                档案描述
              </h4>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                {person.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-gray-400 font-mono text-xs uppercase tracking-wider mb-2">
                  外形特征
                </h4>
                <p className="text-gray-300 font-mono text-sm">
                  {person.appearance}
                </p>
              </div>
              <div>
                <h4 className="text-gray-400 font-mono text-xs uppercase tracking-wider mb-2">
                  关联信息
                </h4>
                <p className="text-gray-300 font-mono text-sm">
                  {person.relationships}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-gray-400 font-mono text-xs uppercase tracking-wider mb-2">
                能力档案
              </h4>
              <div className="flex flex-wrap gap-2">
                {person.abilities.map((ability, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs"
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function PersonnelPage() {
  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-8 h-8 text-cyan-400" />
          <h1 className="text-3xl font-mono text-cyan-400">人事档案</h1>
        </div>
        <p className="text-gray-500 font-mono text-sm">
          AREA-SPACE-CN 核心人员档案数据库
        </p>
      </motion.div>

      {/* Warning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 bg-yellow-500/10 border border-yellow-500/30 p-4 flex items-center gap-3"
      >
        <Shield className="w-5 h-5 text-yellow-400 flex-shrink-0" />
        <p className="text-yellow-400 font-mono text-sm">
          ⚠ 以下档案信息仅限授权人员查阅 - 安全等级：机密
        </p>
      </motion.div>

      {/* Personnel List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {personnel.map((person) => (
          <PersonnelCard key={person.id} person={person} />
        ))}
      </motion.div>
    </div>
  );
}
