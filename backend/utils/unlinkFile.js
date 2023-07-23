const path = require("path");
const fs = require("fs");
const ErrorHandler = require("../utils/ErrorHandler");



function unlinkFile(url, type) {

    const assestsDir = path.join(path.join(__dirname, ".."), "assests");
    // const { image, video } = urls;
    const fileUrl = url.split("/");;
    const fileName = fileUrl[fileUrl.length - 1];
    const filePath = path.join(assestsDir, `${type}/${fileName}`);

    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (error) => {
            if (error) {
                if (error.code == "ENOENT") {
                    reject({
                        statusCode: 404,
                        success: false,
                        message: "The File Does Not Exist on Server Folder"
                    });
                } else {
                    reject({
                        statusCode: 500,
                        success: false,
                        message: error
                    });
                }

            } else {
                resolve({
                    statusCode: 200,
                    success: true,
                    message: `File deleted`
                })
            }
        })
    })


}

module.exports = unlinkFile;