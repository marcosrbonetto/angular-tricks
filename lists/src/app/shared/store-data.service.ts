import {HttpClient} from '@angular/common/http'
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})

export class StoreDataService{
    constructor(private http:HttpClient, private recipeService:RecipeService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://angular-1-999ba-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe();
    }

    fetchRecipes(){
        return this.http.get<Recipe[]>(
            'https://angular-1-999ba-default-rtdb.firebaseio.com/recipes.json')
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