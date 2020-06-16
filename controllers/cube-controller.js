const cube = require('../controllers/cube-service');
const accessory = require('../controllers/accessory-service');

module.exports = {
    // Create new cube
    create: {
        async get(request, response) {
            response.render('productCreate');
            return true
        },
        async post(request, response) {
            try {
                await cube.add(request.body);
            }
            catch (err) {
                console.error(err);
            }
            return true
        }
    },
    // <-----------------

    // Details about cube
    details: {
        async get(request, response) {
            try {
                const cubeDetails = await cube.details(request.params.id);
                response.render(
                    'productDetails',
                    {
                        cube: cubeDetails,
                        accessories: cubeDetails.accessory,
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
                await cube.update(request.params.id, 'accessory', request.body.accessory);
                await accessory.update(request.body.accessory, request.params.id);
            }
            catch (err) {
                console.error(err);
            }
            return true
        }
    },
    // <-----------------

    // List all cubes

    list: {
        async get(request, response) {
            try {
                const list = await cube.list();
                response.render('index',
                    {
                        cube: list
                    }
                );
            }
            catch (err) {
                console.error(err);
            }
            return true;
        },
    }



};