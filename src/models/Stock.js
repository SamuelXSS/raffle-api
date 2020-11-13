const { DECIMAL } = require('sequelize');
const { Model, DataTypes } = require('sequelize');

class Stock extends Model {
    static init(sequelize){
        super.init({
            quantity: DataTypes.INTEGER,
            purchase_price: DataTypes.DOUBLE,
            sale_price: DataTypes.DOUBLE
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'products' })
    }
}

module.exports = Stock;