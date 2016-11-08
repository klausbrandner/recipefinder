'use strict';

var express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser');

    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host    : '127.0.0.1',
        database: 'recipefinder',
        user: 'Anna',
        password: '5dez1989'
    });


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
/**
    Include body parser and allow cross site requests
*/

var urlencodedParser = bodyParser.json();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


/**
    get requests
*/
app.get('/categories', function (req, res) {

    connection.query('SELECT * FROM Categories', function(err, row){
        res.json(row);
    });
});

app.get('/recipes', function (req, res) {

    connection.query('SELECT * FROM Recipes', function(err, row){
        res.json(row);
    });
});


app.post('/recipe',function(req,res){

    var post = {
        title: req.body.title,
        description: req.body.description,
        preperation: req.body.preparation
    };
        connection.query('INSERT INTO recipes SET ?', post, function (err, result) {
            if (err) {
                return connection.rollback(function () {
                    throw err;
                });
            }
            console.log(result.insertId);
            res.json('ok');
        });
});

app.post ('/evaluate', function(req, res){
       var post = {
           rid : req.body.rid,
           rating : req.body.rating
       }

    if(post.rid != null) {
        connection.query('INSERT INTO evaluations SET ?', post, function (err, result) {
            if (err) {
                return connection.rollback(function () {
                    throw err;
                });
            }
            console.log(result.insertId);
            res.json('ok');
        });
    }else{
        res.send("Not a valid recipe")
    }
});

var server = app.listen(4040, function () {
    console.log('Recipe Finder listening on port 4040!');
});

