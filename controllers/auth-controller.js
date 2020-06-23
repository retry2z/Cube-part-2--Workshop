const { authService } = require('./auth-service');

module.exports = {
    // Create new user
    register: {
        async get(request, response) {
            return response.render('authRegister', {
                user: request.user,
            });
        },

        async post(request, response) {
            try {
                return await authService.register(request.body);
            }
            catch (err) {
                return response.render('authRegister', {
                    error: err.message,
                });
            }
        }
    },
    // <-----------------

    // Login user 
    login: {
        async get(request, response) {
            return response.render('authLogin', {
                user: request.user,
            });
        },

        async post(request, response) {
            try {
                return await authService.login(request.body);
            }
            catch (err) {
                return response.render('authLogin', {
                    error: err.message,
                });
            }
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