import prisma from "~/lib/prisma";
import { generateSlug } from "~/utils/generateSlug";
import { createChapterInput } from "./modules/validateChapterInput";

export default defineEventHandler(async (event) => {
    try {

        const { title,courseId } = await readBody(event)


        const result = createChapterInput.safeParse({ title,courseId });

        if (!result.success) {
            throw createError({
                message: "Validation Failed",
                data: result.error?.flatten()?.fieldErrors,
            } as any);
        }

        const slug=generateSlug(title)
        const chapter = await prisma.chapter.create({
            data: {
                title: title,
                courseId: courseId,
                slug:slug
            },
        });


        return { message: "chapter  created successfully", statusCode: 201, chapter }

    } catch (error) {
        throw createError({
            message: "failed to create a chapter ",
            statusCode: 500,
             data:error
        })
    }
})