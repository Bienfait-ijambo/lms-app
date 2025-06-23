import multer from 'multer'
import path from 'path'
import fs from 'fs'
import prisma from '~/lib/prisma'


// Setup multer disk storage
const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: (...args: any[]) => any) {
        const uploadDir = './public/uploads/'

        // Create the upload directory if it doesn't exist
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true })
        }

        cb(null, uploadDir)
    },
    //   java.jpg=33939393449.jp
    filename: function (req: any, file: any, cb: (...args: any[]) => any) {
        cb(null, Date.now() + path.extname(file.originalname)) // Unique filename
    },
})


// ✅ Allow only images (jpg, jpeg, png, gif, webp)
const imageFileFilter = (req: any, file: any, cb: (...args: any[]) => any) => {
    const allowedTypes = /jpeg|avif|jpg|png|webp/
    const isImage = allowedTypes.test(file.mimetype)

    if (isImage) {
        cb(null, true)
    } else {
        cb(new Error("Invalid file extension"), false)
    }
}


const upload = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } // 2MB
})
    .fields([
        { name: 'file', maxCount: 1 },
        { name: 'courseId', maxCount: 1 },
    ])


async function uploadCourseImage(event: any) {



    return new Promise<{ imageUrl: string, courseId: string }>((resolve, reject) => {
        upload(event.req, event.res, async (err: any) => {

            if (err) {
                reject(err)
            }

            const file = event.req.files?.['file']?.[0];
            const courseId = event.req.body?.courseId

            if (!file || !courseId) {
                reject(new Error("Missing file or courseId"));
                return;
            }


            const imageUrl = `/uploads/${file.filename}`;
            resolve({ imageUrl, courseId });

        })
    })
}

export default defineEventHandler(async (event) => {

    const { imageUrl, courseId } = await uploadCourseImage(event)

    await prisma.course.update({
        where: {
            id: courseId
        },
        data: {
            imageUrl: imageUrl,
        }
    })


    return { message: ' image uploaded' };

})

