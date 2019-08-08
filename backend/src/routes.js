const express = require('express')
const routes = express.Router()
const devController = require('./controller/devController')

routes.get(`/`, (req, res) => {
    return res.send(`Olá Mundo!`)
})

routes.post(`/devs`, devController.store
// (req, res) => {
//     console.log(req.body)

//     return res.json({ ok: true })}
)

module.exports = routes
