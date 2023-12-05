const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database/db-config');

const Address = sequelize.define(
    'Address',
    {
        addr_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
    },
    {
        tableName: 'address',
        timestamps: false,
    }
);

module.exports = Address;
