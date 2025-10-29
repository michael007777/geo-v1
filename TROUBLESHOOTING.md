# GEO Institute - 故障排除指南

## 🛠️ 开发环境问题

### 1. Turbopack CSS 错误

**问题描述**: 开发服务器启动时出现 "An unexpected Turbopack error occurred" 错误，通常与 CSS 处理有关。

**解决方案**:
```bash
# 方案1: 使用简化的CSS配置
# 修改 postcss.config.js 为:
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

# 方案2: 清理缓存重新启动
rm -rf .next
npm run dev

# 方案3: 使用备用CSS文件
# 在 layout.tsx 中导入 globals-simple.css
import "./globals-simple.css"
```

### 2. 端口占用问题

**问题描述**: Port 3000 is in use

**解决方案**:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <进程ID> /F

# 或者直接使用备用脚本
./start-dev.bat
```

### 3. TypeScript 编译错误

**问题描述**: 类型错误导致构建失败

**常见错误及解决方案**:

#### 错误: '@type' is specified more than once
```typescript
// 错误写法
contactPoint: {
  '@type': 'ContactPoint',
  ...contactPoint,
},

// 正确写法
contactPoint: {
  '@type': 'ContactPoint',
  telephone: contactPoint.telephone,
  contactType: contactPoint.contactType,
  availableLanguage: contactPoint.availableLanguage,
},
```

#### 错误: ForwardRef 类型不匹配
```typescript
// 确保组件类型正确
const Component = React.forwardRef<HTMLDivElement, Props>(...)
```

### 4. 依赖安装问题

**问题描述**: npm install 失败

**解决方案**:
```bash
# 清理缓存
npm cache clean --force

# 删除 node_modules 重新安装
rm -rf node_modules package-lock.json
npm install

# 如果是特定包的问题，尝试指定版本
npm install tailwindcss@^3.4.0
```

## 🔧 构建部署问题

### 1. 构建失败

**常见原因**:
- TypeScript 类型错误
- CSS 语法错误
- 缺少依赖

**调试步骤**:
```bash
# 检查 TypeScript 错误
npx tsc --noEmit

# 检查构建
npm run build

# 查看详细错误信息
npm run build 2>&1 | tee build.log
```

### 2. 图片优化警告

**问题描述**: `images.domains is deprecated`

**解决方案**:
```javascript
// 在 next.config.js 中使用 remotePatterns
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
```

## 🌐 网站访问问题

### 1. 页面显示 500 错误

**排查步骤**:
1. 检查控制台错误信息
2. 查看终端输出
3. 检查组件导入路径
4. 验证数据结构

### 2. 样式加载失败

**解决方案**:
```bash
# 检查 Tailwind 配置
npx tailwindcss --help

# 重新生成 CSS
npm run build
```

### 3. 导航不工作

**检查项目**:
- Next.js App Router 配置
- 文件路径命名
- Link 组件使用

## 📱 性能优化

### 1. 页面加载慢

**优化建议**:
- 使用 Next.js Image 组件
- 启用静态生成 (SSG)
- 优化图片大小
- 使用代码分割

### 2. 字体闪烁

**解决方案**:
```typescript
// 在 layout.tsx 中
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // 添加这一行
})
```

## 🚨 紧急恢复

如果所有方法都失败，尝试以下步骤：

```bash
# 1. 完全重置项目
git clean -fd
git reset --hard HEAD

# 2. 重新安装依赖
rm -rf node_modules package-lock.json
npm install

# 3. 使用最小配置启动
# 临时简化 tailwind.config.js 和 globals.css

# 4. 逐个恢复功能
# 从基础页面开始，逐步添加复杂功能
```

## 📞 获取帮助

如果问题仍然存在：

1. **查看日志**: 检查 `.next` 目录下的日志文件
2. **GitHub Issues**: 搜索相关错误信息
3. **社区求助**: 在相关技术社区提问
4. **官方文档**: 查看 Next.js 和 Tailwind CSS 官方文档

## 🔍 调试技巧

### 开发者工具
- 使用 React Developer Tools
- 检查网络请求
- 查看控制台错误
- 使用 Performance 面板

### VS Code 调试
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```

---

💡 **提示**: 大多数问题都可以通过清理缓存（`rm -rf .next`）和重新启动解决。