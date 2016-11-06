import { Component, Input } from '@angular/core';

import { Recipe } from '../../models/recipe';

@Component({
    selector: 'recipe-details',
    templateUrl: './app/recipes/recipe-details/recipe-details.html'
})

export class RecipeDetailsComponent {
    @Input() recipe: Recipe;
}
