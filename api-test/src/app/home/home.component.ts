import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  id:string;
  constructor(private router:Router, private myRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.myRoute.params.subscribe(
      (param:Params)=>{
        this.id = param['id'];
      }
    );
  }

}
