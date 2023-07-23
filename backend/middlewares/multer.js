const path = require("path");
const multer = require("multer");
const mime = require("mime")
const ErrorHandler = require("../utils/ErrorHandler")



const assestsDir = path.join(path.join(__dirname, ".."), "assests");
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            const fileType = file.mimetype.split("/")[0]
            if (fileType == "image") {
                cb(null, `${assestsDir}/image`)
            } else {
                cb(null, `${assestsDir}/video`)
            }

        },

        filename(req, file, cb) {
            let mediaName = file.fieldname + "-" + Date.now() + "." + file.originalname.split(".")[1];
            cb(null, mediaName);

        },


    })
    ,

    limits: {
        fileSize: 10000000// 10 MB
    },

    fileFilter(req, file, cb) {
        const fileType = file.mimetype.split("/")
        const validImageFormats = [
            "jpg",
            "jpeg",
            "png",
            "gif",
            "bmp",
            "tiff",
            "webp",
            "ico",
        ];

        const validVideoFormats = [
            "mp4"
        ];



        if (fileType[0] != "image" && fileType[0] != "video") {
            cb(new ErrorHandler("You can only upload Images and Videos", 415), false)
        } else if (fileType[0] == "video" && !validVideoFormats.includes(fileType[1].toLowerCase())) {
            cb(new ErrorHandler("Not a valid format only mp4 videos are allowed", 415), false)
        } else if (fileType[0] == "image" && !validImageFormats.includes(fileType[1].toLowerCase())) {
            cb(new ErrorHandler("Not a valid image format preferred formate are png,jpg,jpeg", 415), false)
        } else {
            cb(null, true)

        }

    }
}).fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 }
])


module.exports = upload;