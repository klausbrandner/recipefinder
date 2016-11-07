import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import { Ingredient } from "./ingredient";

@Injectable()
export class RecipeService {

    recipes: Recipe[];
    categories: string[];
    activeCategory: string;

    constructor() {
        this.init();
    }

    init() {
        //just mocked data for now
        this.categories = ["Vegan","Fish","Meat"];

        let ing1 = new Ingredient("ketchup","1l");
        let ing2 = new Ingredient("nudln","100g");
        this.recipes = [
            new Recipe(1,"Spagetti","spagettiiiis", "nudln mit Ketchup",[ing1,ing2],3.8,["Vegan"]),
            new Recipe(2,"Steak","Beef Stake", "well done beef stake",[ing1,ing2],4,["Meat"]),
            new Recipe(3,"Spagetti Bolognese","spagettiiiis mit Fleisch", "nudln mit Ketchup und Fleisch",[ing1,ing2],4.2,["Meat"]),
            new Recipe(4,"Salat","green Salat", "Salat Gurk und Tomaten vorbereiten und Dressing dazu",[ing1,ing2],3.7,["Vegan"]),
            new Recipe(5,"Spagetti","spagettiiiis", "nudln mit Ketchup",[ing1,ing2],4.4,["Fish"])
        ];
    }

    getRecipes(): Promise<Recipe[]> {
        return Promise.resolve(this.recipes);
    }

    addRecipe(rid:number, title:string, description:string, preparation:string, ingredients:Ingredient[],categories:string[]) {
        this.recipes.push(new Recipe(rid,title,description,preparation,ingredients,0,categories))
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
    setActiveCategory(category: string){
        this.activeCategory = category;
    }
    getActiveCategory(): Promise<string>{
        return Promise.resolve(this.activeCategory);
    }

}
