const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const routes = require('../routes/index');

module.exports = (app, config) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));

    app.engine('.hbs', handlebars({
        extname: '.hbs',
        layoutsDir: path.join(__dirname, '../views/layouts')
    }));
    app.set('view engine', '.hbs');

    routes(app, config.expressActiveRoutes);
};

