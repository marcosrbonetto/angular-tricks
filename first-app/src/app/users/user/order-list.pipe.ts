import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderList',
  pure:false
})
export class OrderListPipe implements PipeTransform {

  transform(value: any, prop:string): any {
    return value.sort((a,b)=>{
      if(a[prop]> b[prop]) return 1;
      else return -1
    });
  }

}
