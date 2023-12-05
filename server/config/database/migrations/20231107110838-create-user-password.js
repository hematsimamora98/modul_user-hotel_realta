'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('user_passwords', {
            uspa_user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'Users',
                    key: 'user_id',
                },
            },
            uspa_passwordHash: {
                type: Sequelize.STRING(128),
            },
            uspa_passwordSalt: {
                type: Sequelize.STRING(10),
            },
        });

        await queryInterface.addConstraint('user_passwords', {
            fields: ['uspa_user_id'],
            type: 'foreign key',
            name: 'fk_uspa_user_id',
            references: {
                table: 'users',
                field: 'user_id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('user_passwords');
    },
};
