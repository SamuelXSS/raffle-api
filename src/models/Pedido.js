const { Model, DataTypes } = require('sequelize');

class Area extends Model {
    static init(sequelize){
        super.init({
                  
        }, {
            sequelize
        });
    }

    static associate(models) {
        
    }
}

module.exports = Area;