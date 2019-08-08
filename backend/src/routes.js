const express = require('express')
const routes = express.Router()
const devController = require('./controller/devController')

// Rotas base definidas dentro desse arquivo

routes.get(`/`, (req, res) => {
    return res.send(`Olá Mundo!`)
})

routes.post(`/devs`, devController.store
// (req, res) => {
//     console.log(req.body)

//     return res.json({ ok: true })}
)

// exportação de rotas e requisições
module.exports = routes
