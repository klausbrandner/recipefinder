import {Ingredient} from "./ingredient";
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class Recipe {

    rid: number;
    title: string;
    description: string;
    preparation: string;
    ingredients: Ingredient[];
    rating: number;
    categories: string[];
    private service = 'http://localhost:4040';


    constructor(private http:Http, rid:number, title:string, description:string, preparation:string, ingredients:Ingredient[], rating:number, categories:string[]) {
        this.rid = rid;
        this.title = title;
        this.description = description;
        this.preparation = preparation;
        this.ingredients = ingredients;
        this.rating = rating;
        this.categories = categories;
    }

    evaluate(rating:number, cb) {
        //Object id und rating
        var data = {
            rid: this.rid,
            rating: rating,
        };

        this.http.post(this.service +"/evaluate",data).map((res) =>{
            cb("done");
        });



        console.log("Recipe: " + this.title + " Stars: " + rating);
    }

}
