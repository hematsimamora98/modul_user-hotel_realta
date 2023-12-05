'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            user_full_name: {
                type: Sequelize.STRING(55),
                defaultValue: 'guest1',
            },
            user_type: {
                type: Sequelize.STRING(15),
            },
            user_company_name: {
                type: Sequelize.STRING(225),
            },
            user_email: {
                type: Sequelize.STRING(256),
            },
            user_phone_number: {
                type: Sequelize.STRING(25),
                unique: true,
            },
            user_modified_date: {
                type: Sequelize.DATE,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    },
};
