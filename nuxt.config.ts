// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "vuetify-nuxt-module",
    "@nuxtjs/i18n"
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ru',
        iso: 'ru-RUS',
        name: 'Russion',
        file: 'ru.json'
      }
    ],
    lazy: true,
    langDir: 'i18n/',
    defaultLocale: 'en',
    strategy: "prefix_except_default",
  },
  // tailwindcss: {
  //   exposeConfig: true,
  //   viewer: true,
  // },
});