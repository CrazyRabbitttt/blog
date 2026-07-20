---
title: 搭建这个博客的过程
description: 如何用 Astro Starlight 搭建免费博客
date: 2026-06-28
lastUpdated: 2026-07-21
---

## 为什么选择 Astro Starlight

在决定搭建博客时，我的需求是：

- 完全免费，不需要服务器
- 用 Markdown 写作
- 有侧边栏、搜索等功能
- 风格现代美观

[Astro Starlight](https://starlight.astro.build/) 完美满足了这些需求。

## 技术栈

| 组件 | 技术 |
|------|------|
| 网站框架 | Astro |
| 文档主题 | Starlight |
| 托管 | GitHub Pages（免费） |
| 自动部署 | GitHub Actions（免费） |

## 搭建过程

### 1. 创建项目

```bash
npm create astro@latest my-blog -- --template starlight
```

### 2. 写文章

在 `src/content/docs/` 目录下创建 Markdown 文件：

```markdown
---
title: 我的第一篇文章
description: 记录我的学习笔记
---

正文内容...
```

### 3. 本地预览

```bash
npm run dev
```

### 4. 部署到 GitHub Pages

配置 GitHub Actions 自动部署，推代码后自动构建发布。

## 费用

- 域名：`xxx.github.io`（免费）
- 托管：GitHub Pages（免费）
- CI/CD：GitHub Actions（免费，公开仓库无限分钟）
- 自定义域名：可选，约 50-70 元/年

**总费用：0 元**
