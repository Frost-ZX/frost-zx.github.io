import { defineConfig } from 'vitepress';
import { githubIcon } from './icons.mjs';

// 站点配置
// https://vitepress.dev/zh/reference/site-config
export default defineConfig({

  // 站点元数据
  base: '/',
  lang: 'zh-CN',
  title: 'Frost-ZX',
  titleTemplate: ':title - Frost-ZX',
  description: 'Frost-ZX 的博客',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'blog,frost-zx,minecraft,博客,分享,记录,技术,教程' }],
  ],

  // 构建配置
  ignoreDeadLinks: true,
  metaChunk: true,

  // 主题配置
  // https://vitepress.dev/zh/reference/default-theme-config
  themeConfig: {

    logo: '/favicon.png',
    nav: [
      { text: '主页', link: '/' },
      // { text: '归档', link: '/archives' },
      { text: '关于', link: '/about' },
      { text: '留言板', link: '/comments' },
      { text: '友情链接', link: '/links' },
    ],
    outline: {
      label: '目录',
      level: [2, 4],
    },
    sidebar: {
    },
    socialLinks: [
      { icon: { svg: githubIcon }, link: 'https://github.com/Frost-ZX' },
    ],
    darkModeSwitchLabel: '切换主题',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: {
      next: '下一篇',
      prev: '上一篇',
    },
    langMenuLabel: '语言设置',
    lightModeSwitchTitle: '切换到浅色模式',
    returnToTopLabel: '返回顶部',

  },

  // 网站地图
  sitemap: {
    hostname: 'https://blog.frost-zx.top',
  },

  // markdown-it 配置
  markdown: {
    image: {
      lazyLoading: true,
    }
  },

  // Vite 配置
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },

});
