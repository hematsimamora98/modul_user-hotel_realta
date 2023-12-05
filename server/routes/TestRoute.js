const route = require('express').Router();
const { testResponse } = require('../controller/TestController');

route.get('/', testResponse);

module.exports = route;