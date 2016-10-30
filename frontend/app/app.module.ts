import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { HeaderComponent }   from './layout/header/header.component';
import { FooterComponent }   from './layout/footer/footer.component';
import { RecipeListPageComponent }   from './layout/recipe-list-page/recipe-list-page.component';
import { RecipeDetailsPageComponent }   from './layout/recipe-details-page/recipe-details-page.component';

import { CategoriesComponent }   from './categories/categories.component';

import { RecipeComponent }   from './recipes/recipe/recipe.component';
import { RecipeDetailsComponent }   from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent }   from './recipes/recipe-list/recipe-list.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: 'list',
                component: RecipeListPageComponent
            },{
                path: 'details',
                component: RecipeDetailsPageComponent
            },{
                path: '',
                component: RecipeListPageComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        RecipeComponent,
        RecipeDetailsComponent,
        RecipeListComponent,
        RecipeListPageComponent,
        RecipeDetailsPageComponent,
        CategoriesComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
