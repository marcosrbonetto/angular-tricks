import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import {Subject} from 'rxjs';

export class ShoppingListService{
    private ingredients: Ingredients[] = [ new Ingredients('Pepper',100)];
    ingredientsChanged = new Subject<Ingredients[]>();
    getIngredients(){
        return this.ingredients.slice();
    }

    onNewIngredientAdded(newOne:Ingredients){
        this.ingredients.push(newOne);
        this.ingredientsChanged.next(this.getIngredients());
      }

      addIngredients(ingredients:Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}