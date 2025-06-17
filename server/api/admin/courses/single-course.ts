import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {

        const query=getQuery(event)
        const slug=query?.slug as string
     
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


        return {  statusCode: 200, course }

    } catch (error) {
        throw createError({
            message: "failed fetch course ",
            statusCode: 500
        })
    }
})