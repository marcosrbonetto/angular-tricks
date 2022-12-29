import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  @ViewChild(PlaceholderDirective, { static: true }) appPlaceholder! : PlaceholderDirective
  isLoginMode=true;
  isLoading=false;
  error:string=null;

  constructor(private authService:AuthService, private router:Router){}

  showErrorAlert(error:string){
    const vcRef = this.appPlaceholder.ref;
    vcRef.clear();
    
    const cRef = vcRef.createComponent(AlertComponent);
    cRef.instance.message=error;
    cRef.instance.close.subscribe(()=>{
      cRef.instance.close.unsubscribe();
      vcRef.clear()
    });
  }

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
              this.showErrorAlert(error);
            }
    });
    
    form.reset();
  }

  

}
