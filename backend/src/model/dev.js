const { Schema, model } = require('mongoose')

// Definido schema que será gravado dentro do bd
const DevSchema = new Schema({
    name:   { type: String, required: true },
    user:   { type: String, required: true },
    bio:    { type: String },
    avatar: { type: String, required: true }
},{
    timestamps: true
})

// Modelo sendo exportado
module.exports = model('dev', DevSchema)
