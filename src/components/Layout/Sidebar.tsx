import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Archive,
  Users,
  Shield,
  Server,
  LogOut,
  ChevronLeft,
  ChevronRight,
  User,
  Bot,
  Settings,
  Brain,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { siteImages } from "../../config/images";

const navItems = [
  { path: "/", icon: Home, label: "首页" },
  { path: "/archive", icon: Archive, label: "站点档案" },
  { path: "/personnel", icon: Users, label: "人事档案" },
  { path: "/mtf", icon: Shield, label: "机动特遣队" },
  { path: "/facilities", icon: Server, label: "站点设施" },
  { path: "/control", icon: Settings, label: "站点控制" },
  { path: "/ai", icon: Bot, label: "AI系统" },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      className={`fixed left-0 top-0 h-screen bg-[#0a0a0f]/95 backdrop-blur-sm border-r border-cyan-500/20 z-50 flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-cyan-500/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
            {siteImages.sidebarLogo ? (
              <img
                src={siteImages.sidebarLogo}
                alt="Site Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <span className="text-cyan-400 font-mono text-xs font-bold">
                ASC
              </span>
            )}
          </div>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="overflow-hidden"
            >
              <p className="text-cyan-400 font-mono text-sm font-bold truncate">
                AREA-SPACE-CN
              </p>
              <p className="text-gray-600 font-mono text-xs truncate">
                深空巡洄者站点
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 font-mono text-sm transition-all ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400"
                  : "text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-300 border-l-2 border-transparent"
              }`
            }
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="truncate"
              >
                {item.label}
              </motion.span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Info */}
      <div className="p-3 border-t border-cyan-500/20">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 mb-2 transition-all ${
              isActive
                ? "bg-purple-500/20 text-purple-400"
                : "bg-[#0a0a0f] text-gray-400 hover:bg-purple-500/10 hover:text-purple-300"
            }`
          }
        >
          <Brain className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && (
            <div className="overflow-hidden">
              <p className="font-mono text-xs font-bold truncate">
                Chul Bacteria
              </p>
              <p className="font-mono text-xs opacity-70 truncate">
                副主管 / 意识体
              </p>
            </div>
          )}
        </NavLink>
      </div>

      {/* Footer */}
      <div className="p-2 border-t border-cyan-500/20">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-3 w-full text-gray-400 hover:text-red-400 hover:bg-red-500/10 font-mono text-sm transition-all"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span>登出系统</span>}
        </button>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center justify-center w-full py-2 text-gray-500 hover:text-cyan-400 transition-colors mt-2"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>
    </motion.aside>
  );
}
