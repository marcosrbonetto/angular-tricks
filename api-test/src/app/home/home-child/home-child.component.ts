import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit{

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

