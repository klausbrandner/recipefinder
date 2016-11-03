import { Component } from '@angular/core';

@Component({
  selector: 'new-recipe-page',
  templateUrl: './app/layout/new-recipe-page/new-recipe-page.html'
})

export class NewRecipePageComponent {
    recipe = {};

    addRecipe(){
        console.log(this.recipe);
        this.recipe = {};
    }
}
