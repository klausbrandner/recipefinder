import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { RecipeService } from '../../models/recipe-service';
import { Recipe } from '../../models/recipe';

declare const FB:any;

@Component({
  selector: 'recipe-list',
  templateUrl: './app/recipes/recipe-list/recipe-list.html'
})

export class RecipeListComponent implements OnInit, OnChanges {

    @Input() category: string;

    recipes: Recipe[];
    displayRecipes: Recipe[];

    constructor(private recipeService: RecipeService) { }

    getRecipes(): void {
        this.recipeService.getRecipes().subscribe((recipes) => {
            this.recipes = recipes;
            this.displayRecipes = recipes;
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['category']){
            let newCat = changes['category'].currentValue;
            this.displayRecipes = [];

            if(newCat){
                for(let recipe of this.recipes){
                    if(recipe.categories.indexOf(newCat) > -1){
                        this.displayRecipes.push(recipe);
                    }
                }
            }else{
                this.displayRecipes = this.recipes;
            }
        }
    }

    ngOnInit(): void {
        FB.getLoginStatus(response => {
            if (response.status === 'connected') {
                this.getRecipes();
            }
        });
    }
}
