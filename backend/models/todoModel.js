// Allows you to work with the database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Structure of the collection in the database
const TodoSchema = new Schema({
  // Información o nombre de la tarea
  data: {
    type: String,
    required: true,
    trim: true,
  },
  // Indica si la tarea fue completada o no
  done: {
    type: Boolean,
    default: false,
  },
  // Indica si la tarea fue eliminada o no
  visible: {
    type: Boolean,
    default: true,
  },
});

const todo = mongoose.model("todo", TodoSchema);

module.exports = todo;
