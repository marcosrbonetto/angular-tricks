import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { FetchingResolverService } from "./recipes/fetching-resolver.service";
import { AuthComponent } from "./auth/auth/auth.component";

const appRoutes:Routes = [
    {path:'', redirectTo:'/recipes', pathMatch:"full"},
    {path:'recipes', component: RecipesComponent, children:[
        {path:'',component: RecipeStartComponent , pathMatch:"full", resolve:[FetchingResolverService]},
        {path:'new',component: RecipeEditComponent},
        {path:':id',component: RecipeDetailComponent, resolve:[FetchingResolverService]},
        {path:':id/edit',component: RecipeEditComponent, resolve:[FetchingResolverService]}
    ]},
    {path:'shopping-list', component: ShoppingListComponent},
    {path:'auth', component: AuthComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}