const Dice = require('../models/Dice')
const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const rand = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }

        const diceNumbers = await Dice.findAll()
        
        const arr = diceNumbers.map(x => {
            return x.number
        })
        
        const min = Math.min(...arr)
        const max = Math.max(...arr)
        const number = rand(min,max)
        
        const dice = await Dice.findOne({ where: { number } })
        const user = await User.findOne({ where: { id: dice.user_id } })

        res.json({
            name: user.name, 
            number: dice.number
        })

    }
}