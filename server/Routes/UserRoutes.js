const routes = require('express').Router();
const userController = require('../Controller/UserContorller');



routes.post('/register', userController.Register);

routes.post('/login', userController.Login)

module.exports = routes;