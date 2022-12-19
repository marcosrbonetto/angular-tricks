import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy{

  private newSubscription:Subscription;

  constructor() {
  }
  ngOnInit(): void {
    const newObservable = new Observable(
      (observer) => {
        let i=0;
        setInterval(()=>{
          observer.next(i);
          i++;
        },1000);
      }
    );

    this.newSubscription = newObservable.subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }

  ngOnDestroy(): void {
    this.newSubscription.unsubscribe();
  }
}
