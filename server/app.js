// Importing node modules and user defined modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const studentsResource = require('./routes/studentsResource');

// Instantiating the express module
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://sixtus:123456@ds241875.mlab.com:41875/studentsresourceapp', { useMongoClient: true});
mongoose.Promise = global.Promise;

// Body Parser middleware
app.use(bodyParser.json());

// Enabling cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use('/', studentsResource)

// Starting the server
app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port 3000!');
});