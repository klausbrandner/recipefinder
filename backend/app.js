'use strict';

let express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    request = require('request');


let connection = mysql.createConnection({
    host    : 'localhost',
    database: 'recipefinder',
    user: 'root',
    password: ''
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


// Authentication Middleware
function Authenticate(req, res, next){

    var token = req.body.token || req.query.access_token;

    if(token){
        request("https://graph.facebook.com/me?access_token=" + token, function(err, response, body){
            if(err){
                res.status(403).send("facebook api error");
            }else{
                var responseBody = JSON.parse(body);
                if(responseBody.error){
                    res.status(403).send(responseBody.error.message);
                }else{
                    next();
                }
            }
        });
    }else{
        res.status(403).send("invalid facebook token");
    }

}

/**
    get categories
*/
app.get('/categories', Authenticate, function (req, res) {
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
app.get('/recipes', Authenticate, function (req, res) {
    connection.query('SELECT *, (SELECT AVG(e.rating) FROM Evaluations e WHERE e.rid = r.rid) AS rating FROM Recipes r', function(err, recipes){
        if(err){
            res.status(500).send("Unable to get recipes.");
        }else{
            var ctr = 0;
            for(let r in recipes){
                let recipe = recipes[r];
                if(!recipe.rating){
                    recipes[r].rating = 0;
                }

                // Get ingredients
                connection.query('SELECT title, quantity FROM Ingredients WHERE rid = ?',[recipe.rid],function(err,ingredients){
                    if(err){
                        res.status(500).send("Unable to get recipes.");
                    }
                    recipes[r].ingredients = ingredients;

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
app.post('/recipe', Authenticate, function(req,res){
    let recipe = {
        title: req.body.title,
        photo: req.body.photo,
        description: req.body.description,
        preparation: req.body.preparation
    };
    console.log(recipe);
    let ingredients = req.body.ingredients;
    let categories = req.body.categories;

    connection.query('INSERT INTO Recipes SET ?', recipe, function (err, newRecipe) {
        if (err) {
            return connection.rollback(function () {
                throw err;
            });
        }else{
            console.log(newRecipe.insertId);

            // INSERT Ingredients
            for(let i in ingredients){
                let ingredient = {
                    rid: newRecipe.insertId,
                    title: ingredients[i].title,
                    quantity: ingredients[i].quantity
                };
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
                            AddRecipeToCategory(newRecipe.insertId,result.insertId);
                        });
                    }else{
                        AddRecipeToCategory(newRecipe.insertId,result[0].cid);
                    }
                });
            }

            res.json({
                rid: newRecipe.insertId
            });
        }
    });
});
function AddRecipeToCategory(rid,cid){
    let data = {
        rid: rid,
        cid: cid
    };
    connection.query('INSERT INTO BelongsTo SET ?',data,function(err,result){
        if(err){
            console.log(err);
        }
    });
}

app.post('/evaluate', Authenticate, function(req, res){
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
            connection.query('SELECT AVG(rating) AS rating FROM Evaluations WHERE rid = ?',[post.rid],function(err,rating){
                res.json({
                    rating: rating[0].rating
                });
            });
        });
    }else{
        res.status(400).send("Not a valid recipe.")
    }
});

var server = app.listen(4040, function () {
    console.log('Recipefinder listening on port 4040!');
});
