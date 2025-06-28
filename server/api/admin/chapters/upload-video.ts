import Mux from '@mux/mux-node';
import prisma from '~/lib/prisma';


export default defineEventHandler(async (event) => {
try {

    
    const {chapterId}=await readBody(event)
    const config = useRuntimeConfig()


    const client = new Mux({
        tokenId: config.MUX_TOKEN_ID,
        tokenSecret: config.MUX_TOKEN_SECRET,

    })

    const upload = await client.video.uploads.create({
        new_asset_settings: {
            playback_policy: ['public'],
        },
        cors_origin: '*', // in production: your domain
    })

    const chapterVideo=await prisma.chapter.update({
        where:{
            id:chapterId,
        },
        data:{
            videoUrl:upload.id
        }
    })

    return{
     
        uploadUrl:upload?.url,
        uploadId:upload?.id,
        message:"Chapter video uploaded successfully !"
    }


    
} catch (error) {
    throw createError({
        message:(error as Error)?.message,
        data:error
    })
}
    
})

