import { defineConfig } from 'vitepress'
import { nav, sidebar } from './config-modules'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/wangmeiling.github.io/',
  title: "小王的日记",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/avatar.png', // navbar 左上角的logo 真实路径是：/docs/public/avatar.png
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangml-gitbub?tab=repositories' }
    ],
    // 文章右边目录导航
    outline: {
      level: [2, 6],
      label: '目录'
    },
    // 本地搜索
    search: {
      provider: 'local'
    },
    // 国际化i18n
    i18nRouting: true
  }
})
