require('dotenv').config();

const express = require('express');
const cors = require('cors');
const Logger = require('./helpers/logger');
const routes = require('./routes/main');
const { DBConnection } = require('./config/database/db-config');
const { APP_HOST, APP_PORT, APP_NAME } = process.env;


const app = express();
DBConnection();

app.use(cors({ origin: `${APP_HOST}:${APP_PORT}` }));
app.use(express.json());
app.use(routes);

app.listen(APP_PORT, () => {
    Logger.info(`Starting ${APP_NAME}, Server running on port ${APP_PORT} 🚀`);
});
