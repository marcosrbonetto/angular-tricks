import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lists';
  pageToShow = 'recipe';

  onNavigate(newPage:string){
    this.pageToShow = newPage;
  }
}
