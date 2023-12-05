const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database/db-config');

const UserRoles = sequelize.define(
    'UserRoles',
    {
        usro_user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Users',
                key: 'user_id',
            },
        },
        usro_role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Roles',
                key: 'role_id',
            },
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
        tableName: 'user_roles',
        timestamps: false,
    }
);

module.exports = UserRoles;
