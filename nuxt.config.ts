// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vue-countup-v3'],
  },
  css: [
    '~/assets/scss/tailwind.scss',
    '~/assets/css/materialdesignicons.min.css',
    '~/assets/libs/@iconscout/unicons/css/line.css',
    '~/assets/css/jarallax.min.css'
],
  app: {
    head: {
      title: 'Valeanu Auto',
      titleTemplate: 'Valeanu Auto | I.T.P',
      htmlAttrs: { class: 'light scroll-smooth', dir:'ltr' },
      bodyAttrs: {
        class: 'font-rubik text-base text-slate-900 dark:text-white dark:bg-slate-900',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        {
          // rel: 'stylesheet',
          // href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css',
        },
        
      ],
      script: [
        {
          // src: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.helper.ie8.js'
        }
      ]
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
})
