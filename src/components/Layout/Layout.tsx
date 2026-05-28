import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Layout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 检测是否是移动设备
  useEffect(() => {
    const checkMobile = () => {
      const isMobileScreen = window.innerWidth < 768;
      setIsMobile(isMobileScreen);
      if (!isMobileScreen) {
        setIsMobileOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* 移动端覆盖层 */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
      
      {/* 侧边栏 */}
      <Sidebar 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        isMobile={isMobile}
      />
      
      {/* 主内容区域 */}
      <main
        className={`min-h-screen transition-all duration-300 ${
          isMobile ? "ml-0" : (isCollapsed ? "ml-16" : "ml-64")
        }`}
      >
        {/* 移动端顶部导航栏 */}
        {isMobile && (
          <div className="sticky top-0 z-30 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-cyan-500/20 p-4 flex items-center gap-4">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="p-2 text-cyan-400 hover:bg-cyan-500/20 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center rounded">
                <span className="text-cyan-400 font-mono text-xs font-bold">ASC</span>
              </div>
              <span className="text-cyan-400 font-mono text-sm font-bold">AREA-SPACE-CN</span>
            </div>
          </div>
        )}
        
        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
