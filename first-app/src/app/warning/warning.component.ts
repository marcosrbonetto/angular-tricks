import {Component} from '@angular/core';

@Component({
    selector:'[warning]',
    template: '<p>Warning</p>',
    styles: [`
    p{
        padding:20px;
        background-color:red;
        color:white;
        border: 1px solid red;
    }
    `]
})


export class WarningComponent{

}