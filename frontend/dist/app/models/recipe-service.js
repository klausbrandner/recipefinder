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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var recipe_1 = require("./recipe");
var ingredient_1 = require("./ingredient");
var RecipeService = (function () {
    function RecipeService(http) {
        this.http = http;
        this.service = 'http://localhost:3306';
        //this.init();
        this.recipes = [];
        this.categories = [];
    }
    RecipeService.prototype.getRecipes = function () {
        var _this = this;
        this.recipes = [];
        return this.http.get(this.service + '/recipes').map(function (res) {
            var body = res.json();
            console.log(body);
            for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
                var recipe = body_1[_i];
                var ingredients = [];
                for (var _a = 0, _b = recipe.ingredients; _a < _b.length; _a++) {
                    var ingredient = _b[_a];
                    ingredients.push(new ingredient_1.Ingredient(ingredient.title, ingredient.quantity));
                }
                _this.addRecipe(recipe.rid, recipe.title, recipe.description, recipe.preparation, recipe.rating, ingredients, recipe.categories);
            }
            return _this.recipes;
        });
    };
    RecipeService.prototype.addRecipe = function (rid, title, description, preparation, rating, ingredients, categories) {
        this.recipes.push(new recipe_1.Recipe(this.http, rid, title, description, preparation, ingredients, rating, categories));
        for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
            var category = categories_1[_i];
            if (this.categories.indexOf(category) == -1) {
                this.categories.push(category);
            }
        }
    };
    RecipeService.prototype.createRecipe = function (title, description, preparation, ingredients, categories) {
        var _this = this;
        var data = {
            title: title,
            description: description,
            preparation: preparation,
            ingredients: ingredients,
            categories: categories,
        };
        this.http.post(this.service + '/recipes', data).map(function (res) {
            var body = res.json();
            _this.addRecipe(body.insertId, title, description, preparation, 0, ingredients, categories);
        });
        getRecipe(rid, number);
        Promise < recipe_1.Recipe > {
            for: function (let, of) {
                if (let === void 0) { let = recipe; }
                if (of === void 0) { of = this.recipes; }
                if (recipe.rid == rid) {
                    return Promise.resolve(recipe);
                }
            },
            return: Promise.resolve({})
        };
        rateRecipe(recipe, recipe_1.Recipe, rating, number, cb);
        void {
            cb: function () { }, "done": 
        };
        getCategories();
        Promise < string[] > {
            return: Promise.resolve(this.categories)
        };
    };
    RecipeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;

//# sourceMappingURL=recipe-service.js.map
