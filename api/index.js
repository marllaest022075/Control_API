const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const Auth = require('./routes/Auth')

const app = express()
app.use(cors())
app.use(bodyParser.json())
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true})

app.use('/api/auth/',Auth)


module.exports = app