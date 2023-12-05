const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database/db-config');

const UserProfiles = sequelize.define(
    'UserProfiles',
    {
        uspro_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        uspro_national_id: {
            type: DataTypes.STRING(20),
        },
        uspro_birt_date: {
            type: DataTypes.DATE,
        },
        uspro_job_title: {
            type: DataTypes.STRING(50),
        },
        uspro_marital_status: {
            type: DataTypes.CHAR,
        },
        uspro_gender: {
            type: DataTypes.CHAR,
        },
        uspro_addr_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Address',
                key: 'addr_id',
            },
        },
        uspro_user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'user_id',
            },
        },
    },
    {
        tableName: 'user_profiles',
        timestamps: false,
    }
);

module.exports = UserProfiles;
