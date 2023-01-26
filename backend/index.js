// Se trae la librería de express
const express = require("express");
const mongoose = require("mongoose"); //!Cuál es el uso aqui? 
// Importar dotenv libreria para manejar las variables de entorno cuando se conecta con node js 
const dotenv = require("dotenv");
// Método .config() para acceder al objeto process (variable global con inforacion y utilidades de los procesos ejecutados en node)
dotenv.config();

// Traer cors | paquete para conectarse con express 
const cors = require("cors");

// Definición del puerto mediante el metodo .env de la libreria dotenv
const PORT = process.env.PORT || 5000

// Concexión con DB
const connectDB = require("./mongodb");

// Se traen las rutas.
const todoRoute = require("./routes/todoRoutes");

// Uso de Express enfrascando en variable app
const app = express();

// Uso de express con metodo .use / conversion de la respuesta de express a .json 
app.use(express.json());

// Use Cors
app.use(cors());

// Función para hacer uso de la conexión de la base de datos
connectDB();

// Uso de la ruta por defecto /api de todo route 
app.use("/api", todoRoute);

// Configuración del puerto con respuesta 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
