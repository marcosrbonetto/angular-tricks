import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortedList'
})
export class SortedList implements PipeTransform {

  transform(value: string): any {
    return value
      .split('')
      .sort((a,b)=> a>b? 1:-1)
      .join('');
  }

}
