import prisma from "~/lib/prisma";
import { createCourseSchema } from "./modules/validateCourseInput";
import { generateSlug } from "~/utils/generateSlug";
import { secureEndpoint } from "~/utils/secureEndpoint";

export default secureEndpoint(async (event) => {
    try {

        const { title,categoryId,userId,status } = await readBody(event)


        const result = createCourseSchema.safeParse({ title,categoryId,userId });

        if (!result.success) {
            throw createError({
                message: "Validation Failed",
                data: result.error?.flatten()?.fieldErrors,
            } as any);
        }

        const slug=generateSlug(title)
        const course = await prisma.course.create({
            data: {
                title: title,
                categoryId: categoryId,
                userId: userId,
                slug:slug,
                status:status
            },
        });


        return { message: "course  created successfully", statusCode: 201, course }

    } catch (error) {
        throw createError({
            message: "failed to create a course ",
            statusCode: 500,
             data:error
        })
    }
})