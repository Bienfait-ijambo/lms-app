import prisma from "~/lib/prisma";
import { secureEndpoint } from "~/utils/secureEndpoint";

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