import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {

  constructor(private tr:TemplateRef<any>, private vcRef:ViewContainerRef) { }

  @Input() set appDirectives(condition:boolean){
    if(condition){
      this.vcRef.createEmbeddedView(this.tr);
    }
    else{
      this.vcRef.clear();
    }
  }

}
