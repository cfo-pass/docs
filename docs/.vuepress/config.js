import { hopeTheme } from 'vuepress-theme-hope';
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base:'/docs/',
  lang: 'zh-CN',

  title: 'API文档',
  description: 'API文档',
  
  head: [['link', { rel: 'icon', href: '' }]],

  theme: hopeTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      {text: 'vuepress', link: '/vuepress/'}
    ],

    sidebar: {
      '/vuepress/': "structure",
    },

    plugins: {
      comment: {
        provider: 'Giscus',
        repo: 'cfo-pass/docs', 
        repoId: 'R_kgDOLzklDw',
        category: 'Announcements',
        categoryId: 'DIC_kwDOLzklD84Ce--n',
        position:'bottom',
      },
      components: {
        components: ["BiliBili", "VidStack"],
      },
      searchPro: {
        searchMaxSuggestions: 10,
        searchPlaceholder: '搜索文档',
      }
    },
 
  }),

  bundler: viteBundler(),

})
