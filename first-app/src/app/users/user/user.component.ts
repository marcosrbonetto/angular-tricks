import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{
  userId:number;
  paramSuscription:Subscription;
  nameToFilter='';

  arrayName = [{name:'1', otro:2},{name:'9', otro:2},{name:'3', otro:2},{name:'4', otro:2}];
  arrayName2 = [{name:'1', otro:2},{name:'9', otro:2},{name:'3', otro:2},{name:'4', otro:2}];

  constructor(private router:Router, private myRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.userId = +this.myRoute.snapshot.params['id'];
    this.paramSuscription = this.myRoute.params.subscribe(
      (param:Params)=>
      {
        this.userId = +param['id'];      
      }
    );

  }
  back(){
    this.router.navigate(['/user']);
  }
  goToEdit(){
    this.router.navigate(
      ['/user',1,'edit'], 
      {
        queryParams:{allowEdit:'1',allowDelete:'0'},
        fragment:'loading'
      }
    );
  }

  goToDetail(){
    this.router.navigate(
      ['/user',1]
    );
  }

  // reload(){
  //   this.router.navigate(['edit'],{relativeTo:this.myRoute});//reload con path relativo que concatena
  // }

  ngOnDestroy(): void {
    this.paramSuscription.unsubscribe();
  }
}
