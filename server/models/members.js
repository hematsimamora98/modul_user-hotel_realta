const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database/db-config');

const Member = sequelize.define(
    'Member',
    {
        memb_name: {
            type: DataTypes.STRING(15),
            primaryKey: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
    },
    {
        tableName: 'members',
        timestamps: false,
    }
);

module.exports = Member;
