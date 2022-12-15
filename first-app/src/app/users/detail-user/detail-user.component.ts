import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit{
  id:number = 0;

  constructor(private router:Router, private myRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.id = +this.myRoute.snapshot.params['id'];
    this.myRoute.params.subscribe(
      (param:Params)=>
      {
        this.id = +param['id'];      
      }
    );
  }
}
