// dependencies
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const ejs = require('ejs');
const mongoose = require('mongoose');
const main = require('./controller/routes/mainRoutes.js');
const dbConfig = require('./controller/dbConfig.js');

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.set('view engine', 'ejs');

// connect to db
mongoose.connect(dbConfig.url, (err)=> {
    if(err) throw err;
    else console.log('successfully connected to db');
});

// routes
app.use('/', main);

app.listen(port, ()=> {
    console.log(`app listening on port ${port}!`)
});