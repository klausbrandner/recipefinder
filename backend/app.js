'use strict';

let express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser');


/**
    Include body parser and allow cross site requests
*/
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

/**
    Default request
*/
app.get('/', function (req, res) {
    res.send('Hello, thanks for visiting Recipe Finder!');
});

var server = app.listen(4040, function () {
    console.log('Recipe Finder listening on port 4040!');
});
