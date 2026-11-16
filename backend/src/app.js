const express = require("express");

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "To-Do API is running"
    });
});

module.exports = app;