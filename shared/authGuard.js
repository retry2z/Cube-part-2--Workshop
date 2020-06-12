const { urlencoded } = require("express");

const user = {
    isLogged: true,
};

module.exports = function (app) {
    app.use(this.route, (req, res, next) => {
        if (user.isLogged === this.data.isLogged) {
            return next()
        }

        return false
    });
}

