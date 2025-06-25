import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {

       
        const chapters = await prisma.chapter.findMany();
        return {  chapters }

    } catch (error) {
        throw createError({
            message: "failed to get chapters",
            statusCode: 500,
        data:(error as Error)?.message
        })
    }
})