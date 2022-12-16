import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{

id:number;  
constructor(private router:Router, private myRoute : ActivatedRoute){}

ngOnInit(): void {
  this.myRoute.params.subscribe((param:Params)=>{
    this.id = param['id'];
  })
}
}
