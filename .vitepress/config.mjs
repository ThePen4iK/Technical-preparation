import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Technical preparation",
  description: "A VitePress Site",
  base: '/',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      dir: 'en'
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/'
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
    ],
    localeLinks: {
      items: [
        { text: 'English', link: '/en/' },
        { text: 'Русский', link: '/ru/' }
      ]
    },
    sidebar: {
      '/en/': [
        {
          text: 'JavaScript',
          items: [
            { text: 'JS', link: '/en/JavaScript' },
          ]
        },
        {
          text: 'Markdown',
          items: [
            { text: 'CSS', link: '/en/Markdown' },
          ]
        },
        {
          text: 'React',
          items: [
            { text: 'React', link: '/en/React' },
          ]
        }
      ],
      '/ru/': [
        {
          text: 'JavaScript',
          items: [
            { text: 'JS', link: '/ru/JavaScript' },
          ]
        },
        {
          text: 'Markdown',
          items: [
            { text: 'CSS', link: '/ru/Markdown' },
          ]
        },
        {
          text: 'React',
          items: [
            { text: 'React', link: '/ru/React' },
          ]
        }
      ]
    }
  }
});
