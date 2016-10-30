import { Component } from '@angular/core';

@Component({
  selector: 'recipe-details',
  templateUrl: './app/recipes/recipe-details/recipe-details.html'
})

export class RecipeDetailsComponent {
    recipe = {
        title: 'Steak',
        description: 'This is some really good steak.'
    };
}
