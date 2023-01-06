import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private service:AuthService, private router:Router){

  }
  onSubmit(f:NgForm){
    this.service.logIn(f.value.email, f.value.psw)
      .subscribe({
        next: ()=>{
          this.router.navigate(['/home']);
        },
        error: error=>{
          confirm(error);
        }
      });

      f.reset();
  }

}
