'use strict';

let express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mysql = require('mysql');


let connection = mysql.createConnection({
    host    : 'localhost',
    database: 'recipefinder',
    user: 'root',
    password: 'SQLPass55'
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
    get categories
*/
app.get('/categories', function (req, res) {
    connection.query('SELECT * FROM Categories', function(err, categories){
        if(err){
            res.status(500).send("Unable to get categories.");
        }else{
            var catArray = [];
            for(let c in categories){
                catArray.push(categories[c].title);
            }
            res.json(catArray);
        }
    });
});

/**
    get recipes
*/
app.get('/recipes', function (req, res) {
    connection.query('SELECT *, (SELECT AVG(e.rating) FROM Evaluations e WHERE e.rid = r.rid) AS rating FROM Recipes r', function(err, recipes){
        if(err){
            res.status(500).send("Unable to get recipes.");
        }else{
            for(let r in recipes){
                let recipe = recipes[r];

                // Get ingredients
                connection.query('SELECT title, quantity FROM Ingredients WHERE rid = ?',[recipe.rid],function(err,ingredients){
                    if(err){
                        res.status(500).send("Unable to get recipes.");
                    }
                    recipes[r].ingredients = ingredients;

                    var ctr = 0;
                    connection.query('SELECT c.title FROM Recipes r LEFT JOIN BelongsTo b ON b.rid=r.rid LEFT JOIN Categories c ON c.cid=b.cid WHERE r.rid = ?',[recipe.rid],function(err,categories){
                        if(err){
                            res.status(500).send("Unable to get recipes.");
                        }
                        var catArray = [];
                        for(let c in categories){
                            catArray.push(categories[c].title);
                        }
                        recipes[r].categories = catArray;

                        ctr++;
                        if(ctr >= recipes.length){
                            res.json(recipes);
                        }
                    });
                });
            }
        }
    });
});

/**
    insert recipe
*/
app.post('/recipe',function(req,res){
    let recipe = {
        title: req.body.title,
        description: req.body.description,
        preparation: req.body.preparation
    };
    let ingredients = req.body.ingredients;
    let categories = req.body.categories;

    connection.query('INSERT INTO Recipes SET ?', recipe, function (err, result) {
        if (err) {
            return connection.rollback(function () {
                throw err;
            });
        }else{
            console.log(result.insertId);

            // INSERT Ingredients
            for(let i in ingredients){
                let ingredient = ingredients[i];
                connection.query('INSERT INTO Ingredients SET ?',ingredient,function(err, result){
                    if(err){
                        console.log(err);
                    }
                });
            }

            // INSERT Categories if not exists
            for(let c in categories){
                let category = {
                    title: categories[c]
                }
                connection.query('SELECT * FROM Categories WHERE title = ?',[category.title],function(err,result){
                    if(result.length < 1){
                        connection.query('INSERT INTO Categories SET ?',category,function(err, result){
                            if(err){
                                console.log(err);
                            }
                        });
                    }
                });

            }

            res.json({
                rid: result.insertId
            });
        }
    });
});

app.post ('/evaluate', function(req, res){
   let post = {
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
            res.send('success');
        });
    }else{
        res.status(400).send("Not a valid recipe.")
    }
});

var server = app.listen(4040, function () {
    console.log('Recipe Finder listening on port 4040!');
});
