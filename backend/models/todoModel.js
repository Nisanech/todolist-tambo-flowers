//Permite trabajar con la base de datos
//Mongoos = biblioteca de programación orientada a objetos de JavaScript que crea una conexión entre MongoDB y el entorno de tiempo de ejecución de JavaScript de Node.js.
const mongoose= require('mongoose'); //se trae la biblioteca y se asigna a una variable 

const Schema= mongoose.Schema // método para crear una instancia del esquema(schema) utilizando mongoose. Esta intancia se alterará después. 

//Estructura de la colección en la base de datos que toma la instancia definida antes 🔝 y define la estructura que tendrá el documento que se almacena en la BD
const TodoSchema = new Schema({
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
//Se crea una variable Todo que almacene el modelo del esquema| dentro de parentesis recibe el tombre del esquema "Todo" y se envia el objeto esquema definido arriba 🔝
const Todo = mongoose.model('Todo',TodoSchema);

//Se exporta el esquema alcenado en la variable Todo 
module.exports = Todo 

//---->Sigue en controller<------ 