import { createClerkClient } from '@clerk/backend'
import { USER_ROLE } from '../types/user-role'


export default defineEventHandler(async (event) => {
    try {

        const { userId } = readBody(event)

        const config = useRuntimeConfig()
        const secretKey = config.NUXT_CLERK_SECRET_KEY
        const clerkClient = createClerkClient({ secretKey: secretKey })


        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: USER_ROLE.LEANER
            },
        })

    } catch (error) {
        throw createError({
            message: "failed to updated user role",
            statusCode: 500
        })
    }
})