import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../models/recipe-service';

@Component({
  selector: 'categories',
  templateUrl: './app/categories/categories.html'
})

export class CategoriesComponent implements OnInit {

    categories = [];
    activeCategory = '';

    constructor(private recipeService: RecipeService) { }

    onSelect(category: string){
        this.activeCategory = category;
    }

    getCategories(): void {
        this.recipeService.getCategories().then(categories => this.categories = categories);
    }

    ngOnInit(): void {
        this.getCategories();
    }
}
