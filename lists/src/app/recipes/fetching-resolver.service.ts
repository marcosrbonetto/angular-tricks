import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { StoreDataService } from "../shared/store-data.service";
import { Observable } from "rxjs";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn:'root'})

export class FetchingResolverService implements Resolve<Recipe[]>{
    constructor(private store:StoreDataService, private recipeService: RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes = this.recipeService.getRecipes();
        if(recipes.length === 0){
            return this.store.fetchRecipes();
        }
        else{
            return recipes;
        }

    }
}