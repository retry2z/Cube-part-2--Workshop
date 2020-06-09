const dotenv = require('dotenv');
dotenv.config();

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: process.env.DB_CONNECT || 'http://localehost:3000',

        expressActiveRoutes: {
            common: {
                status: true,
                name: '/',
            },
            auth: {
                status: true,
                name: 'auth',
            },
            product: {
                status: true,
                name: 'cubic',
            },
            user: {
                status: true,
                name: 'customer',
            },
        }
    },
    production: {}
};

module.exports = config[env];