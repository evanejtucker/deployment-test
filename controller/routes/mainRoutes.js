const express = require('express');
const router = express.Router();
const ejs = require('ejs');

router.get('/', (req, res, next)=> {
    // res.send('home page');
    res.render('./pages/home');
});

router.get('/info', (req, res, next)=> {
    res.send('info page');
});

module.exports = router;