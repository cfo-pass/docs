import { hopeTheme } from 'vuepress-theme-hope';
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base:'/docs/',
  lang: 'zh-CN',

  title: 'API文档',
  description: 'API文档',
  
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' }],
    ['link', { rel: 'icon', href: 'https://n.sinaimg.cn/sinacn14/300/w1620h1080/20180702/7ec4-hespqry6080115.jpg' }]
  ],


  theme: hopeTheme({
    logo: 'https://n.sinaimg.cn/sinacn14/300/w1620h1080/20180702/7ec4-hespqry6080115.jpg',

    navbar: [
      {text: 'vuepress', link: '/vuepress/'},
      {text: 'pandora', link: '/pandora/'},
      {
        text: 'Google',
        link: 'https://google.com',
        iconClass: 'fab fa-google'  // 使用FontAwesome的class
      }
    ],

    sidebar: {
      '/vuepress/': "structure",
      '/pandora/': "structure",
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
