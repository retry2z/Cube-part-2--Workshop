const commonsRoute = require('./commons');
const authRoute = require('./auth');
const productsRoute = require('./products');
const userRoute = require('./user');

const routes = (app, activeRoutes) => {
    const { auth, product, user, common } = activeRoutes;


    common.status ? app.use(`/${common.name}`, commonsRoute) : false;

    auth.status ? app.use(`/${auth.name}`, authRoute) : false;
    product.status ? app.use(`/${product.name}`, productsRoute) : false;
    user.status ? app.use(`/${user.name}`, userRoute) : false;

};

module.exports = routes;