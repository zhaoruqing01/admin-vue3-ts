# admin-vue3-ts

一个基于 Vue 3、TypeScript 和 Vite 的管理员后台项目模板，集成了主流前端工具和 UI 组件库，旨在快速搭建高效、规范的管理系统。

## 项目简介

本项目采用 Vue 3 的 `<script setup>` 单文件组件语法，结合 TypeScript 提供的类型安全特性，基于 Vite 构建工具实现快速开发和热更新。集成了 Element Plus 作为 UI 框架、Pinia 作为状态管理方案、Vue Router 处理路由，并配备了完整的代码规范和提交校验机制，适合用于开发企业级管理员后台系统。

## 技术栈

- **核心框架**：Vue 3 + TypeScript
- **构建工具**：Vite
- **UI 组件库**：Element Plus
- **状态管理**：Pinia + pinia-plugin-persistedstate
- **路由管理**：Vue Router
- **HTTP 客户端**：Axios
- **数据可视化**：ECharts + echarts-liquidfill
- **日期处理**：dayjs
- **代码规范**：ESLint + Prettier + StyleLint
- **提交规范**：Husky + CommitLint

## 快速开始

### 环境要求

- Node.js: >= 14 (推荐 18+)
- 包管理器：npm 或 pnpm

### 安装依赖

bash

```bash
# 使用 npm
npm install

# 或使用 pnpm
pnpm install
```

### 开发环境运行

bash

```bash
npm run dev
# 或
pnpm dev
```

运行后会自动打开浏览器，默认地址为 `http://localhost:5173`（具体端口可能因配置或占用情况变动）。

### 构建打包

- 测试环境构建：

  bash

  ```bash
  npm run build:test
  # 或
  pnpm build:test
  ```

- 生产环境构建：

  bas

  ```bash
  npm run build:pro
  # 或
  pnpm build:pro
  ```

构建产物会输出到 `dist` 目录。

### 预览构建结果

bash

```bash
npm run preview
# 或
pnpm preview
```

## 代码规范

项目集成了严格的代码规范校验工具，确保代码风格一致：

- **代码检查**：

  bash

  ```bash
  # 检查代码规范
  npm run lint
  # 自动修复可修复的规范问题
  npm run lint:fix
  ```

- **样式检查**：

  bash

  ```bash
  # 检查样式规范（CSS/SCSS/Vue）
  npm run lint:style
  ```

- **格式化代码**：

  bash

  ```bash
  npm run format
  ```

### 提交规范

通过 Husky 和 CommitLint 约束 Git 提交信息，提交信息需遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范，格式示例：

bash

```bash
git commit -m "feat: 新增用户管理模块"
git commit -m "fix: 修复表单提交失败问题"
```

## 许可证

本项目基于 Apache License 2.0 开源协议。
