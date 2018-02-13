const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=> {
    res.send('home page');
});

router.get('/info', (req, res, next)=> {
    res.send('info page');
});

module.exports = router;