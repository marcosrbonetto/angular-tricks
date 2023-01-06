import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseX'
})
export class UpperCasePipe implements PipeTransform {

  // transform(value: string): string {
  //   let newString ='';
  //   for(let i=0; i< value.length; i++){
  //     if(['a','e','i','o','u'].includes(value[i])){
  //       newString += value[i].toUpperCase();
  //     }
  //     else{
  //       newString += value[i];
  //     }
    
  //   }
  //   return newString;
  // }

  transform(value: string): string {
    let newString = value
      .split('')
      .reduce(this.reduceFn,'');
    
    return newString;
  }

  reduceFn(accumulator:string,current:string){
    if(['a','e','i','o','u'].includes(current)){
          return accumulator+(current.toUpperCase());
    }
    return accumulator+(current);
  }

}
