import { TestBed } from "@angular/core/testing";
import { RecipesComponent } from "./recipes.component";
import { StoreDataService } from "../shared/store-data.service";
import { HttpClientModule } from "@angular/common/http";
import { RecipeService } from "./recipe.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

describe('Testing recipe component', ()=>{
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[
                RecipesComponent,
                RecipeListComponent,
                RecipeDetailComponent,
                RecipeItemComponent,
                RecipeStartComponent,
                RecipeEditComponent,
            ],
            imports:[
                RouterModule, 
                RecipesRoutingModule, 
                SharedModule,
                HttpClientModule, 
                ReactiveFormsModule, 
                FormsModule,RouterModule
            ],
            providers: [RecipeService, StoreDataService, ShoppingListService]
        }).compileComponents();
    });

    it('should create recipe component',()=>{
        let fixture = TestBed.createComponent(RecipesComponent);
        let app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});