const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database/db-config');

const Users = sequelize.define(
    'Users',
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_full_name: {
            type: DataTypes.STRING(55),
            defaultValue: 'guest1',
        },
        user_type: {
            type: DataTypes.STRING(15),
        },
        user_company_name: {
            type: DataTypes.STRING(225),
        },
        user_email: {
            type: DataTypes.STRING(256),
        },
        user_phone_number: {
            type: DataTypes.STRING(25),
            unique: true,
        },
        user_modified_date: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
    },
    {
        tableName: 'users',
        timestamps: false,
    }
);
module.exports = Users;
