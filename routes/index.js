const commonsRoute = require('./commons');
const authRoute = require('./auth');
const productsRoute = require('./products');
const userRoute = require('./user');
const commonController = require('../controllers/common-controller');
const cubeController = require('../controllers/cube-controller');

const routes = [
    {
        isLogged: false,
        route: '/',
        module: commonsRoute,
    },
    {
        isLogged: false,
        route: '/auth',
        module: authRoute,
    },
    {
        isLogged: true,
        route: '/cubic',
        module: productsRoute,
    },
    {
        isLogged: true,
        route: '/customer',
        module: userRoute,
    },
]


module.exports = (app) => {
    for (const path of routes) {
        const { route, module, isLogged } = path;

        console.log(path.module);
        app.use(route, module);
    }
};

