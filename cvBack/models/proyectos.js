const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let proyectoShema = new Schema({
    titulo: String,
    descripcion:String, 
    url:String,
    repo:String,
    cliente:String,
    imagen:String,
    categoria:{
        type:String,
        enum:['Angular','Html/CSS/JS','MEAN']
    }

});

module.exports = mongoose.model('Proyecto', proyectoShema)