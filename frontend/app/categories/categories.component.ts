import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { RecipeService } from '../models/recipe-service';

@Component({
  selector: 'categories',
  templateUrl: './app/categories/categories.html'
})

export class CategoriesComponent implements OnInit {

    @Output() onSelectCategory = new EventEmitter<string>();

    categories = [];
    activeCategory = '';

    constructor(private recipeService: RecipeService) { }

    onSelect(category: string){
        this.activeCategory = category;
        this.onSelectCategory.emit(category);
    }

    getCategories(): void {
        this.recipeService.getCategories().then(categories => this.categories = categories);
    }

    ngOnInit(): void {
        this.getCategories();
    }
}
