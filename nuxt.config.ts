// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [{
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: './library/ionicons/css/ionicons.min.css'
        },
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
  },
})