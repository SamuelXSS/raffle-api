const Category = require('../models/Category')

module.exports = {
    async index(req, res){
        const categorys = await Category.findAll()

        return res.json(categorys)
    },

    async store(req, res){
        const { name } = req.body

        const category = await Category.findOne({where: { name }})
        if(!category){
            const createCategory = await Category.create({
                name
            })
            return res.json(createCategory)
        } else{
            return res.json('Essa categoria já existe!')
        }
    }
}