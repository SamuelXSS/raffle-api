const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            username: DataTypes.STRING,
            pass: DataTypes.STRING,
            token: DataTypes.STRING
        },{
            sequelize
        })
    }
        
    static associate(models){
        this.hasOne(models.Dice, { foreignKey: 'user_id', as: 'dices' })
    }
}

module.exports = User;