import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://CrazyRabbitttt.github.io',
  // 如果仓库名不是 <用户名>.github.io，需要设置 base
  // 例如仓库名为 my-blog，则 base 为 '/my-blog/'
  base: '/my-blog/',
  integrations: [
    starlight({
      title: '我的博客',
      description: '记录学习笔记与想法',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/CrazyRabbitttt/blog' },
      ],
      sidebar: [
        {
          label: '首页',
          link: '/',
        },
        {
          label: '学习笔记',
          autogenerate: { directory: 'notes' },
          collapsed: false,
        },
        {
          label: '技术文章',
          autogenerate: { directory: 'articles' },
          collapsed: false,
        },
        {
          label: '随笔想法',
          autogenerate: { directory: 'thoughts' },
          collapsed: false,
        },
        {
          label: '关于',
          link: '/about',
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});
