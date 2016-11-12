"use strict";
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var Recipe = (function () {
    function Recipe(rid, title, photo, description, preparation, ingredients, rating, categories) {
        this.rid = rid;
        this.title = title;
        this.photo = photo;
        this.description = description;
        this.preparation = preparation;
        this.ingredients = ingredients;
        this.rating = rating;
        this.categories = categories;
    }
    Recipe.prototype.getRating = function () {
        return this.rating.toFixed(1);
    };
    return Recipe;
}());
exports.Recipe = Recipe;

//# sourceMappingURL=recipe.js.map
