const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
/*
ça permet de controller facilement quelles routes sont autorisées à requêter sur l'api
 */
const passport = require("passport");
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to Database
mongoose.connect(config.database, { useNewUrlParser: true });

//On Connection
mongoose.connection.on('connected', () => {
    console.log('connected to the database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});

const app = express();

const users = require('./routes/users');

const port = 3000;

//CORS midleware
app.use(cors());

//Set static Folder // IMPORTANT for me right now
app.use(express.static(path.join(__dirname, 'public')));

//BodyParser middleware
app.use(bodyParser.json());

//anything that is 'localhost/users/' will be on this file
app.use('/users', users);

//Index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//Start server
app.listen(port, () => {
    console.log("App running on port " + port);
});