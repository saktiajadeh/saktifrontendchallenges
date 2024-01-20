// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  app: {
    head:{
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'stylesheet', href: './library/ionicons/css/ionicons.min.css' },
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
