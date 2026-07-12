# 我的博客

一个使用 Astro Starlight 搭建的博客网站，托管在 GitHub Pages 上。

## 本地开发

```bash
# 安装依赖
npm install

# 启动本地预览
npm run dev

# 构建生产版本
npm run build
```

## 写文章

在 `src/content/docs/` 对应目录下创建 Markdown 文件：

- `notes/` — 学习笔记
- `articles/` — 技术文章
- `thoughts/` — 随笔想法

## 部署

推送到 GitHub main 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 技术栈

- [Astro](https://astro.build/) — 静态站点生成器
- [Starlight](https://starlight.astro.build/) — 文档主题
- GitHub Pages — 免费托管
- GitHub Actions — 自动部署
