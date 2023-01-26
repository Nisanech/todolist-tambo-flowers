// Express js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Allows making HTTP requests
const cors = require("cors");

// PORT
const PORT = process.env.PORT || 5000

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

// Función para hacer uso de la conexión de la base de datos
connectDB();

// Routes for the requests
app.use("/api", todoRoute);

// Server port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
