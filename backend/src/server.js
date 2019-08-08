const express = require('express');
const routes = require('./routes')
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://felipealvss:saxofone@cluster0-dfwub.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true })

const server = express();
const port = 3000 ;

server.use(express.json())
server.use(routes)

server.listen(port)
