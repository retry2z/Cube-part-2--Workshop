const config = require('./config/config');
const express = require('express');
const app = express();

const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');

databaseConfig(config)
    .then(() => {

        expressConfig(app, config);

        app.use(function (err, req, res, next) {
            console.log('');
            console.log('-'.repeat(90));
            console.error(err);
            res.status(500).send(err.message);
            console.log('_'.repeat(90));
        });

        app.listen(config.port, console.log(`Listening on port ${config.port}`));
    })
    .catch(err => console.error(err));


