import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { StrictCamelPipe } from './strict-camel.pipe';
import { AppDropdownDirective } from './dropdown.directive';
import { Route, RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TdFormComponent } from './td-form/td-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormChildComponent } from './form-child/form-child.component';
import { DirectivesDirective } from './directives/directives.directive';
import { HomeChildComponent } from './home/home-child/home-child.component';
import { AuthGuardService } from './auth.guard.service';
import { CanDeactivateGuardService } from './deactivate-guard.servise';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CatResolveGuard } from './resolve-guard.service';
import { SortedList } from './sorted-list.pipe';
import { SubstringPipePipe } from './substring-pipe.pipe';
import { ContainPipePipe } from './contain-pipe.pipe';
import { AuthComponent } from './auth/auth.component';

const routes : Routes = [
  {path: '' , redirectTo:'/auth', pathMatch:'full'},
  {path: 'home' , component: HomeComponent , canActivate: [AuthGuardService], children: [
    {path:':id', component:HomeChildComponent}
  ]},
  {path: 'test' , component: TestComponent , resolve:{cats:CatResolveGuard}},
  {path: 'td' , component: TdFormComponent},
  {path: 'reactive' , component: ReactiveFormComponent, canActivate: [AuthGuardService], canDeactivate:[CanDeactivateGuardService]},
  {path: 'auth' , component: AuthComponent},
  {path: 'error' , component: ErrorPageComponent, data:{error:'Page not found'}},
  {path: '**' , redirectTo:'/error'}
]

@NgModule({
  declarations: [
    AppComponent,
    StrictCamelPipe,
    ReversePipe,
    TestComponent,
    HeaderComponent,
    AppDropdownDirective,
    HomeComponent,
    TdFormComponent,
    ReactiveFormComponent,
    FormChildComponent,
    DirectivesDirective,
    HomeChildComponent,
    ErrorPageComponent,
    SortedList,
    SubstringPipePipe,
    ContainPipePipe,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
