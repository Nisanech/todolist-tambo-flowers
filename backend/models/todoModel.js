//Permite trabajar con la base de datos
const mongoose= require('mongoose');

const Schema= mongoose.Schema

//Estructura de la colección en la base de datos
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