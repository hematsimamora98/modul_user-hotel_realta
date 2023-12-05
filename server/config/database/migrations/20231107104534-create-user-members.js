'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('user_members', {
            usme_user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'Users',
                    key: 'user_id',
                },
            },
            usme_memb_name: {
                type: Sequelize.STRING(15),
                references: {
                    model: 'Members',
                    key: 'memb_name',
                },
            },
            usme_promote_date: {
                type: Sequelize.DATE,
            },
            usme_points: {
                type: Sequelize.SMALLINT,
            },
            usme_type: {
                type: Sequelize.STRING,
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

        await queryInterface.addConstraint('user_members', {
            fields: ['usme_user_id'],
            type: 'foreign key',
            name: 'fk_usme_user_id',
            references: {
                table: 'users',
                field: 'user_id',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });

        await queryInterface.addConstraint('user_members', {
            fields: ['usme_memb_name'],
            type: 'foreign key',
            name: 'fk_usme_memb_name',
            references: {
                table: 'members',
                field: 'memb_name',
            },
            onDelete: 'cascade',
            onUpdate: 'cascade',
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('user_members');
    },
};
