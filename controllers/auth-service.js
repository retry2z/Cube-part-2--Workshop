const config = require('../config/config');
const user = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authenticate = async (request, response, next) => {
    const cookie = request.cookies[config.authCookie] || false;

    if (!cookie || !!request.user) {
        return next();
    }

    const verified = jwt.verify(cookie, config.secretToken);
    const tmp = await user.findById(verified.uid);
    request.user = {
        uid: tmp._id,
        name: tmp.name || '',
        imageUrl: tmp.imageUrl || '',
    }
    return next();
};

const authService = {
    async register(data) {
        const { email, password, rePassword } = data;

        if (password !== rePassword) {
            console.error('Passwords are not equals');
            return false
        }

        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const customer = await new user({ email, password: hashPassword }).save();
            const token = await jwt.sign({ uid: customer._id }, config.secretToken);

            return token
        }
        catch (err) {
            console.error(err);
        }
    },

    async login(data) {
        const { email, password } = data;

        try {
            const tmp = await user.findOne({ email });

            const verified = await bcrypt.compare(password, tmp.password);

            if (verified) {
                return await jwt.sign({ uid: tmp._id }, config.secretToken);
            } else {
                console.error('Email or password dont match');
            }

        }
        catch (err) {
            console.error(err);
        }
    },

    async logout() {

    }
};

module.exports = {
    authenticate,
    authService,
}