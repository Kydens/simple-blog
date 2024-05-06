// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    dbPass: process.env.NUXT_PASSWORD_DB,
    dbTable: process.env.NUXT_TABLE_DB,
  },
});
