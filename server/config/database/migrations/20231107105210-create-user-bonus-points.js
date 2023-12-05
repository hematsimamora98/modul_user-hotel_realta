'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('user_bonus_points', {
            ubpo_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            ubpo_user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'user_id',
                },
            },
            ubpo_total_points: {
                type: Sequelize.SMALLINT,
            },
            ubpo_bonus_type: {
                type: Sequelize.CHAR,
            },
            ubpo_created_on: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });

        await queryInterface.addConstraint('user_bonus_points', {
            fields: ['ubpo_user_id'],
            type: 'foreign key',
            name: 'fk_ubpo_user_id',
            references: {
                table: 'users',
                field: 'user_id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('user_bonus_points');
    },
};
