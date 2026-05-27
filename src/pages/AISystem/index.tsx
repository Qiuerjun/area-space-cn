import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Send,
  Cpu,
  Activity,
  MessageSquare,
  Zap,
  Settings,
  HelpCircle,
  Square,
  BrainCircuit,
  Wrench,
  Loader2,
} from "lucide-react";
import {
  presetQuestions,
  aiSystemInfo,
  type PresetQuestion,
} from "../../data/aiData";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

interface ThinkingState {
  isThinking: boolean;
  thinkingText: string;
  tools: string[];
  currentToolIndex: number;
  visibleThinkingText: string;
  isPreset: boolean;
}

export default function AISystemPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [thinking, setThinking] = useState<ThinkingState>({
    isThinking: false,
    thinkingText: "",
    tools: [],
    currentToolIndex: -1,
    visibleThinkingText: "",
    isPreset: false,
  });
  const [isStopped, setIsStopped] = useState(false);
  const abortRef = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingText, thinking]);

  const streamThinking = async (
    fullText: string,
    tools: string[],
    isPreset: boolean
  ) => {
    setThinking({
      isThinking: true,
      thinkingText: fullText,
      tools,
      currentToolIndex: -1,
      visibleThinkingText: "",
      isPreset,
    });
    abortRef.current = false;

    const charDelay = isPreset ? 30 : 0;
    const toolDelay = isPreset ? 300 : 0;
    const totalDuration = isPreset ? 0 : 1000;

    if (isPreset) {
      for (let i = 0; i < fullText.length; i++) {
        if (abortRef.current) break;
        await new Promise((resolve) => setTimeout(resolve, charDelay));
        if (!abortRef.current) {
          setThinking((prev) => ({
            ...prev,
            visibleThinkingText: fullText.slice(0, i + 1),
          }));
        }
      }

      for (let i = 0; i < tools.length; i++) {
        if (abortRef.current) break;
        await new Promise((resolve) => setTimeout(resolve, toolDelay));
        if (!abortRef.current) {
          setThinking((prev) => ({
            ...prev,
            currentToolIndex: i,
          }));
        }
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, totalDuration));
    }

    if (!abortRef.current) {
      setThinking((prev) => ({
        ...prev,
        isThinking: false,
      }));
    }
  };

  const simulateStreaming = async (text: string) => {
    setIsTyping(true);
    setStreamingText("");
    abortRef.current = false;

    for (let i = 0; i < text.length; i++) {
      if (abortRef.current) {
        break;
      }
      await new Promise((resolve) =>
        setTimeout(resolve, 15 + Math.random() * 25)
      );
      if (!abortRef.current) {
        setStreamingText((prev) => prev + text[i]);
      }
    }

    if (!abortRef.current) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          type: "ai",
          content: text,
          timestamp: new Date(),
        },
      ]);
    }
    setStreamingText("");
    setIsTyping(false);
    setIsStopped(false);
  };

  const handlePresetQuestion = async (question: PresetQuestion) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: question.question,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    await streamThinking(question.thinking, question.tools, true);

    if (!abortRef.current) {
      await simulateStreaming(question.answer);
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping || thinking.isThinking) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    await streamThinking("", [], false);

    if (!abortRef.current) {
      const defaultResponse = `[ASC-CB idex-2077 系统响应]

正在处理您的请求...

■ 查询内容：${inputValue}
■ 处理状态：已接收

抱歉，该查询需要更高级别的处理权限或需要连接到外部数据库。
请从预设问题中选择，或联系系统管理员获取更多信息。

■ 可用操作：
  → 选择预设问题快速查询
  → 使用站点控制面板监控参数
  → 联系CB意识体获取技术支持

[系统提示：ASC-CB idex-2077 持续为您服务]`;

      await simulateStreaming(defaultResponse);
    }
  };

  const handleStop = () => {
    abortRef.current = true;
    setIsStopped(true);
    setIsTyping(false);
    setStreamingText("");
    setThinking((prev) => ({
      ...prev,
      isThinking: false,
    }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "system":
        return <Activity className="w-4 h-4" />;
      case "query":
        return <HelpCircle className="w-4 h-4" />;
      case "control":
        return <Settings className="w-4 h-4" />;
      default:
        return <MessageSquare className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "system":
        return "border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10";
      case "query":
        return "border-green-500/30 text-green-400 hover:bg-green-500/10";
      case "control":
        return "border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/10";
      default:
        return "border-gray-500/30 text-gray-400 hover:bg-gray-500/10";
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Bot className="w-8 h-8 text-cyan-400" />
              <h1 className="text-3xl font-mono text-cyan-400">
                {aiSystemInfo.name}
              </h1>
            </div>
            <p className="text-gray-500 font-mono text-sm">
              {aiSystemInfo.fullName} - {aiSystemInfo.version}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-mono flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              系统在线
            </span>
            <span className="text-gray-500 font-mono text-xs">
              运行于：{aiSystemInfo.host}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Capabilities */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 bg-[#0d0d15] border border-cyan-500/20 p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 font-mono text-sm">系统能力</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {aiSystemInfo.capabilities.map((cap, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs"
            >
              {cap}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Preset Questions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-gray-400 font-mono text-sm">快速操作</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {presetQuestions.map((q) => (
            <button
              key={q.id}
              onClick={() => handlePresetQuestion(q)}
              disabled={isTyping || thinking.isThinking}
              className={`p-3 border font-mono text-sm text-left transition-all disabled:opacity-50 ${getCategoryColor(
                q.category
              )}`}
            >
              <div className="flex items-center gap-2 mb-1">
                {getCategoryIcon(q.category)}
                <span className="text-xs opacity-70 uppercase">
                  {q.category === "system"
                    ? "系统"
                    : q.category === "query"
                    ? "查询"
                    : "控制"}
                </span>
              </div>
              {q.question}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Chat Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex-1 bg-[#0d0d15] border border-cyan-500/20 flex flex-col"
      >
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[400px]">
          {messages.length === 0 && (
            <div className="text-center text-gray-600 font-mono text-sm py-12">
              <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>ASC-CB idex-2077 已就绪</p>
              <p className="text-xs mt-2">请选择预设问题或输入自定义查询</p>
            </div>
          )}

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-4 font-mono text-sm ${
                  msg.type === "user"
                    ? "bg-cyan-500/20 border border-cyan-500/30 text-cyan-300"
                    : "bg-[#0a0a0f] border border-cyan-500/10 text-gray-300"
                }`}
              >
                <pre className="whitespace-pre-wrap break-words">
                  {msg.content}
                </pre>
                <div
                  className={`text-xs mt-2 ${
                    msg.type === "user" ? "text-cyan-500" : "text-gray-600"
                  }`}
                >
                  {msg.timestamp.toLocaleTimeString("zh-CN")}
                </div>
              </div>
            </div>
          ))}

          {/* Thinking State */}
          {thinking.isThinking && (
            <div className="flex justify-start">
              <div className="max-w-[80%] w-full p-4 bg-[#0a0a0f] border border-yellow-500/20 text-gray-300 font-mono text-sm">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-yellow-500/10">
                  <BrainCircuit className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <span className="text-yellow-400 font-mono text-xs">
                    思考中...
                  </span>
                  <Loader2 className="w-3 h-3 text-yellow-400 animate-spin" />
                </div>

                {thinking.isPreset && (
                  <>
                    <pre className="whitespace-pre-wrap break-words text-gray-400 text-xs mb-3">
                      {thinking.visibleThinkingText}
                      <span className="animate-pulse">▊</span>
                    </pre>

                    <div className="space-y-1">
                      <p className="text-gray-500 text-xs mb-2">调用工具：</p>
                      {thinking.tools.map((tool, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-2 text-xs transition-all ${
                            index <= thinking.currentToolIndex
                              ? "text-cyan-400"
                              : "text-gray-600"
                          }`}
                        >
                          <Wrench
                            className={`w-3 h-3 ${
                              index <= thinking.currentToolIndex
                                ? "text-cyan-400"
                                : "text-gray-600"
                            }`}
                          />
                          <span>
                            {index <= thinking.currentToolIndex ? "✓" : "○"}{" "}
                            {tool}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {!thinking.isPreset && (
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    <span>正在处理请求...</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Streaming Output */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-4 bg-[#0a0a0f] border border-cyan-500/10 text-gray-300 font-mono text-sm">
                <pre className="whitespace-pre-wrap break-words">
                  {streamingText}
                  <span className="animate-pulse">▊</span>
                </pre>
              </div>
            </div>
          )}

          {isStopped && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs">
                ⚠ 输出已被用户终止
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-cyan-500/20">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="输入查询或指令..."
              disabled={isTyping || thinking.isThinking}
              className="flex-1 bg-[#0a0a0f] border border-cyan-500/30 text-cyan-300 font-mono px-4 py-3 focus:outline-none focus:border-cyan-400 disabled:opacity-50 placeholder:text-gray-600"
            />
            {(isTyping || thinking.isThinking) ? (
              <button
                onClick={handleStop}
                className="px-6 bg-red-500/20 border border-red-500 text-red-400 font-mono hover:bg-red-500/30 transition-all"
              >
                <Square className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="px-6 bg-cyan-500/20 border border-cyan-500 text-cyan-400 font-mono hover:bg-cyan-500/30 transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
