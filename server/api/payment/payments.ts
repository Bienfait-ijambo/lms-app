import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {


        const query = getQuery(event)
        const page = parseInt(query?.page as string) || 1
        const limit = parseInt(query?.limit as string) || 10
   
 
        const [payments, total] = await Promise.all([
            prisma.payment.findMany({

                include: {
                    course: {
                        select:{
                            id:true,
                            title:true
                        }
                    }
                },
                skip: (page - 1) * limit,
                take: limit,

            }),
            prisma.payment.count()


        ])



        return {
            payments, metadata: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            }
        }

    } catch (error) {
        throw createError({
            message: "failed to fetch payments",
            statusCode: 500,
            data:error?.message
        })
    }
})