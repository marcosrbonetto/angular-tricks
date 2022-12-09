import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() itemClicked = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('New Recipe 1','The desciption 1','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2022%2F12%2F02%2Feasy-fudge-bites-a683795d-1119-onecms-horiz-1222.jpg&w=400&h=268&c=sc&poi=face&q=60'),
  new Recipe('New Recipe 2','The desciption 2','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2022%2F09%2F12%2Fpeanut-butter-oat-drop-cookies-jam-4T8SgiBLKYp8Pjtwb3RPGC-0222-horiz-0922.jpg&w=400&h=268&c=sc&poi=face&q=60'),
  new Recipe('New Recipe 3','The desciption 3','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2018%2F06%2F12164012%2Fwine-dessert-sauce-walmart-7000876-0518.jpg&w=400&h=400&c=sc&poi=face&q=60'),
  new Recipe('New Recipe 4','The desciption 4','https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2019%2F01%2F12170717%2F3-layer-apple-cake-martha-bakes-se11-d1-0210-2-d113216.jpg&w=400&h=400&c=sc&poi=%5B1166%2C629%5D&q=60')
];
constructor() {
}

ngOnInit(): void {  
}
onItemClick(theRecipe:Recipe){
  this.itemClicked.emit(theRecipe);
}


}