import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { AuthGuard } from "../auth/auth.guard";
import { FetchingResolverService } from "./fetching-resolver.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";

const routes : Routes = [
    {
        path:'', 
        component: RecipesComponent,
        canActivate:[AuthGuard], 
        children:[
            {path:'',component: RecipeStartComponent , pathMatch:"full"},
            {path:'new',component: RecipeEditComponent},
            {path:':id',component: RecipeDetailComponent, resolve:[FetchingResolverService]},
            {path:':id/edit',component: RecipeEditComponent, resolve:[FetchingResolverService]}
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RecipesRoutingModule{}