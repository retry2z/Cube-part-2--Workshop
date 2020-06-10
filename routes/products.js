const express = require('express');
const router = express.Router();
const cube = require('../controllers/cube');
const accessory = require('../controllers/accessory');



//CREATE

router.get('/create', (req, res) => {
    res.render('productCreate');
});


router.post('/create', async (req, res) => {
    try {
        await cube.add(req.body);
    }
    catch (err) {
        console.err(err);
    }

    res.redirect('/');
});

// ACCESSORIES

router.get('/create/accessory', async (req, res) => {
    res.render('accessoryCreate');
});

router.post('/create/accessory', async (req, res) => {
    try {
        await accessory.add(req.body);
    }
    catch (err) {
        console.err(err);
    }

    res.redirect('/');
});


router.get('/attach/accessory/:id', async (req, res) => {
    const cubeDetail = await cube.details(req.params.id);
    const accessories = await accessory.list();
    res.render(
        'accessoryAttach',
        {
            cube: cubeDetail,
            accessories,
            isFullAttached: cubeDetail.accessory.length === accessories.length
        }
    );
});


router.post('/attach/accessory/:id', async (req, res) => {
    try {
        await accessory.details(req.body)
    }
    catch (err) {
        console.err(err);
    }

    res.redirect('/');
});


//LIST

router.get('/list', async (req, res) => {
    res.render('index',
        {
            cube: await cube.list()
        }
    )
});

//DETAILS

router.get('/details/:id', async (req, res) => {
    const cubeDetails = await cube.details(req.params.id);

    console.log(cubeDetails);
    res.render(
        'productDetails',
        {
            cube: cubeDetails,
            accessories: cubeDetails.accessory,
        }
    )
});

router.post('/details/:id', async (req, res) => {
    await cube.edit(req.params.id, req.body.accessory);
    await accessory.edit(req.body.accessory, req.params.id);

    res.redirect(`/cubic/details/${req.params.id}`);
});

//REMOVE

router.delete('/remove/:id', (req, res) => {
    console.log('works');
});


module.exports = router;