const express = require("express");


const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middleware/error.middleware");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "To-Do API is running"
    });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Global error handler
app.use(errorHandler);

module.exports = app;