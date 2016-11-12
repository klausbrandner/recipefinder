"use strict";
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var Recipe = (function () {
    function Recipe(http, rid, title, description, preparation, ingredients, rating, categories) {
        this.http = http;
        this.service = 'http://localhost:3306';
        this.rid = rid;
        this.title = title;
        this.description = description;
        this.preparation = preparation;
        this.ingredients = ingredients;
        this.rating = rating;
        this.categories = categories;
    }
    Recipe.prototype.evaluate = function (rating, cb) {
        var data = {
            rid: this.rid,
            rating: rating,
        };
        this.http.post(this.service + "/evaluate", data).map(function (res) {
            cb("done");
        });
    };
    return Recipe;
}());
exports.Recipe = Recipe;

//# sourceMappingURL=recipe.js.map
