import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Technical preparation",
  description: "A VitePress Site",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // search: {
    //   provider: 'local'
    // },
    //в шапке навигация
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'JavaScript',
        items: [
          { text: 'JS', link: '/JavaScript/javascript' },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Markdown',
        items: [
          { text: 'CSS', link: '/Markdown/css' },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
