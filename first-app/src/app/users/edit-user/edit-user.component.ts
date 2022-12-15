import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  id:number = 0;
  allowEdit:boolean;
  allowDelete:boolean;
  fragment:string=''

  constructor(private router:Router, private myRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.id = +this.myRoute.snapshot.params['id'];
    this.myRoute.params.subscribe(
      (param:Params)=>
      {
        this.id = +param['id'];      
      }
    );
    this.myRoute.queryParams.subscribe(
      (param:Params)=>
      {
        this.allowEdit = +param['allowEdit']===1?true:false;      
        this.allowDelete = +param['allowDelete']===1?true:false;    
        this.fragment = param['']  
      }
    );
  }
}
