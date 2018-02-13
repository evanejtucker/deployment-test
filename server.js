const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const main = require('./controller/routes/mainRoutes.js');

// app.get('/', (req, res, next)=> {
//     res.send('home page');
// })

app.use('/', main);

app.listen(port, ()=> {
    console.log(`app listening on port ${port}!`)
})