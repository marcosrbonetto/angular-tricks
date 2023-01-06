import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit{
  errorMessage='Error page...';

  constructor(private router:Router, private myRoute:ActivatedRoute){}

  ngOnInit(){
    this.myRoute.data.subscribe((data:Data)=>{
      this.errorMessage = data['error'];
    })
  }
}
