import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'containPipe'
})
export class ContainPipePipe implements PipeTransform {

  transform(value: any, filter:string, prop:string): any {
    if(value === null || value.length===0 || filter.length===0){return value;}

    let array=[];

    for(let item of value){
      if(value[prop]===filter){
        array.push(value);
      }

    }

    return array;
  }

}
