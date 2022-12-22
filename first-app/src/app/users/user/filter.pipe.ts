import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter:string, prop:string):any {
    if(filter===''){
      return value;
    }

    const array=[];

    for(const item of value){
      if(item[prop] === filter){
        array.push(item);
      }
    }

    return array;
  }

}
