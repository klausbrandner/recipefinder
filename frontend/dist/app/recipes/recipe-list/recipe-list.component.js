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
var RecipeListComponent = (function () {
    function RecipeListComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipeListComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipeService.getRecipes().subscribe(function (recipes) {
            _this.recipes = recipes;
            _this.displayRecipes = recipes;
        });
    };
    RecipeListComponent.prototype.ngOnChanges = function (changes) {
        if (changes['category']) {
            var newCat = changes['category'].currentValue;
            this.displayRecipes = [];
            if (newCat) {
                for (var _i = 0, _a = this.recipes; _i < _a.length; _i++) {
                    var recipe = _a[_i];
                    if (recipe.categories.indexOf(newCat) > -1) {
                        this.displayRecipes.push(recipe);
                    }
                }
            }
            else {
                this.displayRecipes = this.recipes;
            }
        }
    };
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                _this.getRecipes();
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RecipeListComponent.prototype, "category", void 0);
    RecipeListComponent = __decorate([
        core_1.Component({
            selector: 'recipe-list',
            templateUrl: './app/recipes/recipe-list/recipe-list.html'
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], RecipeListComponent);
    return RecipeListComponent;
}());
exports.RecipeListComponent = RecipeListComponent;

//# sourceMappingURL=recipe-list.component.js.map
