import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, CanComponentDeactivate{ 

  changesSaved:boolean=false;
  constructor(private router:Router, private authService:AuthService){}

  ngOnInit(): void {
  }

  onLogIn(){
    this.authService.logIn();
  }
  onLogOut(){
    this.authService.logOut();
  }
  saveChanges(save:boolean){
    this.changesSaved = save;
  }
  canDeactivate():boolean | Observable<boolean> | Promise<boolean>{
    if(this.changesSaved){ //here we can add another comparations to check for changes 
      return true;
    }else{
      return confirm('Salir igual?');
    }
  }
}
