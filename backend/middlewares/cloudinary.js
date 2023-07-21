const cloudinary = require("cloudinary").v2;
const ErrorHandler = require("../utils/ErrorHandler");
const path = require("path");


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

async function cloudinaryUploader(file) {
    const fileType = file.mimetype.split("/")[0];
    const filePath = file.path;

    const data = new Promise((resolve, reject) => {
        cloudinary.uploader.upload_large(filePath, {
            resource_type: `${fileType}`,
            public_id: file.filename.split(".")[0]
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

async function deleteAllCloudinaryData() {
    try {
        const deleteResult = await cloudinary.api.delete_all_resources({ resource_type: 'video', type: 'upload' });
        console.log(`Deleted ${deleteResult.deleted} images from Cloudinary.`);
        // You can also delete videos in a similar way if needed:
        // const deleteResultVideos = await cloudinary.api.delete_all_resources({ resource_type: 'video', type: 'upload' });
        // console.log(`Deleted ${deleteResultVideos.deleted} videos from Cloudinary.`);
    } catch (error) {
        console.error('Error deleting data from Cloudinary:', error);
    }
}

// Call the deleteAllCloudinaryData function to delete all data from Cloudinary


function cloudinaryDeleter(url) {

    const fileUrl = url.split("/");
    const public_id = fileUrl[fileUrl.length - 1].split(".")[0];
    const fileType = public_id.split("-")[0];

    return new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(public_id, {
            resource_type: `${fileType}`
        }).then(({ result }) => {
            if (result == 'not found') {
                reject({
                    statusCode: 404,
                    success: false,
                    message: `The resource to be deleted was not found by cloudinary`
                });
            } else if (result == 'ok') {
                resolve({
                    statusCode: 200,
                    success: true,
                    message: `The Resource has been deleted successfully cloudinary`
                })
            }
        }).catch((error) => {
            reject({
                success: false,
                message: error
            })
        })
    })

}


const cloudinaryMiddleware = async (req, res, next) => {
    const { image, video } = req.files;


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

module.exports = { cloudinaryMiddleware, cloudinaryDeleter, cloudinaryUploader };