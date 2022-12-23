import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Post } from "./shared/post.model";
import {map, Subject, catchError, throwError} from 'rxjs';
import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})

export class PostService{

    internalError = new Subject<string>();
    
    constructor(private http:HttpClient){}
    
    createNewPost(post:Post){
        this.http.post<{name:string}>(
            'https://angular-1-999ba-default-rtdb.firebaseio.com/posts.json',
            post,
            {
                observe:'response'//to see headers and status, Other option: body, (only body)
            })
        .subscribe({
            next: 
                (response)=>{
                    console.log(response);
                }
            ,error: 
                error=>{
                this.internalError.next(error.message);
                }
        });
    }

    fetchPosts(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print','pretty');
        //searchParams = searchParams.append('print2','pretty2');

        return this.http
      .get<{ [key:string] : Post }>(
            'https://angular-1-999ba-default-rtdb.firebaseio.com/posts.json',
            { 
                headers:new HttpHeaders({'Custom1':'Hello'}),
                params: searchParams
            })
      .pipe(
            map((responseData) => {
            const arrayProj:Post[] = [];
            for(const key in responseData){
                if(responseData.hasOwnProperty(key)){
                arrayProj.push({ ...responseData[key], id:key});
                }
            }
            return arrayProj;
            }),
            catchError(
                (error)=>{
                    //log error
                    return throwError(()=>{
                         new Error(error);
                    });
            })
      );
    }

    deletePosts(){
        return this.http.delete('https://angular-1-999ba-default-rtdb.firebaseio.com/posts.json');
    }
}