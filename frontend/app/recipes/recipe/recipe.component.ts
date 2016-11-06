import { Component, Input } from '@angular/core';

import { Recipe } from '../../models/recipe';

@Component({
    selector: 'recipe',
    templateUrl: './app/recipes/recipe/recipe.html'
})

export class RecipeComponent {
    @Input() recipe: Recipe;
}
