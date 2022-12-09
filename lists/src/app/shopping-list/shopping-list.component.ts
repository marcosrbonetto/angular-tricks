import { Component } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredients: Ingredients[] = [ new Ingredients('Pepper',100)];

onNewIngredientAdded(newOne:Ingredients){
  this.ingredients.push(newOne);
}
}
