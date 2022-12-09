import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]'
})
export class CustomDirectivesDirective implements OnInit {
  @Input() defaultElementColor:string;
  @HostBinding('style.color') elementColorBinding:string;

  constructor() { }

  ngOnInit(): void {
    this.elementColorBinding = this.defaultElementColor;
  }

  @HostListener('mouseenter') mouseOverElement(eventName:Event){
    this.elementColorBinding = 'blue';
  }
  @HostListener('mouseleave') mouseLeaveElement(eventName:Event){
    this.elementColorBinding = this.defaultElementColor;
  }

}
