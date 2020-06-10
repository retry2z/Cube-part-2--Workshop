const express = require('express');
const router = express.Router();
const commonController = require('../controllers/common-controller');


router.get('/', async (req, res) => {
    await commonController.home.get(req, res);
});

router.get('/about', async (req, res) => {
    await commonController.about.get(req, res);
});

router.get('*', async (req, res) => {
    await commonController.notFound.get(req, res);
});


module.exports = router;