

export default defineEventHandler(async (event) => {
    try {

        // validation

    } catch (error) {
        throw createError({
            message: "failed to create category",
            statusCode: 500
        })
    }
})