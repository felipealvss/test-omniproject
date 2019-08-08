const express = require('express');
const routes = require('./routes')
const mongoose = require('mongoose')

// Conecção estabelecida no bd mongoDB
mongoose.connect(`mongodb+srv://felipealvss:saxofone@cluster0-dfwub.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true })

const server = express();
const port = 3000 ;

server.use(express.json())
// Definido uso para rotas de requisição
server.use(routes)

server.listen(port)
