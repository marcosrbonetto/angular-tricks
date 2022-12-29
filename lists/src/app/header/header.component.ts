import { Component, OnDestroy, OnInit} from '@angular/core';
import { StoreDataService } from '../shared/store-data.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  isAuthenticated=false;
  sub:Subscription;

  constructor(
    private store:StoreDataService,
    private authService : AuthService
  )
  {}
  
  ngOnInit(): void {
      this.sub = this.authService.user.subscribe(user=>{
        this.isAuthenticated = !!user;
        console.log("--auth?--");
        console.log(!!user);

    })
  }

  onLogout(){
    this.authService.logout();
  }

  SaveData(){
    this.store.storeRecipes();
  }

  FetchData(){
    this.store.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
 
}
