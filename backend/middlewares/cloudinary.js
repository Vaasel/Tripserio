const cloudinary = require("cloudinary").v2;
const ErrorHandler = require("../utils/ErrorHandler");
const path = require("path");


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const cloudinaryMiddleware = async (req, res, next) => {
    const { image, video } = req.files;



    async function cloudinaryUploader(file) {
        const fileType = file.mimetype.split("/")[0];
        const filePath = file.path;

        const data = new Promise((resolve, reject) => {
            cloudinary.uploader.upload_large(filePath, {
                resource_type: `${fileType}`
            }, (error, result) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(result.secure_url)

            })

        })
        try {
            let url = await data;
            return url
        } catch (error) {
            next(new ErrorHandler(error, 500));
        }

    }

    if (image && image[0]) {
        let url = await cloudinaryUploader(image[0])
        req.uploadedImage = url;

    }
    if (video && video[0]) {
        let url = await cloudinaryUploader(video[0])
        req.uploadedVideo = url;
    }





    next();
}

module.exports = cloudinaryMiddleware;