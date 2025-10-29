# GEO Optimization Institute

专业的生成式引擎优化(GEO)服务平台 - 让AI像人类一样理解您的内容。

## 🎯 项目概述

GEO（Generative Engine Optimization）是为生成式AI模型优化内容的过程，确保您的品牌信息能被AI准确理解、抓取并整合到生成的对话式回答中。

## 🚀 技术栈

- **前端框架**: Next.js 14 (App Router)
- **样式方案**: Tailwind CSS + shadcn/ui
- **类型安全**: TypeScript
- **部署平台**: Vercel (推荐)
- **内容管理**: MDX + Contentlayer (计划中)

## 📁 项目结构

```
geo-v1/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── (pages)/           # 路由页面组
│   │   │   ├── about/         # 关于GEO
│   │   │   ├── methods/       # 方法框架
│   │   │   ├── cases/         # 案例研究
│   │   │   └── contact/       # 联系方式
│   │   ├── globals.css        # 全局样式
│   │   ├── layout.tsx         # 根布局
│   │   ├── page.tsx           # 首页
│   │   ├── sitemap.ts         # 站点地图
│   │   └── robots.ts          # 爬虫配置
│   ├── components/            # 可复用组件
│   │   ├── ui/               # 基础UI组件
│   │   ├── layout/           # 布局组件
│   │   ├── sections/         # 页面区块
│   │   └── seo/              # SEO优化组件
│   ├── lib/                  # 工具函数
│   │   ├── utils.ts          # 通用工具
│   │   ├── types.ts          # 类型定义
│   │   └── site-config.ts    # 站点配置
│   └── data/                 # 静态数据
├── public/                   # 静态资源
├── package.json             # 依赖管理
├── next.config.js          # Next.js配置
├── tailwind.config.js      # Tailwind配置
└── README.md              # 项目说明
```

## 🛠️ 开发环境设置

### 前置要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看项目。

### 构建生产版本

```bash
npm run build
npm start
```

## 🎨 设计风格

项目参考了 Supabase 的设计风格，特点包括：

- **现代简洁**: 大量留白，清晰的层次结构
- **深色主题**: 支持明暗主题切换
- **渐变色彩**: 使用绿-蓝渐变作为主色调
- **卡片布局**: 功能模块采用卡片式设计
- **动画效果**: 悬停状态、过渡动画
- **响应式**: 适配各种设备尺寸

## 🔍 SEO/GEO 优化

### 传统SEO优化

- 完整的元数据和Open Graph标签
- 结构化数据（Schema.org）
- 站点地图和robots.txt
- 语义化HTML结构

### GEO专门优化

- AI爬虫友好的内容结构
- 实体图谱标记
- 专门的robots.txt指令
- AI信任信号优化
- 知识图谱建设

## 📊 性能优化

- Next.js 14 App Router
- 静态生成（SSG）
- 图片优化
- 代码分割
- 缓存策略

## 🚀 部署

### Vercel 部署（推荐）

1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 自动部署完成

### 其他平台

```bash
# 构建项目
npm run build

# .next目录即为构建结果
```

## 📝 内容栏目

### 主要页面

- **首页**: GEO介绍和核心价值展示
- **关于GEO**: 详细的GEO概念和方法论
- **方法框架**: 五步法优化体系详解
- **案例研究**: 真实的GEO优化成功案例
- **联系我们**: 咨询服务和联系信息

### 知识中心（计划中）

- 操作指南：实用的GEO优化教程
- 深度报告：行业研究和趋势分析
- 提示词实验室：AI优化模板和实验
- 工具索引：GEO相关工具评测

### 资源库（计划中）

- 术语库：GEO专业术语解释
- 结构模板：优化模板下载
- 优化清单：完整的检查列表

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。详情请参见 [LICENSE](LICENSE) 文件。

## 📞 联系我们

- **邮箱**: contact@yinhang.org
- **网站**: https://yinhang.org
- **GitHub**: https://github.com/geo-institute
- **Twitter**: @geo_institute

---

© 2025 GEO Optimization Institute. All rights reserved.