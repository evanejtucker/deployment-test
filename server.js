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
// const dbConfig = require('./controller/dbConfig.js');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://heroku_1fd77vjf:jql0tc7igk312bni82qn46shct@ds235768.mlab.com:35768/heroku_1fd77vjf', (err)=> {
    if(err) throw err;
    else console.log('successfully connected to db');
});

// routes
app.use('/', main);

app.listen(port, ()=> {
    console.log(`app listening on port ${port}!`)
});