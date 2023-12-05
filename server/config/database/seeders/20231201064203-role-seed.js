'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'Roles',
            [
                {
                    role_id: 1,
                    role_name: 'Guest',
                },
                {
                    role_id: 2,
                    role_name: 'Manager',
                },
                {
                    role_id: 3,
                    role_name: 'OfficeBoy',
                },
                {
                    role_id: 4,
                    role_name: 'Admin',
                },
                {
                    role_id: 5,
                    role_name: 'User',
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
