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
    '@pinia/nuxt',
    "@unlok-co/nuxt-stripe"
  ],
  stripe: {
    // Server
    server: {
      key: process.env.STRIPE_SECRET_KEY,
      options: {

      },
    },
    client: {
      key: process.env.STRIPE_PUBLIC_KEY,
      options: {},
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  runtimeConfig: {
    public: {
      FALL_BACK_IMG_URL: process.env.FALL_BACK_IMG_URL,
      CHAPTER_WITH_VIDEO_IMG: process.env.CHAPTER_WITH_VIDEO_IMG,
      CHAPTER_WITHOUT_VIDEO_IMG: process.env.CHAPTER_WITHOUT_VIDEO_IMG


    },
    NUXT_CLERK_SECRET_KEY: process.env.NUXT_CLERK_SECRET_KEY,
    MUX_TOKEN_ID: process.env.MUX_TOKEN_ID,
    MUX_TOKEN_SECRET: process.env.MUX_TOKEN_SECRET,
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  }


})