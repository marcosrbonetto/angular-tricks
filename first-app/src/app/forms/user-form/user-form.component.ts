import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @ViewChild('f') theForm:NgForm;
  reply:string;
  genders=['male', 'female'];
  user = {username:'', email:'', gender:'male', secret:'pet'}
  submitted=false;
  
  constructor(){}

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    console.log("the form: "+ this.theForm.value.gender);
    this.user.username = this.theForm.value.userData.username;
    this.user.email = this.theForm.value.userData.email;
    this.user.gender = this.theForm.value.userData.gender;
    this.user.secret = this.theForm.value.secret;
  }
  
  suggest(){
    this.theForm.form.patchValue({userData:{username:'suggested username'}});
  }
}
