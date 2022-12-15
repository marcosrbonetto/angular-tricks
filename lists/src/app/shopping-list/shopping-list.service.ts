import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService{
    private ingredients: Ingredients[] = [ new Ingredients('Pepper',100)];
    ingredientsChanged = new EventEmitter<Ingredients[]>();
    getIngredients(){
        return this.ingredients.slice();
    }

    onNewIngredientAdded(newOne:Ingredients){
        this.ingredients.push(newOne);
        this.ingredientsChanged.emit(this.getIngredients());
      }

      addIngredients(ingredients:Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}