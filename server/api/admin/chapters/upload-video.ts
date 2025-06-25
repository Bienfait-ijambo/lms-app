import Mux from '@mux/mux-node';


export default defineEventHandler(async () => {

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

    return {
        uploadUrl: upload.url,
        uploadId: upload.id,
    }
})