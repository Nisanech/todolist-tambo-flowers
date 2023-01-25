// Allows you to work with the database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Structure of the collection in the database
const TodoSchema = new Schema({
  data: {
    type: String,
    required: true,
    trim: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  visible: {
    type: Boolean,
    default: true,
  },
});

const todo = mongoose.model("todo", TodoSchema);

module.exports = todo;
