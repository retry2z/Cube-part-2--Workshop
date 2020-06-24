const express = require('express');
const router = express.Router();
const cubeController = require('../controllers/cube-controller');

//CREATE

router.get('/create', async (req, res) => {
    const status = await cubeController.create.get(req, res);

    if (!status) {
        res.redirect('/error');
    }
});


router.post('/create', async (req, res) => {
    const status = await cubeController.create.post(req, res);

    if (status) {
        res.redirect('/');
    }
});


//LIST

router.get('/list', async (req, res) => {
    const status = await cubeController.list.get(req, res);

    if (!status) {
        res.redirect('/error');
    }
});


//DETAILS

router.get('/details/:id', async (req, res) => {
    await cubeController.details.get(req, res);
});

router.post('/details/:id', async (req, res) => {
    const status = await cubeController.details.post(req, res);

    if (status) {
        res.redirect(`/cubic/details/${req.params.id}`);
    }
});


//REMOVE

router.get('/delete/:id', async (req, res) => {
    const status = await cubeController.delete.get(req, res);

    if (!status) {
        res.redirect('/error');
    }
});

router.post('/delete/:id', async (req, res) => {
    const status = await cubeController.delete.post(req, res);


    if (status) {
        res.redirect('/');
    } else {
        res.redirect('/error');
    }
});

//EDIT

router.get('/edit/:id', async (req, res) => {
    const status = await cubeController.edit.get(req, res);

    if (!status) {
        res.redirect('/error');
    }
});

router.post('/edit/:id', async (req, res) => {
    const status = await cubeController.edit.post(req, res);

    if (status) {
        res.redirect(`/cubic/details/${req.params.id}`);
    } else {
        res.redirect('/error');
    }
});

module.exports = router;