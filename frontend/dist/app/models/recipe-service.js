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
        var _this = this;
        this.http = http;
        this.service = 'http://35.167.61.204:9000';
        this.recipes = [];
        this.categories = [];
        FB.init({
            appId: '255658018202456',
            cookie: false,
            xfbml: true,
            version: 'v2.5'
        });
        FB.getLoginStatus(function (response) {
            _this.statusChangeCallback(response);
        });
    }
    RecipeService.prototype.loginToFacebook = function () {
        var self = this;
        FB.login(function (response) {
            window.location.reload();
        });
    };
    RecipeService.prototype.statusChangeCallback = function (resp) {
        if (resp.status === 'connected') {
            console.log("connected to facebook ");
            this.fbToken = resp.authResponse.accessToken;
        }
        else {
            console.log("not connected");
        }
    };
    ;
    RecipeService.prototype.getRecipes = function () {
        var _this = this;
        this.recipes = [];
        return this.http.get(this.service + '/recipes?access_token=' + this.fbToken).map(function (res) {
            var body = res.json();
            console.log(body);
            for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
                var recipe = body_1[_i];
                var ingredients = [];
                for (var _a = 0, _b = recipe.ingredients; _a < _b.length; _a++) {
                    var ingredient = _b[_a];
                    ingredients.push(new ingredient_1.Ingredient(ingredient.title, ingredient.quantity));
                }
                _this.addRecipe(recipe.rid, recipe.title, recipe.photo, recipe.description, recipe.preparation, recipe.rating, ingredients, recipe.categories);
            }
            return _this.recipes;
        });
    };
    RecipeService.prototype.addRecipe = function (rid, title, photo, description, preparation, rating, ingredients, categories) {
        this.recipes.push(new recipe_1.Recipe(rid, title, photo, description, preparation, ingredients, rating, categories));
        for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
            var category = categories_1[_i];
            if (this.categories.indexOf(category) == -1) {
                this.categories.push(category);
            }
        }
    };
    RecipeService.prototype.createRecipe = function (title, photo, description, preparation, ingredients, categories, done) {
        var _this = this;
        var data = {
            title: title,
            photo: photo,
            description: description,
            preparation: preparation,
            ingredients: ingredients,
            categories: categories,
            token: this.fbToken
        };
        this.http.post(this.service + '/recipe', data).map(function (res) {
            return res.json();
        }).subscribe(function (data) {
            _this.addRecipe(data.rid, title, photo, description, preparation, 0, ingredients, categories);
            done();
        });
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
    RecipeService.prototype.getCategories = function () {
        return Promise.resolve(this.categories);
    };
    RecipeService.prototype.evaluate = function (rid, rating) {
        var data = {
            rid: rid,
            rating: rating,
            token: this.fbToken
        };
        return this.http.post(this.service + "/evaluate", data).map(function (res) {
            return res.json().rating;
        });
    };
    RecipeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;

//# sourceMappingURL=recipe-service.js.map
