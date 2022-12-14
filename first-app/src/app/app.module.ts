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
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
