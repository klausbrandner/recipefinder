import {Ingredient} from "./ingredient";

export class Recipe {

    rid: number;
    title: string;
    description: string;
    preparation: string;
    ingredients: Ingredient[];
    rating: number;
    categories: string[];


    constructor(rid:number, title:string, description:string, preparation:string, ingredients:Ingredient[], rating:number, categories:string[]) {
        this.rid = rid;
        this.title = title;
        this.description = description;
        this.preparation = preparation;
        this.ingredients = ingredients;
        this.rating = rating;
        this.categories = categories;
    }

    evaluate(rating:number) {
        //POST add rating to db
        console.log("Recipe: " + this.title + " Stars: " + rating);
    }

}
