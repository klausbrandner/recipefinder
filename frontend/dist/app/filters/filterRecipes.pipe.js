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
var FilterRecipesPipe = (function () {
    function FilterRecipesPipe() {
    }
    FilterRecipesPipe.prototype.transform = function (value, category) {
        var tmpRecipes = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var recipe = value_1[_i];
            if (recipe.categories.indexOf(category) > -1) {
                tmpRecipes.push(recipe);
            }
        }
        return tmpRecipes;
    };
    FilterRecipesPipe = __decorate([
        core_1.Pipe({ name: 'filterRecipes' }), 
        __metadata('design:paramtypes', [])
    ], FilterRecipesPipe);
    return FilterRecipesPipe;
}());
exports.FilterRecipesPipe = FilterRecipesPipe;

//# sourceMappingURL=filterRecipes.pipe.js.map
