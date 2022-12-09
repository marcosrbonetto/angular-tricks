import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  even=false;
  theNumber=0;
  
  onStart(eventNumber : number){
    this.even = eventNumber%2 != 0;
    this.theNumber = eventNumber;
  }
}
