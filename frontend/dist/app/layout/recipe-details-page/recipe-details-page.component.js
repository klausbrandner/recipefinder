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
var router_1 = require('@angular/router');
var recipe_service_1 = require('../../models/recipe-service');
var RecipeDetailsPageComponent = (function () {
    function RecipeDetailsPageComponent(recipeService, route, router) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.recipe = {};
    }
    RecipeDetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var rid = +this.route.snapshot.params['rid'];
        this.recipeService.getRecipe(rid).then(function (recipe) { return _this.recipe = recipe; });
    };
    RecipeDetailsPageComponent = __decorate([
        core_1.Component({
            selector: 'recipe-details-page',
            templateUrl: './app/layout/recipe-details-page/recipe-details-page.html'
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService, router_1.ActivatedRoute, router_1.Router])
    ], RecipeDetailsPageComponent);
    return RecipeDetailsPageComponent;
}());
exports.RecipeDetailsPageComponent = RecipeDetailsPageComponent;

//# sourceMappingURL=recipe-details-page.component.js.map
