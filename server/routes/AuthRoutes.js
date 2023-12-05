const route = require('express').Router();
const { registerGuest } = require('../controller/AuthController');

route.post('/register/guest', registerGuest);

module.exports = route;
