import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, debounce, debounceTime, of, switchMap } from 'rxjs';
import { AppService, Universities } from '../app-service';

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
  resultsUni$ : Observable<Universities[]>;

  constructor(private service:AppService){}

  ngOnInit(){
    this.resultsUni$ = this.newChar$.pipe(
      debounceTime(500),
      switchMap(x => this.searchUniv(x)
      )
    );
  }

  onKeyUp(event:Event){
    console.log(event);
    this.newChar$.next("");
  }


  search(s:string): Observable<string[]>{
    return this.auto!==""? of(['1','2','3']): of([]);
  }

  searchUniv(s:string): Observable<Universities[]>{
    return this.auto!==""? this.service.fetchUniversities(this.auto) : of([]);
  }
}
