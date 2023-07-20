const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const multerUpload = require("../middlewares/multer");
const { cloudinaryMiddleware } = require("../middlewares/cloudinary");
const validationMiddleware = require("../middlewares/validationMiddleware");



router.get("/getBlogs", blogController().getBlogs);
router.get("/getBlog/:id", blogController().getBlog);
router.put("/editBlog/:id", blogController().editBlog);
router.delete("/deleteBlog/:id", blogController().deleteBlog)
router.post("/addBlog", multerUpload, cloudinaryMiddleware, blogController().addBlog);


module.exports = router;