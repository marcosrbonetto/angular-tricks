import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  itemSelected:Recipe=null;

  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
      console.log("evento - "+recipe);
      console.log("selec - "+ this.itemSelected);
      this.itemSelected = recipe;
    });
  }

}
