import { Injectable,EventEmitter } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()

export class UserService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private conterService:CounterService){

    }
    
    changeStatus = new EventEmitter<string>();

    onSetToInactive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.conterService.incrementToInactive();
    }
  
    onSetToActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.conterService.incrementToActive();
    }

}