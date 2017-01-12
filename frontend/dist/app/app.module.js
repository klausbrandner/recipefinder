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
// Angular Modules
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
// Services
var recipe_service_1 = require('./models/recipe-service');
// Components
var app_component_1 = require('./app.component');
var header_component_1 = require('./layout/header/header.component');
var footer_component_1 = require('./layout/footer/footer.component');
var new_recipe_page_component_1 = require('./layout/new-recipe-page/new-recipe-page.component');
var recipe_list_page_component_1 = require('./layout/recipe-list-page/recipe-list-page.component');
var recipe_details_page_component_1 = require('./layout/recipe-details-page/recipe-details-page.component');
var categories_component_1 = require('./categories/categories.component');
var login_component_1 = require('./login/login.component');
var recipe_component_1 = require('./recipes/recipe/recipe.component');
var recipe_details_component_1 = require('./recipes/recipe-details/recipe-details.component');
var recipe_list_component_1 = require('./recipes/recipe-list/recipe-list.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'list',
                        component: recipe_list_page_component_1.RecipeListPageComponent,
                    }, {
                        path: 'details/:rid',
                        component: recipe_details_page_component_1.RecipeDetailsPageComponent,
                    }, {
                        path: 'new',
                        component: new_recipe_page_component_1.NewRecipePageComponent,
                    }, {
                        path: '',
                        component: recipe_list_page_component_1.RecipeListPageComponent
                    },
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                recipe_component_1.RecipeComponent,
                recipe_details_component_1.RecipeDetailsComponent,
                recipe_list_component_1.RecipeListComponent,
                recipe_list_page_component_1.RecipeListPageComponent,
                recipe_details_page_component_1.RecipeDetailsPageComponent,
                new_recipe_page_component_1.NewRecipePageComponent,
                categories_component_1.CategoriesComponent,
                login_component_1.LoginComponent
            ],
            providers: [
                recipe_service_1.RecipeService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
