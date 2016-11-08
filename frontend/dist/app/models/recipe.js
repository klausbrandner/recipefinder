"use strict";
var Recipe = (function () {
    function Recipe(rid, title, description, preparation, ingredients, rating, categories) {
        this.rid = rid;
        this.title = title;
        this.description = description;
        this.preparation = preparation;
        this.ingredients = ingredients;
        this.rating = rating;
        this.categories = categories;
    }
    Recipe.prototype.evaluate = function (rating) {
        //POST add rating to db
        console.log("Recipe: " + this.title + " Stars: " + rating);
    };
    return Recipe;
}());
exports.Recipe = Recipe;

//# sourceMappingURL=recipe.js.map
