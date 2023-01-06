import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Data, Router, UrlTree } from '@angular/router';
import { CanComponentDeactivate } from '../deactivate-guard.servise';
import { Observable } from 'rxjs';
import { AppService } from '../app-service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit, CanComponentDeactivate{
  f:FormGroup;
  canDeact=false;

  constructor(private service:AppService, private router:Router, private myRoute:ActivatedRoute){}

  canDeactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    return this.canDeact? true : confirm('Suscribe?');
  }

  ngOnInit(): void {
    this.f = new FormGroup({
      'user': new FormControl<string>("",[Validators.required,Validators.email]),
      'password': new FormControl<string>("",[Validators.required]),
      'items': new FormArray([
        new FormGroup({
          'itemName': new FormControl<string>("Item1")
        })
      ])
    })
  }

  getFormArrayRef(name:string){
    return (<FormArray>this.f.get(name));
  }

  getControls(){
    return this.getFormArrayRef("items").controls;
  }

  addItem(){
    this.getFormArrayRef("items").push(new FormGroup({
      'itemName': new FormControl<string>("itemAgregado")
    }))
  }

  onSubmit(){
    console.log("Reactive");
    console.log(this.f.value);
    console.log(this.f.value['user']);

    this.canDeact = true;

  }
}
