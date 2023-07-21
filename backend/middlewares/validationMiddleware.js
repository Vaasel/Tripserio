const ErrorHandler = require("../utils/ErrorHandler")

function validationMiddleware(req, res, next) {
    try {
        console.log(req.body)
        // if (!files.image) {
        //     throw new ErrorHandler(`Image is required`, 401)
        // } else if (text.length < 1) {
        //     throw new ErrorHandler(`Text is required`, 401)
        // }
        // next();
    } catch (error) {
        next(error)
    }

}
module.exports = validationMiddleware;