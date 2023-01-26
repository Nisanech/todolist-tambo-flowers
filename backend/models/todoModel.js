// Se trae mongoose para conectarse a la DB
const mongoose = require("mongoose");
//Se crea la estructura de datos con el metodo mongoose.Schema que trae la información em forma de json
const Schema = mongoose.Schema;

// Se define la estructura de la colección de la BD
const TodoSchema = new Schema({
  //campo de nombre de la tarea conb su tipo 
  data: {
    type: String,
    required: true,
    trim: true,
  },
  //Campo de realizada la tarea
  done: {
    type: Boolean,
    default: false,
  },
  //Campo de visibilidad 
  visible: {
    type: Boolean,
    default: true,
  },
});
//Variable que enfrasca el modelo creado 🔝, le asigna nombre "Todo" y se le envia como parametro el Schema creado 
const Todo = mongoose.model("Todo", TodoSchema);

//Se exporta todo que contiene el esquema
module.exports = Todo;
