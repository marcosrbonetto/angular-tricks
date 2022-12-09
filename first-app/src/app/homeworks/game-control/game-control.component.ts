import { Component, EventEmitter, Output } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  count = 1;
  ref:any;
  @Output('gameStarts') gameStarts =  new EventEmitter<number>();

  onGameStarts(){
    this.ref = setInterval(()=> this.incrementAndEmit(),1000);
  }

  incrementAndEmit(){
    this.gameStarts.emit(this.count)
    this.count++;
  }

  onGameStopts(){
    clearInterval(this.ref);
  }

}
