import Mux from '@mux/mux-node';

const client = new Mux({
//   tokenId: process.env.MUX_TOKEN_ID!,
//   tokenSecret: process.env.MUX_TOKEN_SECRET!,
tokenId: '3ab4c4b4-5985-4067-aaa1-4255a3e91698',
  tokenSecret: 'q4+b7NpcN7/NaIArZp8e8eB5W5WJzHfLrCH/eGiYcShCn0+maMPZgD2b0WCmbb5+5tSXxLYIjIW',
})


export default defineEventHandler(async () => {
  // List assets, default limit is 10
  const assets = await client.video.assets.list({
    limit: 100, // increase if needed, max 1000 per request
  })

  return assets.data // an array of asset objects
})

// export default defineEventHandler(async () => {
//   const upload = await client.video.uploads.create({
//     new_asset_settings: {
//       playback_policy: ['public'],
//     },
//     cors_origin: '*', // in production: your domain
//   })

//   return {
//     uploadUrl: upload.url,
//     uploadId: upload.id,
//   }
// })