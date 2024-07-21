// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "vuetify-nuxt-module",
    "@nuxtjs/i18n",
    "nuxt-icon",
    "@pinia/nuxt",
  ],
  plugins: ["~/plugins/axios.ts"],
  runtimeConfig: {
    public: {
      imageBaseURL: "https://image.tmdb.org/t/p/w500",
    },
  },
  i18n: {
    locales: [
      {
        code: "en-Us",
        iso: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "ru-Ru",
        iso: "ru-RU",
        name: "Russian",
        file: "ru.json",
      },
    ],
    langDir: "./i18n/",
    strategy: "no_prefix",
  },
});
