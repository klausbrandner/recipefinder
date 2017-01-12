import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Recipe } from "./recipe";
import { Ingredient } from "./ingredient";

declare const FB:any;

@Injectable()
export class RecipeService {

    private recipes: Recipe[];
    private categories: string[];
    private service = 'http://localhost:4040';
    private fbToken: string;

    constructor (private http: Http) {
        this.recipes = [];
        this.categories = [];

        FB.init({
            appId      : '255658018202456',
            cookie     : false,
            xfbml      : true,
            version    : 'v2.5'
        });

        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
        });
    }

    loginToFacebook(){
        var self = this;
        FB.login(function(response){
            window.location.reload();
        });
    }
    statusChangeCallback(resp) {
        if (resp.status === 'connected') {
            console.log("connected to facebook ");
            this.fbToken = resp.authResponse.accessToken;
        }else {
            console.log("not connected");
        }
    };

    getRecipes(): Observable<Recipe[]> {
        this.recipes = [];
        return this.http.get(this.service + '/recipes?access_token=' + this.fbToken).map((res) => {
            let body = res.json();
            console.log(body);
            for(let recipe of body){
                var ingredients = [];
                for(let ingredient of recipe.ingredients){
                    ingredients.push(new Ingredient(ingredient.title, ingredient.quantity));
                }
                this.addRecipe(recipe.rid,
                    recipe.title,
                    recipe.photo,
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

    addRecipe(rid:number, title:string, photo:string, description:string, preparation:string, rating:number, ingredients:Ingredient[],categories:string[]) {
        this.recipes.push(new Recipe(rid,title,photo,description,preparation,ingredients,rating,categories));
        for(let category of categories){
            if(this.categories.indexOf(category) == -1){
                this.categories.push(category);
            }
        }
    }

    createRecipe(title:string,photo:string,description:string,preparation:string,ingredients:Ingredient[],categories:string[],done): void {
        let data = {
            title: title,
            photo: photo,
            description: description,
            preparation: preparation,
            ingredients: ingredients,
            categories: categories,
            token: this.fbToken
        };
        this.http.post(this.service + '/recipe',data).map((res) => {
            return res.json();
        }).subscribe((data) => {
            this.addRecipe(data.rid,title,photo,description,preparation,0,ingredients,categories);
            done();
        });
    }


    getRecipe(rid:number): Promise<Recipe>{
        for(let recipe of this.recipes){
            if(recipe.rid == rid){
                return Promise.resolve(recipe);
            }
        }
        return Promise.resolve({});
    }


    getCategories(): Promise<string[]> {
        return Promise.resolve(this.categories);
    }

    evaluate(rid:number, rating:number): Observable<number> {
        let data = {
            rid: rid,
            rating: rating,
            token: this.fbToken
        };
        return this.http.post(this.service + "/evaluate",data).map((res) => {
            return res.json().rating;
        });
    }

}
