import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { flatMap, map, take } from "rxjs";

interface ApiObj{
    copyright:string
    num_results:number
    status:string
    results: ApiObjChild[]
}

interface ApiObjChild{
    id:number
    display_name:string
    list_name:string
    list_name_encoded:string
    newest_published_date:string
    oldest_published_date:string
    updated:string
}

interface CatData{
    fact:string
    length:number
}

export interface Universities{
    name:string
    country:number
}

@Injectable({providedIn:'root'})

export class AppService{

    constructor(private http:HttpClient){

    }

    fetchListData(){
        const data = this.http.get<ApiObj>('https://catfact.ninja/fact')
        .pipe(
            map(res=>{
                let x = 0;
                return res.results.map(item=>{
                    x++;
                    return {...item, id:x};
                }) 
            })
        )
        .subscribe(
            (result)=>{
                console.log(result);
        });
    }

    

    fetchCatData(){
        return this.http.get<CatData>('https://catfact.ninja/fact');
    }

    fetchUniversities(country:string){
        return this.http.get<Universities[]>("http://universities.hipolabs.com/search?country="+country)
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