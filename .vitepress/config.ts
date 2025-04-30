import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Python 100 天学习',
  description: 'Python 100 天学习文档',
  // 设置文档根目录为项目根目录
  srcDir: '.',
  // 设置输出目录
  outDir: './dist',
  // 设置基础路径
  base: '/',
  // 设置语言
  lang: 'zh-CN',
  // 设置最后更新时间
  lastUpdated: true,
  // 设置静态资源目录
  // publicDir: '.',
  // 设置图标
  head: [['link', { rel: 'icon', href: '/python-logo.png' }]],
  // 设置主题配置
  themeConfig: {
    // 设置导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '更新日志', link: '/更新日志.md' },
      { text: '学习资源', link: '/Python学习资源汇总.md' },
    ],
    // 设置侧边栏
    sidebar: [
      {
        text: '入门篇',
        items: [
          { text: 'Day01-20', link: '/Day01-20/' },
          { text: 'Day21-30', link: '/Day21-30/' },
        ],
      },
      {
        text: '进阶篇',
        items: [
          { text: 'Day31-35', link: '/Day31-35/' },
          { text: 'Day36-45', link: '/Day36-45/' },
          { text: 'Day46-60', link: '/Day46-60/' },
        ],
      },
      {
        text: '高级篇',
        items: [
          { text: 'Day61-65', link: '/Day61-65/' },
          { text: 'Day66-80', link: '/Day66-80/' },
          { text: 'Day81-90', link: '/Day81-90/' },
          { text: 'Day91-100', link: '/Day91-100/' },
        ],
      },
      {
        text: '其他',
        items: [
          { text: '番外篇', link: '/番外篇/' },
          { text: '公开课', link: '/公开课/' },
        ],
      },
    ],
    // 设置社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/jackfrued/python-100-days' }],
    // 设置页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Python 100 天学习',
    },
    // 设置搜索
    search: {
      provider: 'local',
    },
  },
  vite: {
    resolve: {
      alias: {
        // 将 res/ 开头的路径重命名为 ./res/
        'res/': './res/',
      },
    },
  },
  markdown: {
    math: true,
  },
})
