'use strict';

let express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser');



    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host    : 'mysqlsvr50.world4you.com',
        user    : 'sql8580095',
        password :'p00ky0s',
        database:'8580095db3 '
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

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

/**
    get requests
*/
app.get('/categories', function (req, res) {

    connection.query('select category from Categories', function(err, row){
        res.json(row);
    });
});

app.get('/recipes', function (req, res) {

    connection.query('select * from Recipes', function(err, row){
        res.json(row);
    });
});

// http.post('/recipe',{data:'hallo'});
app.post('/recipe',function(req,res){
    var rid = req.body.rid;
    var recipe = req.body.recipe;
    var description = req.body.description;
    var preparation = req.body.preparation;

    connection.query('INSERT INTO Recipes VALUES (rid, recipe, description, preparation)', function(err,result){
        res.json(result);
    });
});

var server = app.listen(4040, function () {
    console.log('Recipe Finder listening on port 4040!');
});

