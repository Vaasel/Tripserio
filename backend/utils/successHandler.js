function successHandler(res, status, message) {
    res.status(status).send({
        success: true,
        message: message
    })
}

module.exports = successHandler;