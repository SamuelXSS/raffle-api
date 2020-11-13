const User = require('../models/User')
require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')


module.exports = {
    async store(req, res){
        const { username, pass } = req.body

        if(!username || !pass){
            return res.status(400).json('Insira todos os dados para logar!')
        }
        
        const user = await User.findOne({ where: { username } })
        
        if(user){
            if(bcrypt.compareSync(pass, user.pass)){
                const payload = { id: user.id, user: user.username, name: user.name }
                res.json({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    username: user.username,
                    token: jwt.encode(payload, process.env.APP_SECRET)
                })
            } else{
                return res.status(401).json('Usuário ou senha inválida')
            }
                
        } else{
            return res.status(400).json('Usuário não encontrado!')
        }
    }
}