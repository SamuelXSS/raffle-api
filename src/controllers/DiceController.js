const User = require('../models/User')
const Dice = require('../models/Dice')

module.exports = {
    async index(req, res){
        const dices = await Dice.findAll()

        return res.json(dices)
    },

    async store(req, res){
        const { user_id } = req.params
        const { number } = req.body

        const check = await User.findByPk(user_id)
        
        if(check){
            const user = await Dice.findOne({ where: { user_id } })

            if(!user){
                const checkNumber = await Dice.findOne({where: { number }})
                if(!checkNumber){
                    const userNumber = await Dice.create({
                        number,
                        user_id,
                    })
                    return res.json(userNumber)
                } else{
                    return res.status(401).json('Esse número já está sendo usado')
                }
            } else{
                return res.status(401).json('Você já está participando deste sorteio')
            }
        }
    }
}