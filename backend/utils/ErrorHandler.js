class ErrorHandler extends Error {
    statusCode;
    message;
    constructor(msg, statusCode) {
        super(msg);
        this.message = msg;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }


}

module.exports = ErrorHandler;