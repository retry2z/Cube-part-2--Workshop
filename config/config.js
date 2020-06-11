const dotenv = require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: process.env.DB_CONNECT || 'http://localehost:3000',
    },
    production: {}
};

module.exports = config[env];