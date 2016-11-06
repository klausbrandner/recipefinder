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
        this.categories = ["Vegan", "Fish", "Meat"];
        var ing1 = new ingredient_1.Ingredient("ketchup", "1l");
        var ing2 = new ingredient_1.Ingredient("nudln", "100g");
        this.recipes.push(new recipe_1.Recipe(0, "Spagetti", "spagettiiiis", "nudln mit Ketchup", [ing1, ing2], ["Vegan"]));
        this.recipes.push(new recipe_1.Recipe(0, "Steak", "Beef Stake", "well done beef stake", [ing1, ing2], ["Meat"]));
        this.recipes.push(new recipe_1.Recipe(0, "Spagetti Bolognese", "spagettiiiis mit Fleisch", "nudln mit Ketchup und Fleisch", [ing1, ing2], ["Meat"]));
        this.recipes.push(new recipe_1.Recipe(0, "Salat", "green Salat", "Salat Gurk und Tomaten vorbereiten und Dressing dazu", [ing1, ing2], ["Vegan"]));
        this.recipes.push(new recipe_1.Recipe(0, "Spagetti", "spagettiiiis", "nudln mit Ketchup", [ing1, ing2], ["Fish"]));
    };
    RecipeService.prototype.getRecipies = function () {
        return this.recipes;
    };
    RecipeService.prototype.addRecipe = function (id, name, description, preparation, ingredients, categories) {
        this.recipes.push(new recipe_1.Recipe(id, name, description, preparation, ingredients, categories));
    };
    RecipeService.prototype.getCategories = function () {
        return this.categories;
    };
    RecipeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;

//# sourceMappingURL=recipe-list.js.map
