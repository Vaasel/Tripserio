const blogModel = require("../models/blogModel");
const successHandler = require("../utils/successHandler");
const ErrorHandler = require("../utils/ErrorHandler");
const unlinkFile = require("../utils/unlinkFile");
const { cloudinaryDeleter, cloudinaryUploader } = require("../middlewares/cloudinary");

function blogController() {


    return {
        async getBlog(req, res, next) {
            try {
                const id = req.params.id;
                let data = await blogModel.findById(id)

                if (!data) {
                    throw new ErrorHandler("the blog does not exist", 401)
                }

                successHandler(res, 200, data);
            } catch (error) {
                next(error)
            }



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
            try {
                let text = req.body.text;


                const blog = new blogModel({
                    text,

                    urls: {
                        image: req.uploadedImage ? req.uploadedImage : undefined,
                        video: req.uploadedVideo ? req.uploadedVideo : undefined
                    }
                })

                let validationError = blog.validateSync();
                if (validationError) {
                    if (req.uploadedImage) {
                        await cloudinaryDeleter(req.uploadedImage);
                        await unlinkFile(req.uploadedImage, "image");

                    }

                    if (req.uploadedVideo) {
                        await cloudinaryDeleter(req.uploadedVideo);
                        await unlinkFile(req.uploadedVideo, "video");

                    }

                    // throw new ErrorHandler(validationError.message, 401)
                }

                await blog.save();
                successHandler(res, 200, "Blog Created Successfully")

            } catch (error) {
                next(error)
            }



        },

        async editBlog(req, res, next) {
            try {
                const id = req.params.id;
                const text = req.body.text;
                const { image: imageFiles, video: videoFiles } = req.files;


                let imageUrl;
                let videoUrl;

                let blog = await blogModel.findById(id);
                if (!blog) {
                    if (image) {
                        await unlinkFile(image, "image");

                    }

                    if (video) {
                        await unlinkFile(video, "video");

                    }
                    throw ErrorHandler(`Blog does not exist`, 401)
                }
                const { image: prevImage, video: prevVideo } = blog.urls;
                if (imageFiles && imageFiles[0] && prevImage) {
                    await cloudinaryDeleter(prevImage);

                    await unlinkFile(prevImage, "image");
                    imageUrl = await cloudinaryUploader(imageFiles[0])
                }

                if (videoFiles && videoFiles[0] && prevVideo) {
                    await cloudinaryDeleter(prevVideo);
                    await unlinkFile(prevVideo, "video");
                    videoUrl = await cloudinaryUploader(videoFiles[0])

                }

                const updateBlog = {
                    text: text ? text : blog.text,
                    urls: {
                        image: imageUrl ? imageUrl : prevImage,
                        video: videoUrl ? videoUrl : prevVideo
                    }
                }
                await blogModel.updateOne({ _id: id }, updateBlog, { runValidators: true });
                successHandler(res, 200, `updated successfully`)
            } catch (error) {
                next(error);
            }


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

                successHandler(res, 200, `the files were deleted successfully`);


            } catch (error) {
                next(error)
            }
        },

        async deleteAllBlogs(req, res, next) {
            let data = await blogModel.deleteMany({});
            if (data) {
                successHandler(res, 200, "All Blogs Deleted")
            }
        }

    }
}

module.exports = blogController;