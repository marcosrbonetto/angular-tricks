import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessComponent,
    WarningComponent,
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
    DetailUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
