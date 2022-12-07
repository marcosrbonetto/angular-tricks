import {Component} from '@angular/core';

@Component({
    selector:'[success]',
    template: '<p>Success</p>',
    styles: [`
    p{
        padding:20px;
        background-color:green;
        color:white;
        border: 1px solid green;
    }
    `]
})


export class SuccessComponent{

}