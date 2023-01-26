// traer Express js y enfrascar en una variable
const express = require("express");

// Traer cors | paquete para conectarse con express 
const cors = require("cors");

// Concexión con DB 
const connectDB = require("./mongodb");

// Traer las rutas
const todoRoute = require("./routes/todoRoutes");

// Uso de Express enfrascando en variable app
const app = express();

// Uso de express con metodo .use / conversion de la respuesta de express a .json 
app.use(express.json());

// Uso de cors 
app.use(cors());

//Inicio de la conexión con la DB
connectDB();

// Uso de la ruta por defecto /api de todo route 
app.use("/api", todoRoute); 

// Configuración del puerto con respuesta 
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
