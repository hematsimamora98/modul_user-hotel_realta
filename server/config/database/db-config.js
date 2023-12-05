const { Sequelize } = require('sequelize');
const Logger = require('../../helpers/logger');

const {
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_NAME,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_SCHEMA,
} = process.env;

const sequelize = new Sequelize({
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    schema: DATABASE_SCHEMA,
    dialect: 'postgres',
    logging: true,
});

const DBConnection = async () => {
    try {
        await sequelize.authenticate();
        Logger.info('Database connected successfully!');
    } catch (error) {
        Logger.error('Unable to connect to the database:', error);
        process.exit(1);
    }
};

module.exports = { DBConnection, sequelize };
