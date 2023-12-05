const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database/db-config');

const UserPassword = sequelize.define(
    'UserPassword',
    {
        uspa_user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Users',
                key: 'user_id',
            },
        },
        uspa_passwordHash: {
            type: DataTypes.STRING(128),
        },
        uspa_passwordSalt: {
            type: DataTypes.STRING(10),
        },
    },
    {
        tableName: 'user_password',
        timestamps: false,
    }
);

module.exports = UserPassword;
