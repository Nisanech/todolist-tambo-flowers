// Express js
const express = require("express");

// Allows making HTTP requests
const cors = require("cors");

// Database connection
const connectDB = require("./mongodb");

// Routes
const todoRoute = require("./routes/todoRoutes");

// Express application
const app = express();

// Use express
app.use(express.json());

// Use Cors
app.use(cors());

connectDB();

// Routes for the requests
app.use("/api", todoRoute);

// Server port
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
