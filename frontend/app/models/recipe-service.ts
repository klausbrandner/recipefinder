import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Recipe } from "./recipe";
import { Ingredient } from "./ingredient";
import addRange = ts.addRange;

@Injectable()
export class RecipeService {

    private recipes: Recipe[];
    private categories: string[];
    private service = 'http://localhost:3306';

    constructor (private http: Http) {
        //this.init();
        this.recipes = [];
        this.categories = [];
        
    }

    getRecipes(): Observable<Recipe[]> {
        this.recipes = [];
        return this.http.get(this.service + '/recipes').map((res) => {
            let body = res.json();
            console.log(body);
            for(let recipe of body){
                var ingredients = [];
                for(let ingredient of recipe.ingredients){
                    ingredients.push(new Ingredient(ingredient.title, ingredient.quantity));
                }
                this.addRecipe(recipe.rid,
                    recipe.title,
                    recipe.description,
                    recipe.preparation,
                    recipe.rating,
                    ingredients,
                    recipe.categories
                );
            }
            return this.recipes;
        });
    }

    addRecipe(rid:number, title:string, description:string, preparation:string, rating:number, ingredients:Ingredient[],categories:string[]) {
        this.recipes.push(new Recipe(this.http,rid,title,description,preparation,ingredients,rating,categories));
        for(let category of categories){
            if(this.categories.indexOf(category) == -1){
                this.categories.push(category);
            }
        }
    }

    createRecipe(title:string,description:string,preparation:string,ingredients:Ingredient[],categories:string[]) {

        var data = {
            title:title,
            description:description,
            preparation:preparation,
            ingredients:ingredients,
            categories:categories,
        };

        this.http.post(this.service + '/recipes',data).map((res) => {

            let body = res.json();
            this.addRecipe(body.insertId,title,description,preparation,0,ingredients,categories);

        });







        getRecipe(rid:number): Promise<Recipe>{
        for(let recipe of this.recipes){
            if(recipe.rid == rid){
                return Promise.resolve(recipe);
            }
        }
        return Promise.resolve({});
    }
    
    rateRecipe(recipe:Recipe, rating:number, cb): void {
        cb("done");
    }


    getCategories(): Promise<string[]> {
        return Promise.resolve(this.categories);
    }

}
