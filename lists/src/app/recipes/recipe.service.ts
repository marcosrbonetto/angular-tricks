import { createInjectableType } from "@angular/compiler";
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService{

    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'New Recipe 1',
            'The desciption 1',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2022%2F12%2F02%2Feasy-fudge-bites-a683795d-1119-onecms-horiz-1222.jpg&w=400&h=268&c=sc&poi=face&q=60',
            [new Ingredients('Egg',1)]
        ),
        new Recipe('New Recipe 2','The desciption 2','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2022%2F09%2F12%2Fpeanut-butter-oat-drop-cookies-jam-4T8SgiBLKYp8Pjtwb3RPGC-0222-horiz-0922.jpg&w=400&h=268&c=sc&poi=face&q=60',[]),
        new Recipe('New Recipe 3','The desciption 3','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2018%2F06%2F12164012%2Fwine-dessert-sauce-walmart-7000876-0518.jpg&w=400&h=400&c=sc&poi=face&q=60',[]),
        new Recipe('New Recipe 4','The desciption 4','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2019%2F01%2F12170717%2F3-layer-apple-cake-martha-bakes-se11-d1-0210-2-d113216.jpg&w=400&h=400&c=sc&poi=%5B1166%2C629%5D&q=60',[])
      ];

    constructor(private slService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id:number){
        return this.recipes.slice()[id];
    }

    addIngredients(list:Ingredients[]){
        this.slService.addIngredients(list);
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, recipe:Recipe){
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }

}