import { Component, OnInit } from '@angular/core';

import { RecipeService } from './models/recipe-service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.layout.html'
})

export class AppComponent implements OnInit {

    constructor(private recipeService: RecipeService) { }

    loggedIn: boolean;

    getLoginState(){
        return this.loggedIn;
    }

    ngOnInit() {
        let self = this;
        FB.getLoginStatus(response => {
            if (response.status === 'connected') {
                self.loggedIn = true;
            }else{
                self.loggedIn = false;
            }
        });
    }

}
