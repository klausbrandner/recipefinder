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
var recipe_service_1 = require('../../models/recipe-service');
var ingredient_1 = require('../../models/ingredient');
var NewRecipePageComponent = (function () {
    function NewRecipePageComponent(recipeService) {
        this.recipeService = recipeService;
        this.title = '';
        this.photo = '';
        this.description = '';
        this.preparation = '';
        this.ingredients = [];
        this.categories = [];
        this.buttonText = 'Save Recipe';
    }
    NewRecipePageComponent.prototype.addIngredient = function () {
        this.ingredients.push(new ingredient_1.Ingredient(this.ingredientTitle, this.ingredientQuantity));
        this.ingredientTitle = '';
        this.ingredientQuantity = '';
        console.log(this.ingredients);
    };
    NewRecipePageComponent.prototype.deleteIngredient = function (ingredient) {
        var index = this.ingredients.indexOf(ingredient);
        if (index > -1) {
            this.ingredients.splice(index, 1);
        }
    };
    NewRecipePageComponent.prototype.addCategory = function () {
        this.categories.push(this.newCategory);
        this.newCategory = '';
        console.log(this.categories);
    };
    NewRecipePageComponent.prototype.deleteCategory = function (category) {
        var index = this.categories.indexOf(category);
        if (index > -1) {
            this.categories.splice(index, 1);
        }
    };
    NewRecipePageComponent.prototype.addRecipe = function () {
        if (this.buttonText == 'Save Recipe') {
            var self = this;
            self.buttonText = 'loading...';
            self.recipeService.createRecipe(self.title, self.photo, self.description, self.preparation, self.ingredients, self.categories, function () {
                self.title = '';
                self.photo = '';
                self.description = '';
                self.preparation = '';
                self.ingredients = [];
                self.categories = [];
                self.buttonText = 'Thank you!';
                setTimeout(function () {
                    self.buttonText = 'Save Recipe';
                }, 5000);
            });
        }
    };
    NewRecipePageComponent = __decorate([
        core_1.Component({
            selector: 'new-recipe-page',
            templateUrl: './app/layout/new-recipe-page/new-recipe-page.html'
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], NewRecipePageComponent);
    return NewRecipePageComponent;
}());
exports.NewRecipePageComponent = NewRecipePageComponent;

//# sourceMappingURL=new-recipe-page.component.js.map
