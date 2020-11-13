const Stock = require('../models/Stock')
const Product = require('../models/Product')

module.exports = {
    async index(req, res){
        const stocks = await Stock.findAll()

        return res.json(stocks)
    },

    async store(req, res){
        const { product_id } = req.params
        const { quantity, purchase_price, sale_price } = req.body

        const check = await Product.findByPk(product_id)
        
        if(check){
            const stock = await Stock.findOne({where: { product_id }})
            if(!stock){
                const createStock = await Stock.create({
                    product_id,
                    quantity,
                    purchase_price,
                    sale_price
                })
                return res.json(createStock)
            } else{
                return res.json('Já há um estoque para esse produto!')
            }
        }
        else{
            res.json('O produto informado não existe!')
        }
    }
}