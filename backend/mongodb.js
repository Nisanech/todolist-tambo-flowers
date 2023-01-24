//Conexión de la BD 
const mongoose = require("mongoose");

const connectDB = () =>
  mongoose
    .connect("mongodb://127.0.0.1:27017/todolist", { //url de mongo con metodo para conexión 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected"))//luego verifica si la conexión se realizó 
    .catch(console.error);//si falla envia el error

module.exports = connectDB; //Se exporta la constante. 
