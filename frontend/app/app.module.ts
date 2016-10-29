import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { HeaderComponent }   from './layout/header/header.component';
import { FooterComponent }   from './layout/footer/footer.component';
import { RecipeComponent }   from './recipes/recipe/recipe.component';
import { RecipeListComponent }   from './recipes/recipe-list/recipe-list.component';
import { RecipeListPageComponent }   from './pages/recipe-list-page/recipe-list-page.component';
import { RecipeDetailsPageComponent }   from './pages/recipe-details-page/recipe-details-page.component';
import { CategoriesComponent }   from './categories/categories.component';

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
        RecipeListComponent,
        RecipeListPageComponent,
        RecipeDetailsPageComponent,
        CategoriesComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
