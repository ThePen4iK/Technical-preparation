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
        { text: 'English', link: '/en/' }, // Ссылка на главную страницу английской локализации
        { text: 'Русский', link: '/ru/' } // Ссылка на главную страницу русской локализации
      ]
    },
    sidebar: {
      '/en/': [
        {
          text: 'JavaScript',
          items: [
            { text: 'JS', link: '/en/JavaScript/javascript' },
          ]
        },
        {
          text: 'Markdown',
          items: [
            { text: 'CSS', link: '/en/Markdown/css' },
          ]
        },
        {
          text: 'React',
          items: [
            { text: 'React', link: '/en/React/react' },
          ]
        }
      ],
      '/ru/': [
        {
          text: 'JavaScript',
          items: [
            { text: 'JS', link: '/ru/JavaScript/javascript' },
          ]
        },
        {
          text: 'Markdown',
          items: [
            { text: 'CSS', link: '/ru/Markdown/css' },
          ]
        },
        {
          text: 'React',
          items: [
            { text: 'React', link: '/ru/React/react' },
          ]
        }
      ]
    }
  }
});
