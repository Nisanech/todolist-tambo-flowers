// Import MongoDB
const mongoose = require("mongoose");

// Importar dotenv para las variables de entorno para la conexión de la base de datos
const dotenv = require("dotenv");
dotenv.config();

// Usuario y contraseña para la conexión de la base de datos
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// Connecto to database
const connectDB = () => {
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todolist.czru9rw.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

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

module.exports = connectDB;
