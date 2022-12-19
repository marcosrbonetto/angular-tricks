import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Ingredients} from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private subscription:Subscription;
  ingredients: Ingredients[];

  constructor(private shoppingListService: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (list:Ingredients[])=>{
        this.ingredients = list;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
