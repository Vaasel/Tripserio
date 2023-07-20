const blogModel = require("../models/blogModel");
const successHandler = require("../utils/successHandler");
const ErrorHandler = require("../utils/ErrorHandler");
const unlinkFile = require("../utils/unlinkFile");
const { cloudinaryDeleter } = require("../middlewares/cloudinary");

function blogController() {


    return {
        async getBlog(req, res, next) {
            const id = req.params.id;
            let data = await blogModel.findById(id)

            if (!data) {
                throw new ErrorHandler("the blog does not exist", 401)
            }

            successHandler(res, 200, data);


        },

        async getBlogs(req, res, next) {
            try {
                let data = await blogModel.find({});
                if (data) {
                    successHandler(res, 200, data)
                }
            } catch (error) {
                next(error);
            }
        },
        async addBlog(req, res, next) {
            const { text } = req.body;
            const image = req.uploadedImage;
            const video = req.uploadedVideo;
            try {

                const blog = new blogModel({
                    text,
                    urls: {
                        image: req.uploadedImage ? req.uploadedImage : undefined,
                        video: req.uploadedVideo ? req.uploadedVideo : undefined
                    }
                })

                let validationError = blog.validateSync();
                if (validationError) {
                    if (image) {
                        await cloudinaryDeleter(image);
                        await unlinkFile(image, "image");

                    }

                    if (video) {
                        await cloudinaryDeleter(video);
                        await unlinkFile(video, "video");

                    }

                    throw new ErrorHandler(validationError.message, 401)
                }

                await blog.save();
                successHandler(res, 200, "Blog Created Successfully")

            } catch (error) {
                next(error)
            }



        },

        async editBlog(req, res) {

        },

        async deleteBlog(req, res, next) {
            const id = req.params.id;
            try {
                let data = await blogModel.findByIdAndDelete(id);
                if (!data) {
                    throw new ErrorHandler("the blog does not exist", 401)
                }
                const { image, video } = data.urls;
                let success = {
                    sImage: false,
                    sVideo: false
                }

                if (image) {
                    await cloudinaryDeleter(image);
                    await unlinkFile(image, "image");
                    success.sImage = true;
                }

                if (video) {
                    await cloudinaryDeleter(video);
                    await unlinkFile(video, "video");
                    success.sVideo = true;
                }

                if (image && !success.sImage) {
                    throw new ErrorHandler(`Something went wrong the image was not deleted successfully`, 500);
                }
                if (video && !success.sVideo) {
                    throw new ErrorHandler(`Something went wrong the image was not deleted successfully`, 500);
                }

                successHandler(res, `the files were deleted successfully`, 200);


            } catch (error) {
                next(error)
            }
        }

    }
}

module.exports = blogController;