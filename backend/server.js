// Framework backend Node js
const express = require("express");

// Peticiones HTTP
const cors = require("cors");

// Conexión de la base de datos
const connectDB = require("./mongodb");

// Importar rutas
const todoRoute = require("./routes/todoRoutes");

// App
const app = express();

app.use(express.json());

app.use(cors());

connectDB();

app.use("/api", todoRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
