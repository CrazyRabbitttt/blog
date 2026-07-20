import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://CrazyRabbitttt.github.io',
  base: '/blog/',
  integrations: [
    starlight({
      title: '我的博客',
      description: '记录学习笔记、技术文章与个人想法',
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/CrazyRabbitttt/blog/edit/master/',
      },
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
    sitemap(),
  ],
});
