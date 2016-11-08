"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var recipe_1 = require("./recipe");
var ingredient_1 = require("./ingredient");
var RecipeService = (function () {
    function RecipeService() {
        this.init();
    }
    RecipeService.prototype.init = function () {
        //just mocked data for now
        this.categories = ["Vegan", "Fish", "Meat", "Mexican"];
        var ing1 = new ingredient_1.Ingredient("ketchup", "1l");
        var ing2 = new ingredient_1.Ingredient("nudln", "100g");
        this.recipes = [
            new recipe_1.Recipe(1, "Spagetti", "spagettiiiis", "nudln mit Ketchup", [ing1, ing2], 3.8, ["Vegan"]),
            new recipe_1.Recipe(2, "Pfeffer Steak", "Das saftige Pfeffer Steak schmeckt allen Fleisch-Liebhabern garantiert. Ein Rezept das einfach zubereitet wird.", "Für das Pfeffersteak die Steaks etwa 1-2 Stunden in Öl, Weinbrand und den zerdrücken Pfefferkörner marinieren. Danach die Steaks in etwas Fett scharf anbraten und rausnehmen. In dem Fett die kleingeschnittenen Zwiebel glasig anbraten und Senf, Suppengewürz und die Petersilie dazugeben. Mit dem Sud der eingelegten Steaks und der Sahne ablöschen. Steaks in die Soße geben, mit vorgewärmten Weinbrand begießen und flambieren.", [ing1, ing2], 4, ["Meat"]),
            new recipe_1.Recipe(3, "Spagetti Bolognese", "spagettiiiis mit Fleisch", "nudln mit Ketchup und Fleisch", [ing1, ing2], 4.2, ["Meat"]),
            new recipe_1.Recipe(4, "Salat", "green Salat", "Salat Gurk und Tomaten vorbereiten und Dressing dazu", [ing1, ing2], 3.7, ["Vegan"]),
            new recipe_1.Recipe(5, "Spagetti", "spagettiiiis", "nudln mit Ketchup", [ing1, ing2], 4.4, ["Fish"])
        ];
        this.recipes.push(new recipe_1.Recipe(6, "Wrapps", "Mexican Dish", "Fill wrapps with everything you want.", [ing1, ing2], 4.5, ['Meat', 'Mexican']));
    };
    RecipeService.prototype.getRecipes = function () {
        return Promise.resolve(this.recipes);
    };
    RecipeService.prototype.addRecipe = function (rid, title, description, preparation, ingredients, categories) {
        this.recipes.push(new recipe_1.Recipe(rid, title, description, preparation, ingredients, 0, categories));
    };
    RecipeService.prototype.getRecipe = function (rid) {
        for (var _i = 0, _a = this.recipes; _i < _a.length; _i++) {
            var recipe = _a[_i];
            if (recipe.rid == rid) {
                return Promise.resolve(recipe);
            }
        }
        return Promise.resolve({});
    };
    RecipeService.prototype.rateRecipe = function (recipe, rating, cb) {
        cb("done");
    };
    RecipeService.prototype.getCategories = function () {
        return Promise.resolve(this.categories);
    };
    RecipeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;

//# sourceMappingURL=recipe-service.js.map
