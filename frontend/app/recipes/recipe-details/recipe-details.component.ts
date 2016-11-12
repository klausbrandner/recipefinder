import { Component, Input } from '@angular/core';

import { RecipeService } from '../../models/recipe-service';
import { Recipe } from '../../models/recipe';

@Component({
    selector: 'recipe-details',
    templateUrl: './app/recipes/recipe-details/recipe-details.html'
})

export class RecipeDetailsComponent {
    @Input() recipe: Recipe;

    private rated: number;
    private message: string;

    constructor(private recipeService: RecipeService) {
        this.message = '';
        this.rated = 0;
    }

    onRate(rating:number): void {
        if(this.rated < 1){
            var self = this;
            self.rated = rating;
            self.message = 'Thanks for rating!';
            setTimeout(function(){
                self.message = '';
            },5000);
            /*this.recipe.evaluate(rating,function(data){
                self.message = 'Thanks for rating!';
            });*/
        }
    }
}
