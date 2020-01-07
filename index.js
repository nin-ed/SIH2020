const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Connecting to Database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server Started"));
