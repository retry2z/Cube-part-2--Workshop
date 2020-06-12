const commonsRoute = require('./commons-route-module');
const authRoute = require('./auth-route-module');
const productsRoute = require('./products-route-module');
const userRoute = require('./user-route-module');
const authGuard = require('../shared/authGuard');

const routes = [
    {
        active: authGuard,
        data: {
            isLogged: true,
        },
        route: '/auth',
        module: authRoute,
    },
    {
        active: authGuard,
        data: {
            isLogged: true,
        },
        route: '/cubic',
        module: productsRoute,
    },
    {
        active: authGuard,
        data: {
            isLogged: true,
        },
        route: '/customer',
        module: userRoute,
    },
    {
        active: authGuard,
        data: {
            isLogged: true,
        },
        route: '/',
        module: commonsRoute,
    },
]


module.exports = (app) => {
    for (const path of routes) {
        const { route, module } = path;

        path.active ? path.active(app) : false
        app.use(route, module);
    }
};

