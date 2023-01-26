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
app.use("/", todoRoute);

app.get('/', (req, res) => {
  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todolist.czru9rw.mongodb.net/?retryWrites=true&w=majority`;

  // Método de conexión para la base de datos
  mongoose.connect(MONGODB_URI).then(() => {
    return res.status(200).send('Conexión db')
  }).catch(error => {
    return res.status(400).send('Error del catch')
  });
})

// Server port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
