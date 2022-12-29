import { NgModule } from "@angular/core";
import { ShoppingListRouterModule } from "./shopping-list-routing.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports:[
        RouterModule, 
        SharedModule, 
        ReactiveFormsModule, 
        FormsModule,
        ShoppingListRouterModule
    ]
})

export class ShoppingListModule{}