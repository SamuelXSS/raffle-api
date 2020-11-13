const Product = require('../models/Product')
const Category = require('../models/Category')

module.exports = {
    async index(req, res){
        const products = await Product.findAll()

        return res.json(products)
    },

    async store(req, res){
        const { category_id } = req.params
        const { name, color } = req.body

        const check = await Category.findByPk(category_id)
        
        if(check){
            const product = await Product.findOne({where: { name }})
            if(!product){
                const createProduct = await Product.create({
                    name,
                    category_id,
                    color
                })
                return res.json(createProduct)
            } else{
                return res.json('Esse produto já existe!')
            }
        }
        else{
            res.json('A categoria informada não existe!')
        }
    }
}