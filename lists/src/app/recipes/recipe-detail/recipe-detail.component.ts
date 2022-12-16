import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
recipe = new Recipe('','','',[]) ;
index : number;

constructor(private recipeService:RecipeService, private router:Router, private myRoute : ActivatedRoute){

}

ngOnInit(){
  this.myRoute.params.subscribe((param:Params)=>{
      this.index = +param['id'];
      this.recipe = this.recipeService.getRecipe(this.index);
  });


}



onAddToShoppingList(){
  this.recipeService.addIngredients(this.recipe.ingredients);
}
}
