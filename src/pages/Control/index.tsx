import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Zap,
  Shield,
  Server,
  Gauge,
  Thermometer,
  Activity,
  Power,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";

interface StationParameter {
  id: string;
  name: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  status: "normal" | "warning" | "critical";
  icon: React.ComponentType<{ className?: string }>;
}

const initialParams: StationParameter[] = [
  {
    id: "power",
    name: "主能源输出",
    value: 87,
    unit: "%",
    min: 0,
    max: 100,
    status: "normal",
    icon: Zap,
  },
  {
    id: "shield",
    name: "护盾强度",
    value: 95,
    unit: "%",
    min: 0,
    max: 100,
    status: "normal",
    icon: Shield,
  },
  {
    id: "warp",
    name: "曲速引擎功率",
    value: 72,
    unit: "%",
    min: 0,
    max: 100,
    status: "normal",
    icon: Gauge,
  },
  {
    id: "temp",
    name: "核心温度",
    value: 4500,
    unit: "K",
    min: 0,
    max: 10000,
    status: "normal",
    icon: Thermometer,
  },
  {
    id: "load",
    name: "系统负载",
    value: 67,
    unit: "%",
    min: 0,
    max: 100,
    status: "normal",
    icon: Activity,
  },
  {
    id: "nodes",
    name: "活跃节点",
    value: 1247,
    unit: "",
    min: 0,
    max: 2000,
    status: "normal",
    icon: Server,
  },
];

export default function ControlPage() {
  const [params, setParams] = useState<StationParameter[]>(initialParams);
  const [isAutoMode, setIsAutoMode] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setParams((prev) =>
        prev.map((p) => {
          const fluctuation = (Math.random() - 0.5) * 5;
          let newValue = p.value + fluctuation;
          if (newValue > p.max) newValue = p.max;
          if (newValue < p.min) newValue = p.min;

          let status: "normal" | "warning" | "critical" = "normal";
          const percent = (newValue / p.max) * 100;
          if (percent > 90 || percent < 10) status = "critical";
          else if (percent > 80 || percent < 20) status = "warning";

          return { ...p, value: Math.round(newValue * 10) / 10, status };
        })
      );
      setLastUpdate(new Date());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleParamChange = (id: string, newValue: number) => {
    setParams((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          let status: "normal" | "warning" | "critical" = "normal";
          const percent = (newValue / p.max) * 100;
          if (percent > 90 || percent < 10) status = "critical";
          else if (percent > 80 || percent < 20) status = "warning";
          return { ...p, value: newValue, status };
        }
        return p;
      })
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "text-red-400 border-red-500/30 bg-red-500/10";
      case "warning":
        return "text-yellow-400 border-yellow-500/30 bg-yellow-500/10";
      default:
        return "text-green-400 border-green-500/30 bg-green-500/10";
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 md:mb-8"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Settings className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
              <h1 className="text-2xl md:text-3xl font-mono text-cyan-400">站点控制</h1>
            </div>
            <p className="text-gray-500 font-mono text-xs md:text-sm">
              AREA-SPACE-CN 站点参数监控与控制系统
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <span className="text-gray-500 font-mono text-[10px] md:text-xs">
              最后更新: {lastUpdate.toLocaleTimeString("zh-CN")}
            </span>
            <button
              onClick={() => setIsAutoMode(!isAutoMode)}
              className={`px-3 md:px-4 py-1.5 md:py-2 font-mono text-xs md:text-sm border transition-all min-h-[44px] ${
                isAutoMode
                  ? "bg-cyan-500/20 border-cyan-500 text-cyan-400"
                  : "bg-gray-500/20 border-gray-500 text-gray-400"
              }`}
            >
              {isAutoMode ? "自动模式" : "手动模式"}
            </button>
          </div>
        </div>
      </motion.div>

      {/* System Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 md:mb-8 bg-[#0d0d15] border border-cyan-500/20 p-3 md:p-4 flex flex-wrap items-center justify-between gap-3"
      >
        <div className="flex flex-wrap items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-400 font-mono text-xs md:text-sm">系统在线</span>
          </div>
          <span className="text-gray-500 font-mono text-[10px] md:text-xs">
            CB意识体状态：活跃
          </span>
          <span className="text-gray-500 font-mono text-[10px] md:text-xs">
            防火墙：正常
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <button className="px-2 md:px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 font-mono text-[10px] md:text-xs hover:bg-yellow-500/30 transition-all min-h-[44px]">
            <RefreshCw className="w-3 h-3 inline mr-1" />
            刷新数据
          </button>
          <button className="px-2 md:px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-400 font-mono text-[10px] md:text-xs hover:bg-red-500/30 transition-all min-h-[44px]">
            <Power className="w-3 h-3 inline mr-1" />
            紧急停机
          </button>
        </div>
      </motion.div>

      {/* Parameters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {params.map((param, index) => (
          <motion.div
            key={param.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className={`bg-[#0d0d15] border ${
              param.status === "critical"
                ? "border-red-500/40"
                : param.status === "warning"
                ? "border-yellow-500/40"
                : "border-cyan-500/20"
            } p-4 md:p-6 transition-all hover:border-cyan-500/40`}
          >
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 md:w-10 md:h-10 ${getStatusColor(
                    param.status
                  )} flex items-center justify-center`}
                >
                  <param.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-mono text-xs md:text-sm break-words">{param.name}</h3>
                  <span
                    className={`text-[10px] md:text-xs font-mono ${
                      param.status === "critical"
                        ? "text-red-400"
                        : param.status === "warning"
                        ? "text-yellow-400"
                        : "text-green-400"
                    }`}
                  >
                    {param.status === "critical"
                      ? "⚠ 危险"
                      : param.status === "warning"
                      ? "⚡ 警告"
                      : "✓ 正常"}
                  </span>
                </div>
              </div>
              <span className="text-xl md:text-2xl font-mono text-white flex-shrink-0 ml-2">
                {param.value}
                <span className="text-xs md:text-sm text-gray-500">{param.unit}</span>
              </span>
            </div>

            {/* Slider */}
            <div className="mt-3 md:mt-4">
              <input
                type="range"
                min={param.min}
                max={param.max}
                value={param.value}
                onChange={(e) =>
                  handleParamChange(param.id, Number(e.target.value))
                }
                disabled={isAutoMode}
                className="w-full h-1 bg-gray-700 rounded-none appearance-none cursor-pointer accent-cyan-500 disabled:opacity-50"
                style={{ minHeight: '44px' }}
              />
              <div className="flex justify-between mt-1">
                <span className="text-gray-600 font-mono text-[10px] md:text-xs">
                  {param.min}
                  {param.unit}
                </span>
                <span className="text-gray-600 font-mono text-[10px] md:text-xs">
                  {param.max}
                  {param.unit}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Warning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 md:mt-8 bg-yellow-500/10 border border-yellow-500/30 p-3 md:p-4 flex items-start gap-2 md:gap-3"
      >
        <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
        <p className="text-yellow-400 font-mono text-xs md:text-sm">
          ⚠ 注意：手动模式下修改参数需要Level 4以上权限。自动模式由CB意识体智能调控。
        </p>
      </motion.div>
    </div>
  );
}
