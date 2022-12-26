import { Component} from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { StoreDataService } from '../shared/store-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private store:StoreDataService){}

  SaveData(){
    this.store.storeRecipes();
  }

  FetchData(){
    this.store.fetchRecipes().subscribe();
  }
 
}
