// Import MongoDB
const mongoose = require("mongoose");

// Importar dotenv para las variables de la conexión de la base de datos
const dotenv = require("dotenv");

// Método para configurar las variables conexión a la base de datos
dotenv.config();

// Usuario y contraseña para la conexión de la base de datos
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// Connecto to database
const connectDB = () => {
  // URL de la base de datos creada en MongoDB Atlas, esta URL se genera directamente en dicha plataforma.
  const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todolist.czru9rw.mongodb.net/?retryWrites=true&w=majority`;

  // Método de conexión para la base de datos
  mongoose.connect(MONGODB_URI, {
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

module.exports = connectDB;
