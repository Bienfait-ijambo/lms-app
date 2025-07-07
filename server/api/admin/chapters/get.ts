import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {

            const query=getQuery(event)
        const courseId=query?.courseId as string

        const chapters = await prisma.chapter.findMany({
            where:{
                courseId:courseId
            }
        });
        return {  chapters }

    } catch (error) {
        throw createError({
            message: "failed to get chapters",
            statusCode: 500,
            data:(error as Error)?.message
        })
    }
})