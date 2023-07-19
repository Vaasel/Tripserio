const blogModel = require("../models/blogModel");
const upload = require("../middlewares/multer");
const successHandler = require("../utils/successHandler")

function blogController() {


    return {
        async getBlog(req, res, next) {
            const id = req.params.id;
            let data = await blogModel.find({ _id: id })
            if (!data) {
                new ErrorHandler("the blog does not exist", 401);
                return;
            }

            successHandler(res, 200, data);


        },
        async getBlogs(req, res) {
            let data = await blogModel.find({});
            if (data) {
                successHandler(res, 200, data)
            }
        },
        async addBlog(req, res, next) {
            const { text } = req.body;
            try {

                const blog = new blogModel({
                    text,
                    urls: {
                        image: req.uploadedImage ? req.uploadedImage : "N/A",
                        video: req.uploadedVideo ? req.uploadedVideo : "N/A"
                    }
                })
                console.log(blog);
                await blog.save();
                successHandler(res, 200, "Blog Created Successfully")

            } catch (error) {
                next(error)
            }



        },

        async editBlog(req, res) {

        },

        async deleteBlog(req, res) {

        }

    }
}

module.exports = blogController;