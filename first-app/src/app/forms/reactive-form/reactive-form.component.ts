import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  theForm : FormGroup
  forbiddenUsername=['Ana'];
  forbiddenEmails=['default@email.com'];

  ngOnInit(){
    //Creation of the form
    this.theForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('default user name',[Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl('default@email.com',[Validators.required, Validators.email], this.forbiddenAsyncEmails.bind(this))
      }),
      //Dynamic content
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.theForm);
  }

  listHobbiesControls(){
    //Add content to FormArray
    const control = new FormControl(null, Validators.required);
    this.getHobbiesControls().push(control);
  }

  getHobbiesControls(){
    return (<FormArray>this.theForm.get('hobbies'));
  }

  //Reactive Validator
  forbiddenNames(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenUsername.indexOf(control.value)!==-1){
      return {'nameIsForbidden':true};
    }
    else
      return null;
  }

  forbiddenUserEmails(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenEmails.indexOf(control.value)!==-1){
      return {'emailIsForbidden':true};
    }
    else
      return null;
  }
  // Async custom validation
  forbiddenAsyncEmails(control:FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(() => {
        if(this.forbiddenEmails.indexOf(control.value)!==-1){
          return resolve({'emailIsForbidden':true});
        }
        else
          return resolve(null);
      }, 1500);
    });
    return promise;
  }

}
