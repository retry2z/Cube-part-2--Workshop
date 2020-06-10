const cube = require('../controllers/cube-service');
const search = require('../shared/search');

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
            const list = await cube.list();

            response.render(
                'index',
                {
                    cubes: search(list, request.body)
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