import { createClerkClient } from "@clerk/backend";
import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {

        const query=getQuery(event)
        const slug=query?.slug as string

        
          const config = useRuntimeConfig()
                const secretKey = config.NUXT_CLERK_SECRET_KEY
                const clerkClient = createClerkClient({ secretKey: secretKey })
        


        const course = await prisma.course.findFirst({
            where:{
                slug:slug
            },
            include:{
                category:true
            }
        });
        
        
               
        if(!course){
            throw createError({
                statusMessage:'course not found',
                statusCode:404
            })
        }

        
               const user= await clerkClient.users.getUser(course?.userId)

       
        return {  statusCode: 200, course,user }

    } catch (error) {
        throw createError({
            message: "failed fetch course ",
            statusCode: 500
        })
    }
})