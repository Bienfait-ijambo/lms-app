// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@clerk/nuxt',
    '@nuxtjs/tailwindcss'
  ],
   tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  }
  
   
})