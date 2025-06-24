// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  

 components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@clerk/nuxt',
    '@nuxtjs/tailwindcss',
    '@prisma/nuxt',
    '@pinia/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },

  runtimeConfig:{
    public:{
      FALL_BACK_IMG_URL:process.env.FALL_BACK_IMG_URL
    },
      NUXT_CLERK_SECRET_KEY:process.env.NUXT_CLERK_SECRET_KEY,
  },
  
   tailwindcss: {
    exposeConfig: true,
     viewer: true,
    // and more...
  }
  
   
})