const express = require("express");
const app = express();
const connectDB = require("./config/db");
const routes = require("./routes");
// Connecting to Database
connectDB();
app.use(express.json({ extended: false }));

// Define Routes here
app.use("/", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server Started"));
