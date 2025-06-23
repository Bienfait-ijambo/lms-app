import prisma from "~/lib/prisma";
import { createCategorySchema } from "./modules/validateCategoryInput";

export default defineEventHandler(async (event) => {
    try {

        const { name } = await readBody(event)


        const result = createCategorySchema.safeParse({ name });

        if (!result.success) {
            throw createError({
                message: "Validation Failed",
                data: result.error?.flatten()?.fieldErrors,
            } as any);
        }

        const categoryExist = await prisma.category.findUnique({
            where: {
                name: name
            }
        })

        if (categoryExist) {
            throw createError({
                message: "This category has already been taken",
            });

        }

        const category = await prisma.category.create({
            data: {
                name: name,
            },
        });


        return { message: "category created", statusCode: 201, category }

    } catch (error) {
        throw createError({
            message: "failed to create category ",
            statusCode: 500,
            data:error
        })
    }
})