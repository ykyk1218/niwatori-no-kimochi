export default defineNuxtConfig ({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width',
      title: 'にわとりの気持ち',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: https://ogp.me/ns#'
      },
      meta: [
        { hid: 'description', name: 'description', content: '個人的に撮影の記録をまとめたサイトです'},
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'にわとりの気持ち' },
        { property: 'og:description', content: '個人的に撮影の記録をまとめたサイトです' },
        { property: 'og:image', content: 'https://main--lustrous-pothos-2a2cfe.netlify.app/images/logo.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'にわとりの気持ち' }
      ]
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    }
  },
  devtools: { enabled: true },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },
  typescript: {
    shim: true,
    strict: true,
    typeCheck: true
  },
  css: [
    "@/assets/scss/main.scss"
  ]
})
