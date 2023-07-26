const blogModel = require("../models/blogModel");
const successHandler = require("../utils/successHandler");
const ErrorHandler = require("../utils/ErrorHandler");
const unlinkFile = require("../utils/unlinkFile");
const { cloudinaryDeleter, fileNameFromCloudinary, cloudinaryUploader } = require("../middlewares/cloudinary");
const path = require("path");
const base64 = require('node-base64-image');
var base64Img = require('base64-img');


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


                let data = req.body.data;

                const blog = new blogModel({
                    data,
                    featured_image: req.uploadedImage ? req.uploadedImage : undefined,
                })



                let validationError = blog.validateSync();
                if (validationError) {
                    if (req.uploadedImage) {
                        await cloudinaryDeleter(req.uploadedImage);
                        let filename = fileNameFromCloudinary(req.uploadedImage);
                        await unlinkFile(filename, "image");
                    }

                    throw new ErrorHandler(validationError.message, 401)
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
                const data = req.body.data;
                const image = req.file;


                let imageUrl;

                let blog = await blogModel.findById(id);
                if (!blog) {

                    if (image) {

                        await unlinkFile(image.filename, "image");

                    }

                    throw new ErrorHandler(`Blog does not exist`, 401)
                }
                const { featured_image: prevImage } = blog;
                if (image && prevImage) {
                    await cloudinaryDeleter(prevImage);
                    let filename = fileNameFromCloudinary(prevImage);
                    await unlinkFile(filename, "image");
                    imageUrl = await cloudinaryUploader(image)
                }



                const updateBlog = {
                    data: data ? data : blog.data,
                    featured_image: imageUrl ? imageUrl : prevImage

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
                const { featured_image } = data;

                let success = false;

                if (featured_image) {
                    await cloudinaryDeleter(featured_image);
                    let filename = fileNameFromCloudinary(featured_image);
                    await unlinkFile(filename, "image");
                    success = true;
                }


                if (featured_image && !success) {
                    throw new ErrorHandler(`Something went wrong the image was not deleted successfully`, 500);
                }


                successHandler(res, 200, `the files were deleted successfully`);


            } catch (error) {
                next(error)
            }
        },


    }
}

module.exports = blogController;