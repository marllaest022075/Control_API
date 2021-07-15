const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = mongoose.model('User',new Schema({

    nombre: String,
    paterno: String,
    materno: String,
    email : String,
    password : String,
    salt: String,
}))
module.exports = Users