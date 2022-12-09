import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('nameInput') nameInput : ElementRef;
@ViewChild('amountInput') amountInput : ElementRef;
@Output('created') created = new EventEmitter<Ingredients>();

  onSubmit(){
    this.created.emit(new Ingredients(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value))
  }

}
