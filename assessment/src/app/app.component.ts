import { Component } from '@angular/core';
import { FunctionService } from './functions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment';

  constructor(private service:FunctionService) {
    service.every();
    service.some();
    service.filter();
    service.map();
    service.reduce();
    service.concat();
    service.sort();
    service.reverse();
    service.entries();
    service.find();
    service.others();
  }
}
