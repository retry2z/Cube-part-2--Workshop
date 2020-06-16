const config = require('../config/config');
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');

router.get('/login', async (req, res) => {
    await authController.login.get(req, res);
});

router.post('/login', async (req, res) => {
    await authController.login.post(req, res);
   // res.redirect('/');
});

router.get('/register', async (req, res) => {
    await authController.register.get(req, res);
});

router.post('/register', async (req, res) => {
    const token = await authController.register.post(req, res);
    res.cookie(config.authCookie, token);
    res.redirect('/');
});


module.exports = router;