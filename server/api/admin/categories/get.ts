import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {

       
        const categories = await prisma.category.findMany();
        return {  categories }

    } catch (error) {
        throw createError({
            message: "failed to get categories",
            statusCode: 500
        })
    }
})