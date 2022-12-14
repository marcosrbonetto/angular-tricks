import { Injectable } from '@angular/core';
import { UserService } from './user.service';
@Injectable()
export class CounterService{

    toActive:number=0;
    toInactive:number=0;

    incrementToActive(){
        this.toActive++;
        console.log(this.toActive);
    }

    incrementToInactive(){
        this.toInactive++;
        console.log(this.toInactive);
    }

}