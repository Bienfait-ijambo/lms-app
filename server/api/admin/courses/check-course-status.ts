import { createClerkClient } from "@clerk/backend";
import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {

        const query = getQuery(event)
        const slug = query?.slug as string
        const userId = query?.userId as string


        // const config = useRuntimeConfig()
        // const secretKey = config.NUXT_CLERK_SECRET_KEY
        // const clerkClient = createClerkClient({ secretKey: secretKey })


        let lockChapters = false

        const course = await prisma.course.findFirst({
            where: {
                slug: slug
            },
            include: {
                category: true
            }
        });


        if (!course) {
            throw createError({
                statusMessage: 'course not found',
                statusCode: 404
            })
        }


        
        if (course.status === 'free') {
            lockChapters = false
        }

        if (course.status === 'paid') {

    
            const paymentData = await prisma.payment.findFirst({
                where: {
                    userId: userId,
                    courseId: course.id
                }
            })

            if (!paymentData) {
                lockChapters = true
            } else {
                lockChapters = false
            }
        }



        return { statusCode: 200,  lockChapters }

    } catch (error) {
        throw createError({
            message: "failed fetch course ",
            statusCode: 500
        })
    }
})