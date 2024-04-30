const { hopeTheme } = require('vuepress-theme-hope');
const { defineUserConfig } = require('@vuepress/cli');
const { viteBundler } = require('@vuepress/bundler-vite');
const { searchProPlugin } = require("vuepress-plugin-search-pro");

module.exports = defineUserConfig({
  base: '/docs/',
  lang: 'zh-CN',
  title: 'API文档',
  description: '详尽的API文档',

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' }],  // 确保FontAwesome库被加载
    ['link', { rel: 'icon', href: 'https://n.sinaimg.cn/sinacn14/300/w1620h1080/20180702/7ec4-hespqry6080115.jpg' }]
  ],

  theme: hopeTheme({
    // logo: 'https://n.sinaimg.cn/sinacn14/300/w1620h1080/20180702/7ec4-hespqry6080115.jpg',

    navbar: [
      { text: 'vuepress', link: '/vuepress/' },
      { text: 'pandora', link: '/pandora/' },
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
      searchPro: searchProPlugin({
        searchMaxSuggestions: 10,
        searchPlaceholder: '搜索文档',
      })
    },
  }),

  bundler: viteBundler(),
});
