import {HttpClient} from '@angular/common/http'
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn:'root'})

export class StoreDataService{
    constructor(private http:HttpClient, private recipeService:RecipeService, private auth:AuthService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://angular-1-999ba-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe();
    }

    fetchRecipes(){

        //Here we are using an obs to suscribe to another obs and use their info in the same pipe

        return this.http.get<Recipe[]>(
            'https://angular-1-999ba-default-rtdb.firebaseio.com/recipes.json', //firebase only acept queryparameter for auth and tokens
            //here or in an interceptor you can add new headers/params to be auth in th api
            // {
            //     params: new HttpParams().set('auth', user.token)//we used a interceptor to put this param.
            // }
        )
        .pipe(
            map(recipes=>{
                return recipes.map(recipe=>{
                    return {...recipe, ingredients:recipe.ingredients ? recipe.ingredients:[]};
                })
            }),
            tap(recipes=>{
                this.recipeService.setRecipes(recipes);
            })
        );
    }
}