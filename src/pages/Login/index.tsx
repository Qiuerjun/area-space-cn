import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, User, AlertTriangle, Shield } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { siteImages } from "../../config/images";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const success = login(username, password);
    if (success) {
      navigate("/");
    } else {
      setError("访问被拒绝：凭证无效");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden p-4">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none"
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner decorations - 移动端更小 */}
      <div className="absolute top-2 left-2 w-10 h-10 md:w-16 md:h-16 border-l-2 border-t-2 border-cyan-500/50" />
      <div className="absolute top-2 right-2 w-10 h-10 md:w-16 md:h-16 border-r-2 border-t-2 border-cyan-500/50" />
      <div className="absolute bottom-2 left-2 w-10 h-10 md:w-16 md:h-16 border-l-2 border-b-2 border-cyan-500/50" />
      <div className="absolute bottom-2 right-2 w-10 h-10 md:w-16 md:h-16 border-r-2 border-b-2 border-cyan-500/50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            {siteImages.loginShield ? (
              <img
                src={siteImages.loginShield}
                alt="Site Shield"
                className="w-16 h-16 object-contain mx-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <Shield className="w-16 h-16 text-cyan-400 mx-auto" />
            )}
          </motion.div>
          <h1 className="text-2xl md:text-3xl font-mono text-cyan-400 mb-2 tracking-wider">
            AREA-SPACE-CN
          </h1>
          <p className="text-gray-500 font-mono text-sm">
            基金会深空巡洄者站点 - 安全终端
          </p>
        </div>

        {/* Login form */}
        <div className="bg-[#0d0d15]/80 backdrop-blur-sm border border-cyan-500/30 rounded-none p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cyan-500/20">
            <Lock className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm">
              身份验证系统 v2.7.4
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-400 font-mono text-xs mb-2 uppercase tracking-wider">
                用户标识
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#0a0a0f] border border-cyan-500/30 text-cyan-300 font-mono px-10 py-4 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all placeholder:text-gray-600 text-base"
                  placeholder="输入用户标识"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 font-mono text-xs mb-2 uppercase tracking-wider">
                访问密钥
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0a0a0f] border border-cyan-500/30 text-cyan-300 font-mono px-10 py-4 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all placeholder:text-gray-600 text-base"
                  placeholder="输入访问密钥"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 font-mono text-sm bg-red-500/10 border border-red-500/30 p-4"
              >
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-cyan-500/20 border border-cyan-500 text-cyan-400 font-mono py-4 uppercase tracking-wider hover:bg-cyan-500/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base min-h-[48px] touch-manipulation"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"
                  />
                  验证中...
                </span>
              ) : (
                "请求访问"
              )}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-cyan-500/20">
            <p className="text-gray-600 font-mono text-xs text-center">
              未经授权的访问将被记录并追踪
            </p>
          </div>
        </div>

        {/* Footer warning */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-600 font-mono text-xs">
            ⚠ 安全等级：机密 - 仅限授权人员
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
