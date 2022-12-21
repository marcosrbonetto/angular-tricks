import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';


@Component({
  selector: 'app-reactive-assessment',
  templateUrl: './reactive-assessment.component.html',
  styleUrls: ['./reactive-assessment.component.css']
})
export class ReactiveAssessmentComponent implements OnInit{
  theForm:FormGroup;
  statusDropdown=['Stable','Critical','Finished'];

  constructor(){

  }

  ngOnInit(){
    this.theForm = new FormGroup({
      'projectName':new FormControl("Default",[Validators.required, CustomValidators.forbiddenProjectNamesValidator],CustomValidators.asyncForbiddenProjectNameValidator),
      'email':new FormControl("test@test.com",[Validators.required,Validators.email]),
      'status':new FormControl(this.statusDropdown[0])
    });
  }

  

  onSubmit(){
    console.log(this.theForm.value);
  }

}
