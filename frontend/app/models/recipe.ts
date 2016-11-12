import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Ingredient } from "./ingredient";

export class Recipe {

    rid: number;
    title: string;
    photo: string;
    description: string;
    preparation: string;
    ingredients: Ingredient[];
    rating: number;
    categories: string[];

    constructor(rid:number, title:string, photo:string, description:string, preparation:string, ingredients:Ingredient[], rating:number, categories:string[]) {
        this.rid = rid;
        this.title = title;
        this.photo = photo;
        this.description = description;
        this.preparation = preparation;
        this.ingredients = ingredients;
        this.rating = rating;
        this.categories = categories;
    }

    getRating(): string {
        return this.rating.toFixed(1);
    }

}
