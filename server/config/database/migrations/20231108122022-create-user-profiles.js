'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_profiles', {
      uspro_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      uspro_national_id: {
        type: Sequelize.STRING(20)
      },
      uspro_birt_date: {
        type: Sequelize.DATE
      },
      uspro_job_title: {
        type: Sequelize.STRING(50)
      },
      uspro_marital_status: {
        type: Sequelize.CHAR
      },
      uspro_gender: {
        type: Sequelize.CHAR
      },
      uspro_addr_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Address',
          key: 'addr_id'
        }
      },
      uspro_user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'user_id'
        }
      },
    });

    await queryInterface.addConstraint('user_profiles', {
      fields: ['uspro_addr_id'],
      type: 'foreign key',
      name: 'fk_uspro_addr_id',
      references: {
        table: 'address',
        field: 'addr_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('user_profiles', {
      fields: ['uspro_user_id'],
      type: 'foreign key',
      name: 'fk_uspro_user_id',
      references: {
        table: 'users',
        field: 'user_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_profiles');
  }
};