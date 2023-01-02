import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class AppDropdownDirective{

    @HostBinding('class.open') isOpen = false;

    constructor(private element:ElementRef){

    }

    @HostListener('document:click', ['$event']) onToggle(event:Event){
        this.isOpen = this.element.nativeElement.contains(event.target)? !this.isOpen : false;
    }

    // @HostListener('click') onToggle(event:Event){
    //     this.isOpen = !this.isOpen;
    // }

}