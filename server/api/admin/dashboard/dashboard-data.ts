


import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {



        const [totalAmount, totalPayment,totalAmoutByDate] = await Promise.all([
            prisma.payment.aggregate({
                _sum: {
                    amount: true,
                },
            }),

            //total payments
            prisma.payment.count(),



            prisma.payment.groupBy({
                by: ['createdAt'],
                _sum: {
                    amount: true
                },
                orderBy: {
                    createdAt: 'asc'
                }
            }),


        ])



        return {
            totalAmount,
            totalPayment,
            totalAmoutByDate
            
        }

    } catch (error) {
        throw createError({
            message: "failed to dashboard data",
            statusCode: 500,
            // data: error?.message
        })
    }
})