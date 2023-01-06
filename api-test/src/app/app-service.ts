import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { flatMap, map, mergeMap, take } from "rxjs";
import { Cat } from "./shared/cat.model";


export interface University{
    name:string
    country:number
}

@Injectable({providedIn:'root'})

export class AppService{

    isAuth:boolean=true;
    isAuthChild:boolean=true;
    constructor(private http:HttpClient){

    }


    fetchCatData(){
        return this.http.get<Cat>('https://catfact.ninja/fact');
    }

    fetchUniversities(country:string){
        return this.http.get<University[]>("http://universities.hipolabs.com/search?country="+country)
    }

    fetchTransformedCatData(){
        return this.fetchCatData()
                .pipe(
                    map(res=>{
                        return {...res,fact:this.toReverse(res.fact)};
                }));
    }

    toReverse(value: any):any {
        return value.split("").reverse().join("");
    }

    toCamelCase(value: string) {
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

}