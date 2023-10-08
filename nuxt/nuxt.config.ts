export default defineNuxtConfig ({
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
