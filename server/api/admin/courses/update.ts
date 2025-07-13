import prisma from "~/lib/prisma";
import { generateSlug } from "~/utils/generateSlug";
import { updateCourseSchema } from "./modules/validateCourseInput";
import { ZodError } from "zod";

export default defineEventHandler(async (event) => {
    try {

        const { id,title,categoryId,price,description,status } = await readBody(event)


        const result = updateCourseSchema.safeParse({ id,title,categoryId,price,description });

        if (!result.success) {
            throw createError({
                message: "Validation Failed",
                data: result.error?.flatten()?.fieldErrors,
               
            } as any);
        }

        const slug=generateSlug(title)
        const course = await prisma.course.update({
            where:{
                id:id
            },
            data: {
                title: title,
                categoryId: categoryId,
                price: price,
                status:status,
                // description: description,
                // slug:slug
            },
        });


        return { message: "course  updated successfully", statusCode: 201, course }

    } catch (error) {
        
    throw createError({
            message: "failed to update a course ",
            statusCode: 500,
            data:error
        })
    }
})