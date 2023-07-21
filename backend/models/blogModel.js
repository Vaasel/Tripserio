const mongoose = require("mongoose");
const validator = require("validator");


const blogSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Text is required"]
    },

    urls: {
        image: {
            type: String,
            required: [true, "Image  is required"]
        },
        video: {
            type: String
        }
    }

})

module.exports = mongoose.model("blog", blogSchema);