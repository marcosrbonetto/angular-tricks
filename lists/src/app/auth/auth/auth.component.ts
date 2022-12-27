import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isLoginMode=true;
  isLoading=false;
  error:string=null;

  constructor(private authService:AuthService, private router:Router){}

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }


  onSubmit(form:NgForm){

    if(!form.valid){
      return;
    }
    this.isLoading = true;
    let authObs = new Observable<AuthResponseData>();

    if(this.isLoginMode){
      authObs = this.authService.signIn(form.value.email, form.value.password);
    }
    else{
      authObs = this.authService.signUp(form.value.email, form.value.password);
    }

    authObs.subscribe({
      next: 
            responseData =>{
            this.isLoading = false;
            this.error=null;
            this.router.navigate(['/recipes']);
            },
      error: 
            error=>{
              this.isLoading = false;
              this.error = error;
            }
    });
    
    form.reset();
  }
}
