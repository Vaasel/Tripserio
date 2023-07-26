const mongoose = require("mongoose");
const validator = require("validator");


const blogSchema = new mongoose.Schema({
    data: {
        type: String,
        required: [true, "Text is required"]
    },


    featured_image: {
        type: String,
        required: [true, "Image  is required"]
    },



})

module.exports = mongoose.model("blog", blogSchema);