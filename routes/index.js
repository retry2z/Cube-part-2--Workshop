const commonsRoute = require('./commons-route-module');
const authRoute = require('./auth-route-module');
const productsRoute = require('./products-route-module');
const userRoute = require('./user-route-module');
const accessoryRoute = require('./accessories-route-module');

const authGuard = require('../shared/authGuard');

const routes = [
    {
        active: authGuard,
        route: '/auth',
        module: authRoute,
        data: {
            isLogged: false,
        },
    },
    {
        active: authGuard,
        route: '/cubic',
        module: productsRoute,
        data: {
            isLogged: true,
        },
    },
    {
        active: authGuard,
        route: '/accessory',
        module: accessoryRoute,
        data: {
            isLogged: true,
        },
    },
    {
        active: authGuard,
        route: '/customer',
        module: userRoute,
        data: {
            isLogged: true,
        },
    },
    {
        route: '/',
        module: commonsRoute,
    },
]


module.exports = (app) => {
    for (const path of routes) {
        const { route, module, data } = path;

        path.active ? path.active(app, route, data) : false
        app.use(route, module);
    }
};

