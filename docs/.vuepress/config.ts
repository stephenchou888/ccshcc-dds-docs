import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'
// import { searchPlugin } from '@vuepress/plugin-search'
import {
  navbarZhCN,
  sidebarZhCN
} from './configs/index.js'

export default defineUserConfig({
  base: '/ccshcc-dds-docs/',

  // site-level locales config
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '交通工程数字化设计系统',
      description: '交通工程数字化设计系统帮助文档',
    }
  },

  // configure default theme
  theme: defaultTheme({
    logo: '/images/logo.jpg',
    repo: 'stephenchou888/ccshcc-dds-docs',
    docsDir: 'docs',
    sidebarDepth: 2,

    // theme-level locales config
    locales: {
      // Simplified Chinese
      '/': {
        // navbar
        navbar: navbarZhCN,
        selectLanguageName: '简体中文',
        selectLanguageText: 'Languages',
        selectLanguageAriaLabel: '选择语言',
        // sidebar
        sidebar: sidebarZhCN,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏'
      }
    },

    /*plugins: [
      searchPlugin({
        locales: {
          '/': {
            placeholder: '搜索'
          },
        },
      }),
    ],*/

    themePlugins: {
      // Disable git plugin, git plugin shows contributor and last update time.
      git: false
    },
  })
  
})