import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {


        const query = getQuery(event)
        const page = parseInt(query?.page as string) || 1
        const limit = parseInt(query?.limit as string) || 10
        const search = query?.search as string

        const categoryFilter=[]

        //[1,2]
        // 1,2=["1","2"] =[0,1,2]
        // const categories=Array.isArray(query?.categories) ? query?.categories 
        // : ((query?.categories || '' ) as string).split(',')


  
        const [courses, total] = await Promise.all([
            prisma.course.findMany({
                where: search ? {
                    title: {
                        contains: search,
                        mode: 'insensitive'
                    }
                } : {},
                include:{
                    category:true
                },
                //1-1=0*10=0
                skip: (page - 1) * limit,
                take: limit,
            
            }),
            prisma.course.count({
                where: search ? {
                    title: {
                        contains: search,
                        mode: 'insensitive'
                    }
                } : {},

            })


        ])


        // [
            // {
            //     id:1,
            //     title:"",
            //     category:{
            //         id:"",
            //         name
            //     }
            // }
        // ]





        return {
            courses, metadata: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            }
        }

    } catch (error) {
        throw createError({
            message: "failed to get courses",
            statusCode: 500
        })
    }
})