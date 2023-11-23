export default defineNuxtConfig ({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width',
      title: 'My App',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: https://ogp.me/ns#'
      },
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
