import Mux from '@mux/mux-node';
import prisma from '~/lib/prisma';


export default defineEventHandler(async (event) => {
    try {

        const query = getQuery(event)
        const videoUrl = query?.videoUrl as string

        const config = useRuntimeConfig()


        const client = new Mux({
            tokenId: config.MUX_TOKEN_ID,
            tokenSecret: config.MUX_TOKEN_SECRET,

        })

        const upload = await client.video.uploads.retrieve(videoUrl)
        if (!upload.asset_id) {
            return {
                message: "video still uploading or processing",
                status: upload.status
            }
        }

        const [asset, chapter] = await Promise.all([
            client.video.assets.retrieve(upload.asset_id),
            prisma.chapter.findFirst({
                where: {
                    videoUrl: videoUrl
                }
            })
        ])

        return {
            assetId: asset.id,
            playbackId: asset.playback_ids?.[0]?.id,
            status: asset.status,
            duration: asset.duration,
            created_at: asset.created_at,
            aspect_ratio: asset.aspect_ratio,
            chapter
        };



    } catch (error) {
        throw createError({
            message: (error as Error)?.message,
            data: error
        })
    }

})

