import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.css']
})
export class FormChildComponent implements OnInit{
  @Input() user;
  @Input() password;

  ngOnInit(){
  }
}
