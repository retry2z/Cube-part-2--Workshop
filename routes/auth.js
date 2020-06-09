const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    console.log('works');
});

router.get('/register', (req, res) => {
    console.log('works');
});

router.get('/logout', (req, res) => {
    console.log('works');
});

router.get('/current', (req, res) => {
    console.log('works');
});


module.exports = router;