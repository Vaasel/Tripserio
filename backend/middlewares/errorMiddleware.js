const ErrorHandler = require("../utils/ErrorHandler");

const errorMiddleware = (error, req, res, next) => {
    if (error) {


        if (error.name == "CastError") {
            message = `invalid id ${error.path}`;
            new ErrorHandler(message, 400);
        }

        if (error.code === 11000) {
            const message = `Duplicate ${Object.keys(error.keyValue)} Entered `
            error = new ErrorHandler(message, 400)
        }

        // if (error.name = 'jsonWebTokenError') {
        //     const message = `JsonWebToken is invalid ,Try again`
        //     error = new ErrorHandler(message, 400)
        // }

        // if (error.name = 'TokenExpiredError') {
        //     const message = `JsonWebToken is expired ,Try again`
        //     error = new ErrorHandler(message, 400)
        // }

        console.log(error)
        const statusCode = error.statusCode ? error.statusCode : 500;
        res.status(statusCode)
            .json({
                message: error.message,
                statusCode: error.statusCode,
                success: false,
            });
    }
};

module.exports = errorMiddleware;
