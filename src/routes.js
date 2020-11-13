const express = require('express');
const UserController = require('./controllers/UserController');
const DiceController = require('./controllers/DiceController');
const CategoryController = require('./controllers/CategoryController');
const ProductController = require('./controllers/ProductController');
const StockController = require('./controllers/StockController');
const AuthController = require('./controllers/AuthController');
const SortController = require('./controllers/SortController');

const routes  = express.Router();
require('dotenv').config()
const version = process.env.APP_VERSION

//USERS OK
routes.get(version  + '/users', UserController.index)
routes.post(version + '/users', UserController.store)

//DICE OK
routes.get(version + '/dices', DiceController.index)
routes.post(version + '/users/:user_id/dice', DiceController.store)

//CATEGORY OK
routes.get(version + '/categorys', CategoryController.index)
routes.post(version + '/categorys', CategoryController.store)

//PRODUCT OK
routes.get(version + '/products', ProductController.index)
routes.post(version + '/categorys/:category_id/product', ProductController.store)

//STOCK OK
routes.get(version + '/stock', StockController.index)
routes.post(version + '/products/:product_id/stock', StockController.store)

//DO RAFFLE OK
routes.get(version + '/sort', SortController.store)

//AUTH ... 
routes.post(version + '/auth', AuthController.store)

module.exports = routes;