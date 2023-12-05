const Logger = require('../helpers/logger');
const { Users, UserRoles } = require('../models');

const RepositoryName = 'UserRepositories';

const createNewGuest = async (phone_number) => {
    try {
        const newGuest = await Users.create({
            user_full_name: 'guest',
            user_type: 'I',
            user_phone_number: phone_number,
        });

        await UserRoles.create({
            usro_user_id: newGuest.user_id,
            usro_role_id: 1,
        });

        return { data: newGuest };
    } catch (error) {
        Logger.error(`[${RepositoryName}, createNewGuest]: ${error.message}`);
        throw error;
    }
};

module.exports = { createNewGuest };
