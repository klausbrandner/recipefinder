import { Component } from '@angular/core';

@Component({
  selector: 'recipe',
  templateUrl: './app/recipes/recipe/recipe.html'
})

export class RecipeComponent {
    recipe = {
        title: 'Steak',
        description: 'This is some really good steak.'
    };
}
