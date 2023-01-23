// Allows you to work with the database
const mongoose= require('mongoose');
const Schema= mongoose.Schema

// Structure of the collection in the database
const TodoSchema= new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false,
    },
    visible:{
        type:Boolean,
        default:true,
    }
})

const Todo = mongoose.model('Todo',TodoSchema)

module.exports = Todo