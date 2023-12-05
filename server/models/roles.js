const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database/db-config');

const Roles = sequelize.define(
    'Roles',
    {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        role_name: {
            type: DataTypes.STRING(35),
        },
    },
    {
        tableName: 'roles',
        timestamps: false,
    }
);

module.exports = Roles;
