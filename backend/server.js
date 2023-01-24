//Almacena libreria express en una variable de direccionamiento. 
const express = require("express"); //framework de trabajo 
const app = express();

const cors = require("cors"); //peticiones http 

const connectDB = require("./mongodb"); //importa conexion de la bd 

const todoRoute = require("./routes/todoRoutes"); //Rutas 

app.use(express.json()); //respuesta de express se convierte a json 

// Use Cors
app.use(cors());

connectDB();

app.use("/api", todoRoute); 

app.listen(5000, () => {//verificar que el puerto este activado 
  console.log("Server is running on port 5000");
});
