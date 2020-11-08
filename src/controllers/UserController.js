const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()

        return res.json(users)
    },

    async store(req, res) {
        const {
            name,
            username,
            pass,
            token
        } = req.body

        const check = await User.findOne({
            where: { username }
        })

        if (check) {
            return res.status(401).json('Usuário não disponível, tente outro :D')
        } else {
            const password = bcrypt.hashSync(pass, bcrypt.genSaltSync(10), null)

            const user = await User.create({
                name,
                username,
                pass: password,
                token
            })

            return res.json(user)
        }
    }
}