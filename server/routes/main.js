const app = require('express')();
const boom = require('express-boom');
const { LogRequest: HttpLogger } = require('../middleware/HttpLogger');

const TestRoutes = require('./TestRoute');
const AuthRoutes = require('./AuthRoutes');

app.use(boom());
app.use(HttpLogger);

app.get('/', TestRoutes);
app.use('/auth', AuthRoutes);

module.exports = app;
