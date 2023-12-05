const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database/db-config');

const UserMembers = sequelize.define(
    'UserMembers',
    {
        usme_user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Users',
                key: 'user_id',
            },
        },
        usme_memb_name: {
            type: DataTypes.STRING(15),
            references: {
                model: 'Members',
                key: 'memb_name',
            },
        },
        usme_promote_date: {
            type: DataTypes.DATE,
        },
        usme_points: {
            type: DataTypes.SMALLINT,
        },
        usme_type: {
            type: DataTypes.STRING,
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
        tableName: 'user_members',
        timestamps: false,
    }
);

module.exports = UserMembers;
