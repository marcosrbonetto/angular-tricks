import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substringPipe'
})
export class SubstringPipePipe implements PipeTransform {

  transform(value: any, from:number, to:number): any {

    if(value.length<from) return value;
    
    return "..." + value.substring(from,to).concat('...');
  }

}
