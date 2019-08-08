const axios = require('axios')
const Dev = require('../model/dev')

module.exports = {
    async store(req, res) {
        const { username } = req.body // definindo uma constante contaendo o username obtido na requisição

        // Definido uma lógica para ser sefinida quando já houver uma requisição de meso usuario anterior
        const userExists = await Dev.findOne({ user: username })

        if(userExists){
            return res.json(userExists)
        }

        // Requisição para API
        const response = await axios.get(`https://api.github.com/users/${username}`)

        // Constantes com dados específicos para serem regstrados. Usado desestruturação nessa situação
        const { name, bio, avatar_url: avatar } = response.data

        // Definindo os dados certos para o create ser salvo no bb 
        const dev = await Dev.create({ 
            name, user: username, bio, avatar })

        return res.json(dev)
    }
}
