import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../shared/store-data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private store:StoreDataService){}

  ngOnInit(){
    this.store.fetchRecipes().subscribe();
  }
}
