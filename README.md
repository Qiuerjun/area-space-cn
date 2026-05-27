# Area-Space-CN 站点官网

基金会深空巡洄者站点（Area-Space-CN）官方门户网站，基于 SCP 基金会风格构建的静态站点。

## 项目简介

Area-Space-CN（ASC）是由多个基金会空间站点联合建造的目前最大的基金会太空设施站点。本网站展示了站点的基本信息、组织架构、人员档案和站点动态，为站点成员提供信息查询和身份验证入口。

**站点格言**：摘星为舟，远渡苍穹

## 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式方案**：TailwindCSS 3
- **路由管理**：React Router 6
- **动画库**：Framer Motion
- **图标库**：Lucide React
- **状态管理**：Zustand

## 功能特性

### 认证系统
- SCP 风格登录界面，带扫描线动画效果
- 账号密码验证（默认：123456 / 123456）
- 登录状态持久化（localStorage）

### 页面模块
| 页面 | 功能描述 |
|------|----------|
| 首页 | 站点概览、实时数据面板、最新动态 |
| 站点档案 | 部门列表、格言展示、技术规格 |
| 人事档案 | 核心人员详细介绍卡片 |
| 机动特遣队 | MTF/ETF 部队信息展示 |
| 站点设施 | 量子计算机服务器群技术规格 |
| 站点控制 | 动态参数监控与手动调控 |
| AI 系统 | ASC-CB idex-2077 智能交互系统 |
| 用户档案 | 当前登录用户信息展示 |

### AI 系统（ASC-CB idex-2077）
- 运行于 ASC 中央生物态超级计算机
- 预设问题带思考过程展示（流式输出）
- 工具调用可视化
- 支持终止输出
- 手动输入问题支持

### 动态效果
- 扫描线背景动画
- 数据实时波动更新
- 卡片悬浮发光效果
- 流式文本输出
- 页面切换过渡动画

## 项目结构

```
src/
├── components/          # 通用组件
│   ├── Auth/           # 认证相关
│   ├── Layout/         # 布局组件（侧边栏）
│   └── UI/             # UI 组件
├── pages/              # 页面组件
│   ├── Login/          # 登录页面
│   ├── Home/           # 首页
│   ├── Archive/        # 站点档案
│   ├── Personnel/      # 人事档案
│   ├── MTF/            # 机动特遣队
│   ├── Facilities/     # 站点设施
│   ├── Control/        # 站点控制
│   ├── AISystem/       # AI 系统
│   └── Profile/        # 用户档案
├── data/               # 静态数据
│   ├── siteData.ts     # 站点信息
│   ├── personnelData.ts # 人员档案
│   ├── mtfData.ts      # 特遣队数据
│   ├── aiData.ts       # AI 预设问答
│   └── userData.ts     # 当前用户数据
├── context/            # React Context
│   └── AuthContext.tsx # 认证状态
├── config/             # 配置文件
│   └── images.ts       # 图片配置
├── hooks/              # 自定义 Hooks
├── utils/              # 工具函数
└── styles/             # 全局样式
```

## 自定义配置

### 替换站点图片

编辑 `src/config/images.ts`：

```typescript
export const siteImages = {
  // 登录页面盾牌图标（建议 64x64px）
  loginShield: "https://your-domain.com/shield.png",

  // 侧边栏站点标志（建议 40x40px）
  sidebarLogo: "https://your-domain.com/logo.png",
};
```

未填写 URL 时将显示默认图标。

### 修改预设数据

站点相关数据位于 `src/data/` 目录下：
- `siteData.ts` - 站点基本信息、部门列表、技术规格
- `personnelData.ts` - 人员档案
- `mtfData.ts` - 机动特遣队信息
- `aiData.ts` - AI 系统预设问答
- `userData.ts` - 当前登录用户信息

## 设计风格

- **主色调**：深蓝色 (#0a1628)、科技蓝 (#00d4ff)
- **辅助色**：警示橙 (#ff6b35)、警告红 (#ff0000)
- **字体**：Courier New / Consolas 等宽字体
- **风格**：SCP 基金会工业科幻风格
- **特效**：扫描线、全息投影、故障艺术

## 默认账号

- **账号**：123456
- **密码**：123456

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 许可证

本项目为粉丝创作，基于 SCP 基金会共享授权协议。

SCP 基金会相关内容遵循 [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) 协议。
