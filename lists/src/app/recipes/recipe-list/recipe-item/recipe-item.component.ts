import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input('input') input = new Recipe('','','',[]);
  @Input('index') index: number;

  constructor(private recipeService:RecipeService, private router:Router, private myRoute : ActivatedRoute) {
  }

  ngOnInit(){
  
  }

}
