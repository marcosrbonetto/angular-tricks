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

const routes : Routes = [
  {path: '' , redirectTo:'/home', pathMatch:'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'test' , component: TestComponent},
  {path: 'td' , component: TdFormComponent},
  {path: 'reactive' , component: ReactiveFormComponent},
  {path: 'auth' , component: HomeComponent}
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
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
