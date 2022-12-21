import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import {Subject} from 'rxjs';

export class ShoppingListService{
    private ingredients: Ingredients[] = [ new Ingredients('Pepper',100)];
    ingredientsChanged = new Subject<Ingredients[]>();
    startEditing = new Subject<number>();

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredientsByIndex(index:number){
      return this.ingredients[index];
    }

    onNewIngredientAdded(newOne:Ingredients){
        this.ingredients.push(newOne);
        this.ingredientsChanged.next(this.getIngredients());
    }

    addIngredients(ingredients:Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    editIngredient(index:number, edited:Ingredients){
        this.ingredients[index] = edited;
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    deleteIngredient(index:number){
      this.ingredients.splice(index,1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
}