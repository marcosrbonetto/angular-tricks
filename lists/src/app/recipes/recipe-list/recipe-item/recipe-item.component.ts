import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input('input') input = new Recipe('','','',[]);

  constructor(private recipeService:RecipeService) {
  }

  ngOnInit(){
    
  }

  // onSelect(){
  //   this.recipeService.recipeSelected.emit(this.input);
  //   console.log("evento - "+this.input);
  // }


}
