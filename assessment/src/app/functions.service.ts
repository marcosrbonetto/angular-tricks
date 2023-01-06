import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})

export class FunctionService{

    array = [1,2,6,4,5];
    str = "This is a string";

    //BOOLEAN

        //every(x=>fn) validate if ALL elements in the array fit the function : boolean
        every(){
            let result1 = this.array.every(x=> x<10);
            let result2 = this.str.split('').every(x=>x.match(/^[a-z ]*$/gi));
            console.log("every array: "+result1);

        }
        //some(x=>fn) validate if at least 1 element passes the fn
        some(){
            let result = this.array.some(x=>x===1);
            console.log("some array: "+result);
        }

    //RETURNS ACUMULATION, ONE VALUE

        //reduce --> reduce it to a single value acumulated
        reduce(){
            let result = this.array.reduce((ac,x)=>{
                return ac + x;
            });
            console.log("reduce " + result);
        }

        //find retorna primer valor que cumpla

        find(){
            let result = this.array
            .find(
                x=>
                    x.toString()
                    .startsWith('4')
                );
            console.log("find "+ result);
        }



    //RETURNS A NEW ARRAY TRANSFORMED
        //map
        map(){
            let result = this.array.map(x=>x*2);
            let result2 = this.array.map(x=>{return x*2;});
            console.log("map array: "+result);
        }

        //filter
        filter(){
            let result = this.array.filter(x=>x>4);
            console.log("filter array: "+result);
        }

        //concat
        concat(){
            let result = this.array.concat(this.array);
            console.log("concat array: "+result);
        }

        //sort
        sort(){
            console.log("sort " + this.array.sort());
            let result2= this.array.sort(
                (a,b)=>{
                    return a<b?1:-1;
                });
            console.log("sort d " + result2); 
        }

        //reverse
        reverse(){
            console.log("reverse: "+ this.array.reverse());
        }

        //entries devuelve un key value por cada item en el array
        entries(){
            // for( var x of this.array.entries()){
            //     console.log(x);
            // };
        }

        others(){
            
            // transforma!!! 
            //foreach arrow fn
            this.array.forEach((x,i) => 
                this.array[i] = x * 2 
            );
            console.log("for each: "+ this.array);

            //for each in
            for(let i in this.array){
                this.array[i] = this.array[i]*3;
            } 
            console.log("for each2: "+ this.array);

            //for original
            for(let i=0; i<this.array.length;i++){
                this.array[i] = this.array[i]/2;
            }
            console.log("foreach 3: "+ this.array);

            //join
            console.log("join " + this.array.join('-'));

            //indexOf
            console.log(this.array.indexOf(18));

            //slice
            console.log("original slice: "+ this.array);
            console.log("slice: "+ this.array.slice(1,3));


            //splice
            console.log("original splice: "+ this.array);
            console.log("splice remove: "+ this.array.splice(1,1)); // remove 1 desde 1
            console.log("splice add: "+ this.array.splice(1,0,1)); //agrego 1 desde 1

        }


    
    
    //STRING

    //elementAt
    //charAt
    //substring
    //split

  

        
    




}