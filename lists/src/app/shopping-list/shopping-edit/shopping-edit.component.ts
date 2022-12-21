import { Component,OnDestroy,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') theForm : NgForm;
  subscription : Subscription;
  editMode=false;
  indexToEdit = 0;
  editedItem : Ingredients
   

  constructor(private shoppingListService:ShoppingListService){}
  ngOnInit(): void {
    this.subscription = this.shoppingListService.startEditing.subscribe((index:number)=>{
      this.indexToEdit = index
      this.editMode=true;
      this.editedItem = this.shoppingListService.getIngredientsByIndex(index);
      this.theForm.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
    });
  }
  onSubmit(form:NgForm){
    if(this.editMode){
      this.shoppingListService.editIngredient(this.indexToEdit,new Ingredients(form.value.name,form.value.amount))
    }
    else{
      this.shoppingListService.onNewIngredientAdded(new Ingredients(form.value.name,form.value.amount));
    }
    this.clear();
  }

  clear(){
    this.theForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.indexToEdit);
    this.clear()
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
