const cube = require('../controllers/cube-service');

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
    },
    // <-----------------

    // Edit cube data
    edit: {
        async get(request, response) {
            try {
                const cubeDetails = await cube.details(request.params.id);
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
                await cube.edit(request.params.id, request.body);
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
                const cubeDetails = await cube.details(request.params.id);
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
                await cube.remove(request.params.id);
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