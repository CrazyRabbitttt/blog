import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: string | URL }) {
  const docs = await getCollection('docs');

  // 只包含有 description 的文章，排除 splash 模板的首页
  const posts = docs
    .filter((doc) => doc.data.description && doc.data.template !== 'splash')
    .sort(
      (a, b) =>
        (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0)
    );

  const base = import.meta.env.BASE_URL;
  const siteUrl = new URL(context.site);

  return rss({
    title: '我的博客',
    description: '记录学习笔记、技术文章与个人想法',
    site: new URL(base, siteUrl).toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date ?? new Date(),
      link: `${base}${post.slug}/`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
