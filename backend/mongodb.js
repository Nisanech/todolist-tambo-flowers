//Conexión de la BD con node js 
const mongoose = require("mongoose");

// Importar dotenv libreria para manejar las variables de entorno cuando se conecta con nopde js
const dotenv = require("dotenv");

// Método .config() para acceder al objeto process (variable global con inforacion y utilidades de los procesos ejecutados en node)
dotenv.config();

// Connecto to database
const connectDB = () => {
  // Método .connect de conexión para la base de datos
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });



  // Las siguientes funciones permiten determinar el estado de la base de datos: conectada, desconectada o error en la conexión
  mongoose.connection.on("connected", () => {
    console.log("Base de datos conectada");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Base de datos desconectada");
  });

  mongoose.connection.on("error", () => {
    console.log("Error al conectar la base de datos", error.message);
  });
};

module.exports = connectDB; //Se exporta la constante de conexión a la DB. 
