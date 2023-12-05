'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_roles', {
      usro_user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'user_id'
        }
      },
      usro_role_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Roles',
          key: 'role_id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    await queryInterface.addConstraint('user_roles', {
      fields: ['usro_user_id'],
      type: 'foreign key',
      name: 'fk_usro_user_id',
      references: {
        table: 'users',
        field: 'user_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('user_roles', {
      fields: ['usro_role_id'],
      type: 'foreign key',
      name: 'fk_usro_role_id',
      references: {
        table: 'roles',
        field: 'role_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_roles');
  }
};