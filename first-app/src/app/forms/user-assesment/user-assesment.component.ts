import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-assesment',
  templateUrl: './user-assesment.component.html',
  styleUrls: ['./user-assesment.component.css']
})
export class UserAssesmentComponent {
@ViewChild('form') form : NgForm;
subscriptions=["Basic","Advanced","Pro"];
info = {email:'',psw:'',subscription:''};
submitted =false;

  onSubmit(){
    this.submitted = true;
    this.info.email = this.form.value.email;
    this.info.psw = this.form.value.psw;
    this.info.subscription = this.form.value.subscription;
  }
}
