// Express js
const express = require("express");

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

app.get('/', (req, res) => {
  return res.status(200).send('Hola')
})

// Server port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
