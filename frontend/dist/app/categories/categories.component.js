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
var recipe_service_1 = require('../models/recipe-service');
var CategoriesComponent = (function () {
    function CategoriesComponent(recipeService) {
        this.recipeService = recipeService;
        this.onSelectCategory = new core_1.EventEmitter();
        this.categories = [];
        this.activeCategory = '';
    }
    CategoriesComponent.prototype.onSelect = function (category) {
        this.activeCategory = category;
        this.onSelectCategory.emit(category);
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.recipeService.getCategories().then(function (categories) { return _this.categories = categories; });
    };
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CategoriesComponent.prototype, "onSelectCategory", void 0);
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'categories',
            templateUrl: './app/categories/categories.html'
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;

//# sourceMappingURL=categories.component.js.map
