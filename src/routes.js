const express = require('express');
const UserController = require('./controllers/UserController');
const DiceController = require('./controllers/DiceController');

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
routes.get(version + '/sort', SortController.store)

//AUTH ... 
routes.post(version + '/auth', AuthController.store)

module.exports = routes;