import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from '../../models/recipe-service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'recipe-details-page',
  templateUrl: './app/layout/recipe-details-page/recipe-details-page.html'
})

export class RecipeDetailsPageComponent implements OnInit {

    private recipe = {};

    constructor(
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        let rid = +this.route.snapshot.params['rid'];
        this.recipeService.getRecipe(rid).then(recipe => this.recipe = recipe);
    }
}
