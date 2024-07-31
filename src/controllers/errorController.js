module.exports = (error, req, res, next) => {
    error.statusCode = error.StatusCode || 500;
    error.status = error.status || 'error';
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
    })
}