const express = require('express');
const router = express.Router();
const cube = require('../controllers/cube');


router.get('/', async (req, res) => {

    console.log(await cube.list());
    res.render(
        'index',
        {
            cubes: await cube.list()
        }
    );
});

router.get('/about', (req, res) => {
    res.render(
        'about',
        {

        }
    );
});

router.get('*', (req, res) => {
    res.render('404');
});


module.exports = router;