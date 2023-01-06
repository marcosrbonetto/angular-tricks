import { Component, OnInit } from '@angular/core';
import { AppService, University } from '../app-service';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit{

  title = 'api-test';
  original:string='';
  transformed:string='';
  dropdownOpen=false;
  filteredArray:University[];
  
  constructor(private service:AppService, private router:Router, private myRoute:ActivatedRoute){}

  ngOnInit(): void {

    this.myRoute.data.subscribe((data:Data)=>{
      this.original = data['cats'];
    });


    this.service.fetchCatData()
      .subscribe(
        (result)=>{
          this.original = result.fact;
    });;
    this.service.fetchTransformedCatData()
      .subscribe(
        (result)=>{
          this.transformed = result.fact;
    });;

    this.service.fetchUniversities("argentina")
    .pipe(
      filter(u=>{return true;})
    )
    .subscribe(data=>{
      this.filteredArray = data;
    })


  }

  onOpen(){
    this.dropdownOpen = !this.dropdownOpen;
  }
  
}
