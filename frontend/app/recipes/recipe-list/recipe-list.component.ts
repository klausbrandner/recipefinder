import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../../models/recipe-service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'recipe-list',
  templateUrl: './app/recipes/recipe-list/recipe-list.html'
})

export class RecipeListComponent implements OnInit {

    recipes: Recipe[];
    category: string;

    constructor(private recipeService: RecipeService) { }

    getRecipes(): void {
        this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
    }
    getCategory(): void {
        this.recipeService.getActiveCategory().then(category => this.category = category);
    }

    ngOnInit(): void {
        this.getRecipes();
        this.getCategory();
    }
}
