import prisma from "~/lib/prisma";
import {  updatecategorySchema } from "./modules/validateCategoryInput";

export default defineEventHandler(async (event) => {
    try {

        const { name,id } = await readBody(event)


        const result = updatecategorySchema.safeParse({ name,id });

        if (!result.success) {
            throw createError({
                message: "Validation Failed",
                data: result.error?.flatten()?.fieldErrors,
            } as any);
        }

     

        const category = await prisma.category.update({
            where:{
                id:id
            },
            data: {
                name: name,
            },
        });


        return { message: "category updated", statusCode: 200 }

    } catch (error) {
        throw createError({
            message: "failed to update category",
            statusCode: 500,
            data:error
        })
    }
})