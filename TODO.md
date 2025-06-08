installed
 '@nuxt/image',
    '@unlok-co/nuxt-stripe',
'@pinia/nuxt',

- project installation

Modules installation

'@nuxt/ui',
'@nuxt/image',
'@pinia/nuxt',
'@unlok-co/nuxt-stripe'
,'@clerk/nuxt'

----------------------------
- add tailwind css
- all prisma package needed
- multer
---create error page


import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default <Partial<Config>>{
  theme: {},
  content: [],
  plugins: [typography()],
}


export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  }
})
