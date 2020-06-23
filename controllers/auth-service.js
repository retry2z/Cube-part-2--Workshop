const config = require('../config/config');
const user = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserManagement = require('../models/UserManagement');
const Account = require('../models/validation/Account-validation');


const authenticate = async (request, response, next) => {
    const cookie = request.signedCookies[config.authCookie] || false;

    if (!cookie) {
        return next();
    }

    try {
        const verified = jwt.verify(cookie, config.secretToken);
        const account = await user.findById(verified.uid);
        request.user = new UserManagement(account);
        return next();
    }
    catch (err) {
        console.error('Permission Denied');
        return response.redirect('/error');
    }
};

const authService = {
    async register(data) {
        const { email, password, rePassword } = data;

        if (password !== rePassword) {
            throw new TypeError('Passwords are not equals');
        }

        try {
            const salt = await bcrypt.genSalt(10);
            const account = new Account({ email, password });
            account.password = await bcrypt.hash(password, salt);
            const tmp = await new user(account).save();

            return await jwt.sign({ uid: tmp._id }, config.secretToken)
        }
        catch (err) {
            if (err.name === 'TypeError') {
                throw new TypeError(err.message);
            } else {
                console.log(err);
            }
        }
    },

    async login(data) {
        const { email, password } = data;

        try {
            const tmp = await user.findOne({ email });
            const account = new Account({ email, password });
            account.uid = tmp._id;
            const verified = await bcrypt.compare(password, tmp.password);

            if (verified) {
                return await jwt.sign({ uid: account.uid }, config.secretToken, { expiresIn: '1h' })
            } else {
                throw new TypeError('Invalid email or password');
            }
        }
        catch (err) {
            if (err.name === 'TypeError') {
                throw new TypeError(err.message);
            } else {
                console.log(err);
            }
        }
    },

    async logout() {

    }
};

module.exports = {
    authenticate,
    authService,
}