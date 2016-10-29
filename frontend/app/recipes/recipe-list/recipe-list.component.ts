import { Component } from '@angular/core';

@Component({
  selector: 'recipe-list',
  templateUrl: './app/recipes/recipe-list/recipe-list.html'
})

export class RecipeListComponent {
    recipes = [];
}
