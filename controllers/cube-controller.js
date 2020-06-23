const cubeService = require('../controllers/cube-service');
const Cube = require('../models/validation/Cube-validation');

module.exports = {
    // Create new cube
    create: {
        async get(request, response) {
            return response.render('productCreate', {
                user: request.user,
            });
        },
        async post(request, response) {
            try {
                const item = new Cube(request.body);
                const tmp = await cubeService.add({ ...item, author: request.user.uid });
                await request.user.update('cubes', tmp._id);
                return true
            }
            catch (err) {
                response.render('productCreate', {
                    user: request.user,
                    error: err.message
                });
            }
        }
    },
    // <-----------------

    // Details about cube
    details: {
        async get(request, response) {
            try {
                const cubeDetails = await cubeService.details(request.params.id, 'accessories');
                const accessories = cubeDetails.accessories || false;
                response.render(
                    'productDetails',
                    {
                        cube: cubeDetails,
                        accessories: accessories,
                        user: request.user,
                        owner: cubeDetails.author.toString() === request.user.uid.toString(),
                    }
                );
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
                const list = await cubeService.list();
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
    },
    // <-----------------

    // Edit cube data
    edit: {
        async get(request, response) {
            try {
                const cubeDetails = await cubeService.details(request.params.id);
                response.render(
                    'productEdit',
                    {
                        cube: cubeDetails,
                        user: request.user,
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
                await cubeService.edit(request.params.id, request.body);
            }
            catch (err) {
                console.error(err);
            }
            return true
        }
    },
    // <-----------------


    //Delete cube from db
    delete: {
        async get(request, response) {
            try {
                const cubeDetails = await cubeService.details(request.params.id);
                response.render(
                    'productDelete',
                    {
                        cube: cubeDetails,
                        user: request.user,
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
                await cubeService.remove(request.params.id);
                await request.user.pull('cubes', request.params.id);
            }
            catch (err) {
                console.error(err);
            }
            return true
        }
    },
    // <-----------------
};