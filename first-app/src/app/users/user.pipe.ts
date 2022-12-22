import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'userSubstring'
})
export class UserPipe implements PipeTransform{
    transform(value: any, length:number) {
        if(value.length > length)
        {return value.substr(0,length)+'...';}
        else return value;
    }
}