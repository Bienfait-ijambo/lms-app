import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {

         const { userId } = event.context.auth()

  // Protect the API route by checking if the user is signed in
  if (!userId) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: No user ID provided',
    })
  }
       
        const categories = await prisma.category.findMany();
        return {  categories }

    } catch (error) {
        throw createError({
            message: "failed to get categories",
            statusCode: 500
        })
    }
})