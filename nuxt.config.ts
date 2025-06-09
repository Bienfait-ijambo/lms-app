// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  

 components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@clerk/nuxt',
    '@nuxtjs/tailwindcss'
  ],

  runtimeConfig:{
      NUXT_CLERK_SECRET_KEY:process.env.NUXT_CLERK_SECRET_KEY,
  },
  
   tailwindcss: {
    exposeConfig: true,
     viewer: true,
    // and more...
  }
  
   
})