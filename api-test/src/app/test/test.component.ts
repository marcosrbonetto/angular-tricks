import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service';

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
  
  constructor(private service:AppService){}

  ngOnInit(): void {
    //this.service.fetchListData();
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
  }

  onOpen(){
    this.dropdownOpen = !this.dropdownOpen;
  }
  
}
