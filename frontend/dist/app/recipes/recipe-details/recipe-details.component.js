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
var recipe_1 = require('../../models/recipe');
var RecipeDetailsComponent = (function () {
    function RecipeDetailsComponent(recipeService) {
        this.recipeService = recipeService;
        this.message = '';
        this.rated = 0;
    }
    RecipeDetailsComponent.prototype.getRating = function () {
        if (this.recipe.rating) {
            return this.recipe.rating.toFixed(1);
        }
        else {
            return '0';
        }
    };
    RecipeDetailsComponent.prototype.onRate = function (rating) {
        if (this.rated < 1) {
            var self = this;
            this.recipeService.evaluate(this.recipe.rid, rating).subscribe(function (newRating) {
                self.rated = rating;
                self.message = 'Thanks for rating!';
                self.recipe.rating = newRating;
                setTimeout(function () {
                    self.message = '';
                }, 5000);
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', recipe_1.Recipe)
    ], RecipeDetailsComponent.prototype, "recipe", void 0);
    RecipeDetailsComponent = __decorate([
        core_1.Component({
            selector: 'recipe-details',
            templateUrl: './app/recipes/recipe-details/recipe-details.html'
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], RecipeDetailsComponent);
    return RecipeDetailsComponent;
}());
exports.RecipeDetailsComponent = RecipeDetailsComponent;

//# sourceMappingURL=recipe-details.component.js.map
