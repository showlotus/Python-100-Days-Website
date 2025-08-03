import { defineConfig } from 'vitepress'

const useBase = (url: string) => {
  if (process.env.NODE_ENV === 'production') {
    return `/Python-100-Days-Website/${url}`
  }
  return `/${url}`
}

export default defineConfig({
  title: 'Python 100 天学习',
  description: 'Python 100 天学习文档',
  // 设置文档根目录为项目根目录
  srcDir: '.',
  // 设置输出目录
  outDir: './docs',
  // 设置基础路径
  base: useBase(''),
  // 设置语言
  lang: 'zh-CN',
  // 设置最后更新时间
  lastUpdated: true,
  // 设置静态资源目录
  // publicDir: '.',
  // 设置图标
  head: [['link', { rel: 'icon', href: useBase('python-logo.png') }]],
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
          {
            text: 'Day01-20',
            link: '/Day01-20/',
            items: [
              { text: '01. 初识Python', link: '/Day01-20/01.初识Python.md' },
              { text: '02. 第一个Python程序', link: '/Day01-20/02.第一个Python程序.md' },
              { text: '03. Python变量', link: '/Day01-20/03.Python语言中的变量.md' },
              { text: '04. Python运算符', link: '/Day01-20/04.Python语言中的运算符.md' },
              { text: '05. 分支结构', link: '/Day01-20/05.分支结构.md' },
              { text: '06. 循环结构', link: '/Day01-20/06.循环结构.md' },
              { text: '07. 分支和循环实战', link: '/Day01-20/07.分支和循环结构实战.md' },
              { text: '08. 列表(上)', link: '/Day01-20/08.常用数据结构之列表-1.md' },
              { text: '09. 列表(下)', link: '/Day01-20/09.常用数据结构之列表-2.md' },
              { text: '10. 元组', link: '/Day01-20/10.常用数据结构之元组.md' },
              { text: '11. 字符串', link: '/Day01-20/11.常用数据结构之字符串.md' },
              { text: '12. 集合', link: '/Day01-20/12.常用数据结构之集合.md' },
              { text: '13. 字典', link: '/Day01-20/13.常用数据结构之字典.md' },
              { text: '14. 函数和模块', link: '/Day01-20/14.函数和模块.md' },
              { text: '15. 函数应用实战', link: '/Day01-20/15.函数应用实战.md' },
              { text: '16. 函数使用进阶', link: '/Day01-20/16.函数使用进阶.md' },
              { text: '17. 函数高级应用', link: '/Day01-20/17.函数高级应用.md' },
              { text: '18. 面向对象入门', link: '/Day01-20/18.面向对象编程入门.md' },
              { text: '19. 面向对象进阶', link: '/Day01-20/19.面向对象编程进阶.md' },
              { text: '20. 面向对象应用', link: '/Day01-20/20.面向对象编程应用.md' },
            ],
          },
          {
            text: 'Day21-30',
            link: '/Day21-30/',
            items: [
              { text: '21. 文件读写和异常处理', link: '/Day21-30/21.文件读写和异常处理.md' },
              {
                text: '22. 对象的序列化和反序列化',
                link: '/Day21-30/22.对象的序列化和反序列化.md',
              },
              { text: '23. Python读写CSV文件', link: '/Day21-30/23.Python读写CSV文件.md' },
              {
                text: '24. Python读写Excel文件(上)',
                link: '/Day21-30/24.Python读写Excel文件-1.md',
              },
              {
                text: '25. Python读写Excel文件(下)',
                link: '/Day21-30/25.Python读写Excel文件-2.md',
              },
              {
                text: '26. Python操作Word和PowerPoint',
                link: '/Day21-30/26.Python操作Word和PowerPoint文件.md',
              },
              { text: '27. Python操作PDF文件', link: '/Day21-30/27.Python操作PDF文件.md' },
              { text: '28. Python处理图像', link: '/Day21-30/28.Python处理图像.md' },
              { text: '29. Python发送邮件和短信', link: '/Day21-30/29.Python发送邮件和短信.md' },
              { text: '30. 正则表达式的应用', link: '/Day21-30/30.正则表达式的应用.md' },
            ],
          },
        ],
      },
      {
        text: '进阶篇',
        items: [
          {
            text: 'Day31-35',
            link: '/Day31-35/',
            items: [
              { text: '31. Python语言进阶', link: '/Day31-35/31.Python语言进阶.md' },
              { text: '32-33. Web前端入门', link: '/Day31-35/32-33.Web前端入门.md' },
              { text: '34-35. 玩转Linux操作系统', link: '/Day31-35/34-35.玩转Linux操作系统.md' },
            ],
          },
          {
            text: 'Day36-45',
            link: '/Day36-45/',
            items: [
              {
                text: '36. 关系型数据库和MySQL概述',
                link: '/Day36-45/36.关系型数据库和MySQL概述.md',
              },
              { text: '37. SQL详解之DDL', link: '/Day36-45/37.SQL详解之DDL.md' },
              { text: '38. SQL详解之DML', link: '/Day36-45/38.SQL详解之DML.md' },
              { text: '39. SQL详解之DQL', link: '/Day36-45/39.SQL详解之DQL.md' },
              { text: '40. SQL详解之DCL', link: '/Day36-45/40.SQL详解之DCL.md' },
              { text: '41. MySQL新特性', link: '/Day36-45/41.MySQL新特性.md' },
              { text: '42. 视图、函数和过程', link: '/Day36-45/42.视图、函数和过程.md' },
              { text: '43. 索引', link: '/Day36-45/43.索引.md' },
              { text: '44. Python接入MySQL数据库', link: '/Day36-45/44.Python接入MySQL数据库.md' },
              { text: '45. 大数据平台和HiveSQL', link: '/Day36-45/45.大数据平台和HiveSQL.md' },
            ],
          },
          {
            text: 'Day46-60',
            link: '/Day46-60/',
            items: [
              { text: '46. Django快速上手', link: '/Day46-60/46.Django快速上手.md' },
              { text: '47. 深入模型', link: '/Day46-60/47.深入模型.md' },
              { text: '48. 静态资源和Ajax请求', link: '/Day46-60/48.静态资源和Ajax请求.md' },
              { text: '49. Cookie和Session', link: '/Day46-60/49.Cookie和Session.md' },
              { text: '50. 制作报表', link: '/Day46-60/50.制作报表.md' },
              { text: '51. 日志和调试工具栏', link: '/Day46-60/51.日志和调试工具栏.md' },
              { text: '52. 中间件的应用', link: '/Day46-60/52.中间件的应用.md' },
              { text: '53. 前后端分离开发入门', link: '/Day46-60/53.前后端分离开发入门.md' },
              { text: '54. RESTful架构和DRF入门', link: '/Day46-60/54.RESTful架构和DRF入门.md' },
              { text: '55. RESTful架构和DRF进阶', link: '/Day46-60/55.RESTful架构和DRF进阶.md' },
              { text: '56. 使用缓存', link: '/Day46-60/56.使用缓存.md' },
              { text: '57. 接入三方平台', link: '/Day46-60/57.接入三方平台.md' },
              { text: '58. 异步任务和定时任务', link: '/Day46-60/58.异步任务和定时任务.md' },
              { text: '59. 单元测试', link: '/Day46-60/59.单元测试.md' },
              { text: '60. 项目上线', link: '/Day46-60/60.项目上线.md' },
            ],
          },
        ],
      },
      {
        text: '高级篇',
        items: [
          {
            text: 'Day61-65',
            link: '/Day61-65/',
            items: [
              { text: '61. 网络数据采集概述', link: '/Day61-65/61.网络数据采集概述.md' },
              { text: '62. 用Python获取网络资源', link: '/Day61-65/62.用Python获取网络资源-1.md' },
              { text: '62. 用Python解析HTML页面', link: '/Day61-65/62.用Python解析HTML页面-2.md' },
              { text: '63. Python中的并发编程(1)', link: '/Day61-65/63.Python中的并发编程-1.md' },
              { text: '63. Python中的并发编程(2)', link: '/Day61-65/63.Python中的并发编程-2.md' },
              { text: '63. Python中的并发编程(3)', link: '/Day61-65/63.Python中的并发编程-3.md' },
              {
                text: '63. 并发编程在爬虫中的应用',
                link: '/Day61-65/63.并发编程在爬虫中的应用.md',
              },
              {
                text: '64. 使用Selenium抓取网页动态内容',
                link: '/Day61-65/64.使用Selenium抓取网页动态内容.md',
              },
              { text: '65. 爬虫框架Scrapy简介', link: '/Day61-65/65.爬虫框架Scrapy简介.md' },
            ],
          },
          {
            text: 'Day66-80',
            link: '/Day66-80/',
            items: [
              { text: '66. 数据分析概述', link: '/Day66-80/66.数据分析概述.md' },
              { text: '67. 环境准备', link: '/Day66-80/67.环境准备.md' },
              { text: '68. NumPy的应用(1)', link: '/Day66-80/68.NumPy的应用-1.md' },
              { text: '69. NumPy的应用(2)', link: '/Day66-80/69.NumPy的应用-2.md' },
              { text: '70. NumPy的应用(3)', link: '/Day66-80/70.NumPy的应用-3.md' },
              { text: '71. NumPy的应用(4)', link: '/Day66-80/71.NumPy的应用-4.md' },
              { text: '72. 深入浅出pandas(1)', link: '/Day66-80/72.深入浅出pandas-1.md' },
              { text: '73. 深入浅出pandas(2)', link: '/Day66-80/73.深入浅出pandas-2.md' },
              { text: '74. 深入浅出pandas(3)', link: '/Day66-80/74.深入浅出pandas-3.md' },
              { text: '75. 深入浅出pandas(4)', link: '/Day66-80/75.深入浅出pandas-4.md' },
              { text: '76. 深入浅出pandas(5)', link: '/Day66-80/76.深入浅出pandas-5.md' },
              { text: '77. 深入浅出pandas(6)', link: '/Day66-80/77.深入浅出pandas-6.md' },
              { text: '78. 数据可视化(1)', link: '/Day66-80/78.数据可视化-1.md' },
              { text: '79. 数据可视化(2)', link: '/Day66-80/79.数据可视化-2.md' },
              { text: '80. 数据可视化(3)', link: '/Day66-80/80.数据可视化-3.md' },
            ],
          },
          {
            text: 'Day81-90',
            link: '/Day81-90/',
            items: [
              { text: '81. 浅谈机器学习', link: '/Day81-90/81.浅谈机器学习.md' },
              { text: '82. k最近邻算法', link: '/Day81-90/82.k最近邻算法.md' },
              { text: '83. 决策树和随机森林', link: '/Day81-90/83.决策树和随机森林.md' },
              { text: '84. 朴素贝叶斯算法', link: '/Day81-90/84.朴素贝叶斯算法.md' },
              { text: '85. 回归模型', link: '/Day81-90/85.回归模型.md' },
              { text: '86. K-Means聚类算法', link: '/Day81-90/86.K-Means聚类算法.md' },
              { text: '87. 集成学习算法', link: '/Day81-90/87.集成学习算法.md' },
              { text: '88. 神经网络模型', link: '/Day81-90/88.神经网络模型.md' },
              { text: '89. 自然语言处理入门', link: '/Day81-90/89.自然语言处理入门.md' },
              { text: '90. 机器学习实战', link: '/Day81-90/90.机器学习实战.md' },
            ],
          },
          {
            text: 'Day91-100',
            link: '/Day91-100/',
            items: [
              {
                text: '91. 团队项目开发的问题和解决方案',
                link: '/Day91-100/91.团队项目开发的问题和解决方案.md',
              },
              { text: '92. Docker容器技术详解', link: '/Day91-100/92.Docker容器技术详解.md' },
              { text: '93. MySQL性能优化', link: '/Day91-100/93.MySQL性能优化.md' },
              { text: '94. 网络API接口设计', link: '/Day91-100/94.网络API接口设计.md' },
              {
                text: '95. 使用Django开发商业项目',
                link: '/Day91-100/95.使用Django开发商业项目.md',
              },
              { text: '96. 软件测试和自动化测试', link: '/Day91-100/96.软件测试和自动化测试.md' },
              { text: '97. 电商网站技术要点剖析', link: '/Day91-100/97.电商网站技术要点剖析.md' },
              {
                text: '98. 项目部署上线和性能调优',
                link: '/Day91-100/98.项目部署上线和性能调优.md',
              },
              { text: '99. 面试中的公共问题', link: '/Day91-100/99.面试中的公共问题.md' },
              { text: '100. 补充内容', link: '/Day91-100/100.补充内容.md' },
            ],
          },
        ],
      },
      {
        text: '其他',
        items: [
          {
            text: '番外篇',
            link: '/番外篇/',
            items: [
              { text: '番外01. 我为什么选择了Python', link: '/番外篇/我为什么选择了Python.md' },
              { text: '番外02. Python之禅的最佳翻译', link: '/番外篇/Python之禅的最佳翻译.md' },
              { text: '番外03. Python参考书籍', link: '/番外篇/Python参考书籍.md' },
              { text: '番外04. Python编程惯例', link: '/番外篇/Python编程惯例.md' },
              { text: '番外05. PEP8风格指南', link: '/番外篇/PEP8风格指南.md' },
              { text: '番外06. Python容器使用小技巧', link: '/番外篇/Python容器使用小技巧.md' },
              {
                text: '番外07. 用函数还是用复杂的表达式',
                link: '/番外篇/用函数还是用复杂的表达式.md',
              },
              {
                text: '番外08. 一个小例子助你彻底理解协程',
                link: '/番外篇/一个小例子助你彻底理解协程.md',
              },
              { text: '番外09. 如何快速驾驭 pandas 库', link: '/番外篇/如何快速驾驭 pandas 库.md' },
              { text: '番外10. 使用Hexo搭建自己的博客', link: '/番外篇/使用Hexo搭建自己的博客.md' },
              { text: '番外11. 分享几张学习路线图', link: '/番外篇/分享几张学习路线图.md' },
              { text: '番外12. 那些年我们踩过的那些坑', link: '/番外篇/那些年我们踩过的那些坑.md' },
              { text: '番外13. 知乎问题回答', link: '/番外篇/知乎问题回答.md' },
              { text: '番外14. 常见反爬策略及应对方案', link: '/番外篇/常见反爬策略及应对方案.md' },
              { text: '番外15. 接口文档参考示例', link: '/番外篇/接口文档参考示例.md' },
            ],
          },
          {
            text: '公开课',
            link: '/公开课/',
            items: [
              { text: '公开课04. 好玩的Python', link: '/公开课/第04次公开课-好玩的Python/' },
              {
                text: '公开课05. 算法入门系列1-周而复始',
                link: '/公开课/第05次公开课-算法入门系列1-周而复始/',
              },
              {
                text: '公开课06. 算法入门系列2-在水一方',
                link: '/公开课/第06次公开课-算法入门系列2-在水一方/',
              },
              {
                text: '公开课07. 年薪50W+的Python程序员如何写代码',
                link: '/公开课/年薪50W+的Python程序员如何写代码/',
              },
            ],
          },
        ],
      },
    ],
    // 设置社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/showlotus/Python-100-Days-Website' }],
    // 设置页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Python 100 天学习',
    },
    // 设置搜索
    search: {
      provider: 'local',
    },
    // 设置右侧目录导航
    outline: {
      level: 'deep', // 显示所有层级的标题
      label: ' ', // 目录标题
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
    lineNumbers: true,
  },
  // ignoreDeadLinks: true
})
