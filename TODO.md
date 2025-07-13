installed
 '@nuxt/image',
    '@unlok-co/nuxt-stripe',
,

- project installation

Modules installation

'@nuxt/ui',
'@nuxt/image',

'@unlok-co/nuxt-stripe'
,'@clerk/nuxt'

----------------------------
- add tailwind css
- all prisma package needed
- multer
---create error page

---------------------------------------------------------
- get userId,metadata
- If user has no metadata updated it(set role)















 npx prisma init : initialize prisma client
 npx prisma generate : generate prisma client
 migration : npx prisma migrate dev --name switch-to-uuid
npx prisma migrate reset




TO DO LIST
_______________

- payment (think and analyse what missed)
- think about ai agent

- edit and reach 6 stop [stop]



add this in all layouts
 <!-- <NuxtLoadingIndicator /> -->

 
- display payment
- dashboard














if course free
  //dont check payment
  //dont lock chapters
  //hide stripe element


if course paid
   //check if user has paid that course
      
      if not
         //lock chapters
         //show stripe element

      else
        //unlock chapters
        //hide stripe element

      