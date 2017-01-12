import { Component } from '@angular/core';

import { RecipeService } from '../models/recipe-service';

@Component({
    selector: 'login-view',
    templateUrl: './app/login/login.html'
})

export class LoginComponent {

    constructor(private recipeService: RecipeService) { }

    onFacebookLoginClick() {
        this.recipeService.loginToFacebook();
    }
}
