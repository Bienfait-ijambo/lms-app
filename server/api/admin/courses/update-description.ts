import prisma from "~/lib/prisma";
import { generateSlug } from "~/utils/generateSlug";
import { ZodError } from "zod";
import { updateCourseDescriptionSchema } from "./modules/validateCourseInput";

export default defineEventHandler(async (event) => {
    try {

        const { id,description } = await readBody(event)


        const result = updateCourseDescriptionSchema.safeParse({ id,description });

        if (!result.success) {
            throw createError({
                message: "Validation Failed",
                data: result.error?.flatten()?.fieldErrors,
               
            } as any);
        }

        const course = await prisma.course.update({
            where:{
                id:id
            },
            data: {
              
                description: description,
            },
        });


        return { message: "Course  descripton updated successfully", statusCode: 201, course }

    } catch (error) {
        
    throw createError({
            message: "failed to update a course description ",
            statusCode: 500,
            data:error
        })
    }
})