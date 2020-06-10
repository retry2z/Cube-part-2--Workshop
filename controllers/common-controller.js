const cube = require('../controllers/cube-service');

module.exports = {
    home: {
        async get(request, response) {
            try {
                const list = await cube.list();
                response.render(
                    'index',
                    {
                        cubes: list
                    }
                );
            }
            catch (err) {
                console.error(err);
            }

            return true
        },

        async post(request, response) {
            console.log(request.body);
            const list = await cube.list();


            const temp = list.filter();

            response.render(
                'index',
                {
                    cubes: list
                }
            );

            return true
        }

    },

    about: {
        async get(request, response) {
            await response.render('about');

            return true
        }
    },

    notFound: {
        async get(request, response) {
            response.render('404');

            return true
        }
    }
}