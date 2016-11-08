import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import { Ingredient } from "./ingredient";

@Injectable()
export class RecipeService {

    recipes: Recipe[];
    categories: string[];

    constructor() {
        this.init();
    }

    init() {
        //just mocked data for now
        this.categories = ["Vegan","Fish","Meat","Mexican"];

        let ing1 = new Ingredient("ketchup","1l");
        let ing2 = new Ingredient("nudln","100g");
        this.recipes = [
            new Recipe(1,"Spagetti","spagettiiiis", "nudln mit Ketchup",[ing1,ing2],3.8,["Vegan"]),
            new Recipe(2,"Pfeffer Steak","Das saftige Pfeffer Steak schmeckt allen Fleisch-Liebhabern garantiert. Ein Rezept das einfach zubereitet wird.", "Für das Pfeffersteak die Steaks etwa 1-2 Stunden in Öl, Weinbrand und den zerdrücken Pfefferkörner marinieren. Danach die Steaks in etwas Fett scharf anbraten und rausnehmen. In dem Fett die kleingeschnittenen Zwiebel glasig anbraten und Senf, Suppengewürz und die Petersilie dazugeben. Mit dem Sud der eingelegten Steaks und der Sahne ablöschen. Steaks in die Soße geben, mit vorgewärmten Weinbrand begießen und flambieren.",[ing1,ing2],4,["Meat"]),
            new Recipe(3,"Spagetti Bolognese","spagettiiiis mit Fleisch", "nudln mit Ketchup und Fleisch",[ing1,ing2],4.2,["Meat"]),
            new Recipe(4,"Salat","green Salat", "Salat Gurk und Tomaten vorbereiten und Dressing dazu",[ing1,ing2],3.7,["Vegan"]),
            new Recipe(5,"Spagetti","spagettiiiis", "nudln mit Ketchup",[ing1,ing2],4.4,["Fish"])
        ];
        this.recipes.push(new Recipe(6,"Wrapps","Mexican Dish","Fill wrapps with everything you want.",[ing1,ing2],4.5,['Meat','Mexican']));
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
    rateRecipe(recipe:Recipe, rating:number, cb): void {
        cb("done");
    }


    getCategories(): Promise<string[]> {
        return Promise.resolve(this.categories);
    }

}
