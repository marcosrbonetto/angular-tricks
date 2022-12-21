import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DirectivesComponent } from './homeworks/directives/directives.component';
import { GameControlComponent } from './homeworks/game-control/game-control.component';
import { OddComponent } from './homeworks/odd/odd.component';
import { EvenComponent } from './homeworks/even/even.component';
import { CustomDirectivesDirective } from './directives/custom-directives.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { UserComponent } from './users/user/user.component';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { CanDeactivateGuard } from './home/home/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ObservableComponent } from './observable/observable.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { UserAssesmentComponent } from './forms/user-assesment/user-assesment.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { ReactiveAssessmentComponent } from './forms/reactive-assessment/reactive-assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DirectivesComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    CustomDirectivesDirective,
    DropdownDirective,
    UserComponent,
    HomeComponent,
    NotFoundComponent,
    EditUserComponent,
    DetailUserComponent,
    ErrorPageComponent,
    ObservableComponent,
    UserFormComponent,
    UserAssesmentComponent,
    ReactiveFormComponent,
    ReactiveAssessmentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
