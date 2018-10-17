// Starting point for the application
require('dotenv').config({path:__dirname+"/.env"})
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./main_router');

const app = express();

// Use the body-parser middleware to make our data available in req.body
app.use(bodyParser.json());

// Use the router we defined in main_router.js for all requests at the root path
app.use('/',router);

app.listen(3000, () => { console.log('API is running at http://localhost:3000')});