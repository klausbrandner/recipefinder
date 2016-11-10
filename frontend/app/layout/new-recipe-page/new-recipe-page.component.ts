import { Component } from '@angular/core';

import { RecipeService } from '../../models/recipe-service';
import { Recipe } from '../../models/recipe';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'new-recipe-page',
  templateUrl: './app/layout/new-recipe-page/new-recipe-page.html'
})

export class NewRecipePageComponent {

    title: string;
    description: string;
    preparation: string;
    ingredients: Ingredient[];
    ingredientTitle: string;
    ingredientQuantity: string;
    categories: string[];
    newCategory: string;

    constructor(private recipeService: RecipeService) {
        this.title = '';
        this.description = '';
        this.preparation = '';
        this.ingredients = [];
        this.categories = [];
    }

    addIngredient(): void{
        this.ingredients.push(new Ingredient(this.ingredientTitle, this.ingredientQuantity));
        this.ingredientTitle = '';
        this.ingredientQuantity = '';
        console.log(this.ingredients);
    }
    deleteIngredient(ingredient): void {
        let index = this.ingredients.indexOf(ingredient);
        if(index > -1){
            this.ingredients.splice(index,1);
        }
    }

    addCategory(): void {
        this.categories.push(this.newCategory);
        this.newCategory = '';
        console.log(this.categories);
    }
    deleteCategory(category): void {
        let index = this.categories.indexOf(category);
        if(index > -1){
            this.categories.splice(index,1);
        }
    }

    addRecipe(): void {
        this.recipeService.addRecipe(0,
            this.title,
            this.description,
            this.preparation,
            0,
            this.ingredients,
            this.categories
        );
        this.title = '';
        this.description = '';
        this.preparation = '';
        this.ingredients = [];
        this.categories = [];
    }

}
