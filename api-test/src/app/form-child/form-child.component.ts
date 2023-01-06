import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, of, switchMap } from 'rxjs';
import { AppService, University } from '../app-service';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.css']
})
export class FormChildComponent implements OnInit{
  @Input() user;
  @Input() password;

  auto:string;

  newChar$ = new Subject<string>();
  results$ : Observable<string[]>;
  resultsUni$ : Observable<University[]>;

  constructor(private service:AppService, private router:Router, private myRoute:ActivatedRoute){}

  ngOnInit(){
    // this.myRoute.data.subscribe((data:Data)=>{
    //   this.resultsUni$ = data['univ'];
    // });



    this.resultsUni$ = this.newChar$.pipe(
      debounceTime(500),
      switchMap(x => this.searchUniv(this.auto)
      )
    );
  }

  onKeyUp(event:Event){
    console.log(event);
    this.newChar$.next(this.auto);
  }


  search(s:string): Observable<string[]>{
    return this.auto!==""? of(['1','2','3']): of([]);
  }

  searchUniv(s:string): Observable<University[]>{
    return s!==""? this.service.fetchUniversities(s) : of([]);
  }

  redirect(){
    this.router.navigate(['/home',5],{
      queryParams: {id:6}
    })
  }



}
