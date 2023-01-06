import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {
  userTxt:string;
  pswTxt:string;

  ngOnInit(){
  }
  
  onSubmit(form:NgForm){
    console.log("TD");
    console.log(form.value);
    this.userTxt = form.value.userGroup.user;
    this.pswTxt = form.value.password;
  }

  // @ViewChild('f') f : NgForm; //other option

  // onSubmit2(){
  //   console.log("TD");
  //   console.log(this.f.value);
  //   this.userTxt = this.f.value.user;
  //   this.pswTxt = this.f.value.password;
  // }
}
