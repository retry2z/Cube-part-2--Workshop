const { authService } = require('./auth-service');

module.exports = {
    // Create new user
    register: {
        async get(request, response) {
            response.render('authRegister', {
                user: request.user,
            });
            return true
        },
        async post(request, response) {
            try {
                return await authService.register(request.body);
            }
            catch (err) {
                console.error(err);
            }
            return true
        }
    },
    // <-----------------

    // Login user 
    login: {
        async get(request, response) {
            response.render('authLogin', {
                user: request.user,
            });
            return true
        },
        async post(request, response) {
            try {
                return await authService.login(request.body);
            }
            catch (err) {
                console.error(err);
            }
            return true
        }
    },
    // <-----------------

    // Logout user
    logout: {
        async get(request, response) {
            try {

            }
            catch (err) {
                console.error(err);
            }
            return true;
        },
    }
};