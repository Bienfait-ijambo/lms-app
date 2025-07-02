import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    try {


        const query = getQuery(event)
        const page = parseInt(query?.page as string) || 1
        const limit = parseInt(query?.limit as string) || 10
        const search = query?.search as string

        const filters = []
        
        const categories = Array.isArray(query?.categories)
            ? query?.categories : ((query?.categories || '') as string)
            .split(',').map(item=>item.trim()).filter(Boolean)

        if (categories && categories.length > 0) {
            filters.push({
                categoryId: {
                    in: [...categories]
                }
            })
        }
       
        if (search && search.trim() !== '') {
            filters.push({
                title: {
                    contains: search,
                    mode: 'insensitive'
                }
            })
        }

        //    select * from "courses" where title like '%%' or categoryId in(1,2)

        const [courses, total] = await Promise.all([
            prisma.course.findMany({

                where:filters.length>0 ? {
                    OR: [...filters as any]
                }:{},
               
                include: {
                    category: true
                },
                //1-1=0*10=0
                skip: (page - 1) * limit,
                take: limit,

            }),
            prisma.course.count({
                 where:filters.length>0 ? {
                    OR: [...filters as any]
                }:{},

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