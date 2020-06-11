const routesConfig = require('../config/config').expressActiveRoutes;


const authGuard = (request, response, next) => {
    const root = '/' + request.url.split('/');

    console.log(request);
    next();
}

module.exports = authGuard;