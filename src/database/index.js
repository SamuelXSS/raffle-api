const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Dice = require('../models/Dice');
const Product = require('../models/Product')
const Category = require('../models/Category')
const Stock = require('../models/Stock')
// const Pedido = require('../models/Pedido');

const connection = new Sequelize(dbConfig);

User.init(connection)
Dice.init(connection)
Product.init(connection)
Category.init(connection)
Stock.init(connection)
// Pedido.init(connection)

User.associate(connection.models)
Dice.associate(connection.models)
Product.associate(connection.models)
Category.associate(connection.models)
Stock.associate(connection.models)


// Pedido.associate(connection.models)

module.exports = connection;