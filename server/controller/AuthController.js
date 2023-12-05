const _ = require('lodash');
const Logger = require('../helpers/logger');
const UserRepositories = require('../repositories/UserRepositories');
const { Users } = require('../models');

const Controller = 'AuthController';

const registerGuest = async (req, res) => {
    try {
        const { phone_number } = req.body;

        Logger.info(`[${Controller}, registerGuest]: Checking user availability ${phone_number}`);
        const findExistingUser = await Users.findOne({ where: { user_phone_number: phone_number } });
        
        if (findExistingUser) {
            Logger.error(`[${Controller}, registerGuest]: User already exists!`);
            return res.boom.badRequest('User already exists!');
        }

        await UserRepositories.createNewGuest(phone_number);
        Logger.info(`[${Controller}, registerGuest]: New user with role guest has been created!`);
        return res.status(201).json({ message: 'User created successfully!' });

    } catch (error) {
        Logger.error(`[${Controller}, registerGuest]: ${error.message}`);
        return res.boom.badImplementation(error.message);
    }
};

module.exports = { registerGuest };
