const cube = require('../controllers/cube-service');
const accessory = require('../controllers/accessory-service');

module.exports = {
    //Create new accessory

    create: {
        async get(request, response) {
            await response.render('accessoryCreate',
                {
                    user: request.user,
                });
            return true
        },
        async post(request, response) {
            try {
                const item = await accessory.add(request.body);
                await request.user.update('accessories', item._id);
            }
            catch (err) {
                console.error(err);
            }

            return true
        }
    },
    // <--------------------

    //Attach accessory to cube

    attach: {
        async get(request, response) {
            try {
                const cubeDetail = await cube.details(request.params.id);
                const accessories = await accessory.list();

                response.render(
                    'accessoryAttach',
                    {
                        user: request.user,
                        cube: cubeDetail,
                        accessories,
                        isFullAttached: cubeDetail.accessory.length === accessories.length
                    }
                );
            }
            catch (err) {
                console.error(err);
            }

            return true
        },
        async post(request, response) {
            try {
                await accessory.details(request.body)
            }
            catch (err) {
                console.error(err);
            }

            return true
        }
    }
};