import { createClerkClient } from '@clerk/backend'


export default defineEventHandler(async (event) => {
    try {
// userId,
// courseId


        // const query= getQuery(event)
        // const userId=query?.userId as string
    

        // const config = useRuntimeConfig()
        // const secretKey = config.NUXT_CLERK_SECRET_KEY
        // const clerkClient = createClerkClient({ secretKey: secretKey })



    } catch (error) {
        throw createError({
            message: "failed to process payment",
            statusCode: 500
        })
    }
})