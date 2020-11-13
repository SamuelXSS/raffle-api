const { Model, DataTypes } = require('sequelize');

class Category extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            freezeTableName: true,
            tableName: 'categorys'
        })
    }
    static associate(models){
        this.hasMany(models.Product, { foreignKey: 'category_id', as: 'categorys' })
    }
}

module.exports = Category;