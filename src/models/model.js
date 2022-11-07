const mongoose = require('mongoose')
const { Schema } = mongoose

const PruebaSchema = new Schema({// Modelo de datos, Buena practica llamar los Schema con mayusculas
    name: String// Información base de datos
})

const PruebaModel = mongoose.model('pruebas', PruebaSchema)//Se crea el modelo para poder interactuarcon bd mongo

module.exports = PruebaModel