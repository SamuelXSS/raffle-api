const { Model, DataTypes } = require('sequelize');

class Dice extends Model {
    static init(sequelize){
        super.init({
            number: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' })
    }
}

module.exports = Dice;