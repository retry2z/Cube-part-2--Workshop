module.exports = (app, route, data) => {
    app.use(route, (request, response, next) => {
        console.log(request.user);

        if (!!request.user === data.isLogged) {
            return next()
        }

        return response.redirect('/')
    });
}

