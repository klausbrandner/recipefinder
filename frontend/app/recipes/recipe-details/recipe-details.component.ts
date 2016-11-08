import { Component, Input } from '@angular/core';

import { RecipeService } from '../../models/recipe-service';
import { Recipe } from '../../models/recipe';

@Component({
    selector: 'recipe-details',
    templateUrl: './app/recipes/recipe-details/recipe-details.html'
})

export class RecipeDetailsComponent {
    @Input() recipe: Recipe;

    rated: boolean;

    constructor(private recipeService: RecipeService) { }

    onRate(rating:number): void {
        if(!this.rated){
            var self = this;
            this.recipeService.rateRecipe(this.recipe, rating, function(status){
                if(status === "done"){
                    console.log("rated - " + rating);
                    self.rated = true;
                }else{
                    console.log("an error occured");
                }
            });
        }
    }
}
