import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'strictCamel'
})
export class StrictCamelPipe implements PipeTransform{
    transform(value: string) {
        let result='';
        let array = value.split('');

        for (let i = 0; i < array.length; i++) {
            let char = array[i];
            if(i === 0 || array[i-1] === ' '){
                char=char.toUpperCase();
            }
            result = result.concat(char);
        } 
        return result;           
    }
    // transform(value: string) {
    //     let result='';
    //     for (let i = 0; i < value.split('').length; i++) {
    //         let char = value[i];
    //         if(i%2===0){
    //             char=char.toUpperCase();
    //         }
    //         result = result.concat(char);
    //     } 
    //     return result;           
    // }
}