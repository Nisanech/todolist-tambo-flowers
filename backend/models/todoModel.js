//Permite trabajar con la base de datos
const mongoose= required('mongoose')

const Schema= mongoose.Schema

//Estructura de la colección en la base de datos
const TodoSchema= new Schema({
    title:{
        type:String,
        required:true,
        trim:true//Permite eliminar espacios cuando se agrega información
    },
    completed:{
        type:Boolean,
        default:false,
    },
    visible:{
        type:Boolean,
        default:false,
    }
})

const Todo = mongoose.model('Todo',TodoSchema)

module.exports = Todo