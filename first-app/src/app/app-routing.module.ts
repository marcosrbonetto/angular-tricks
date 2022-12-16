import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { CanDeactivateGuard } from "./home/home/can-deactivate-guard.service";
import { HomeComponent } from "./home/home/home.component";
import { NotFoundComponent } from "./not-found/not-found/not-found.component";
import { DetailUserComponent } from "./users/detail-user/detail-user.component";
import { EditUserComponent } from "./users/edit-user/edit-user.component";
import { UserComponent } from "./users/user/user.component";

const appRoutes : Routes = [
    { path: '', component: HomeComponent, canDeactivate:[CanDeactivateGuard]},
    { path: 'user', canActivate:[AuthGuardService], component: UserComponent, children:[
        { path: ':id', component: DetailUserComponent},
        { path: ':id/edit', component: EditUserComponent}
    ]},
    // { path: 'not-found', component: NotFoundComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {message:'Page not found'}},
    { path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}