const errorHandler = (err, req, res, next) => {
    console.error(err);

    // Duplicate email or another unique field
    if (err.code === 11000) {
        return res.status(409).json({
            success: false,
            message: "Resource already exists"
        });
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }

    // Invalid MongoDB ObjectId
    if (err.name === "CastError") {
        return res.status(400).json({
            success: false,
            message: "Invalid resource ID"
        });
    }

    return res.status(err.statusCode || 500).json({
        success: false,
        message: err.statusCode ? err.message : "Internal server error"
    });
};

module.exports = errorHandler;