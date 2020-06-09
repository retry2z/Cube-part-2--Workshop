const express = require('express');
const router = express.Router();
const cube = require('../controllers/cube');


//CREATE

router.get('/create',  (req, res) => {
    res.render('productCreate');
});


router.post('/create', (req, res) => {
    try {
        cube.add(req.body);
    }
    catch (err) {
        console.err(err);
    }

    res.redirect('/');
});

//LIST

router.get('/list', (req, res) => {
    res.render('index',
        {
            cube: cube.list()
        }
    )
});

//DETAILS

router.get('/details/:id', (req, res) => {
    res.render(
        'details',
        {
            cube: cube.details(req.params.id)
        }
    )
});

router.put('/details/:id', (req, res) => {
    console.log('works');
});

//REMOVE

router.delete('/remove/:id', (req, res) => {
    console.log('works');
});


module.exports = router;