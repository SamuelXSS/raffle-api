const { Model, DataTypes } = require('sequelize');

class Product extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.INTEGER,
            color: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'categorys' })
        this.hasOne(models.Stock, { foreignKey: 'product_id', as: 'stocks' })
    }
}

module.exports = Product;