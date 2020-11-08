const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Dice = require('../models/Dice');
// const Pedido = require('../models/Pedido');

const connection = new Sequelize(dbConfig);

User.init(connection)
Dice.init(connection)
// Pedido.init(connection)

User.associate(connection.models)
Dice.associate(connection.models)
// Pedido.associate(connection.models)

module.exports = connection;