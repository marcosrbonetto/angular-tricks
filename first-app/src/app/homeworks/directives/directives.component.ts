import {Component} from '@angular/core';

@Component({
    selector:'app-directive',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.css']
})

export class DirectivesComponent{
    showInformation = false;
    logs: number[];
    counter=0;

    constructor(){
        this.logs = [];
    }

    onClickDisplay(){
        this.showInformation=!this.showInformation;
        this.counter++;
        this.logs.push(this.counter);
    }
}