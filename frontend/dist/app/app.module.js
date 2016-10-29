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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var header_component_1 = require('./layout/header/header.component');
var footer_component_1 = require('./layout/footer/footer.component');
var recipe_component_1 = require('./recipes/recipe/recipe.component');
var recipe_list_component_1 = require('./recipes/recipe-list/recipe-list.component');
var recipe_list_page_component_1 = require('./pages/recipe-list-page/recipe-list-page.component');
var recipe_details_page_component_1 = require('./pages/recipe-details-page/recipe-details-page.component');
var categories_component_1 = require('./categories/categories.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'list',
                        component: recipe_list_page_component_1.RecipeListPageComponent
                    }, {
                        path: 'details',
                        component: recipe_details_page_component_1.RecipeDetailsPageComponent
                    }, {
                        path: '',
                        component: recipe_list_page_component_1.RecipeListPageComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                recipe_component_1.RecipeComponent,
                recipe_list_component_1.RecipeListComponent,
                recipe_list_page_component_1.RecipeListPageComponent,
                recipe_details_page_component_1.RecipeDetailsPageComponent,
                categories_component_1.CategoriesComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
