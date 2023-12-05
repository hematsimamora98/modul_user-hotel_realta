const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database/db-config');

const UserBonusPoints = sequelize.define(
    'UserBonusPoints',
    {
        ubpo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ubpo_user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'user_id',
            },
        },
        ubpo_total_points: {
            type: DataTypes.SMALLINT,
        },
        ubpo_bonus_type: {
            type: DataTypes.CHAR,
        },
        ubpo_created_on: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
    },
    {
        tableName: 'user_bonus_points',
        timestamps: false,
    }
);

module.exports = UserBonusPoints;
