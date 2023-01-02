import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  f:FormGroup;
  
  constructor() {
  }

  ngOnInit(): void {
    this.f = new FormGroup({
      'user': new FormControl<string>("",[Validators.required,Validators.email]),
      'password': new FormControl<string>("",[Validators.required])
    })
  }

  onSubmit(){
    console.log("Reactive");
    console.log(this.f.value);
  }
}
