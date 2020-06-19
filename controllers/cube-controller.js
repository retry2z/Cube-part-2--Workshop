const cube = require('../controllers/cube-service');
const accessory = require('../controllers/accessory-service');


module.exports = {
    // Create new cube
    create: {
        async get(request, response) {
            response.render('productCreate', {
                user: request.user,
            });
            return true
        },
        async post(request, response) {
            try {
                const item = await cube.add({ ...request.body, author: request.user.uid });
                await request.user.update('cubes', item._id);
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
                        accessories: cubeDetails.accessory || false,
                        user: request.user,
                        owner: cubeDetails.author.toString() === request.user.uid.toString(),
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