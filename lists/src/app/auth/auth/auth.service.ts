import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { catchError, throwError } from "rxjs";

export interface AuthResponseData{
    localId: string,
    email: string,
    displayName: string,
    idToken: string,
    registered:string,
    refreshToken: string,
    expiresIn: string
}

@Injectable({providedIn:'root'})

export class AuthService{
    constructor(private http:HttpClient){}

    signUp(email:string,password:string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAHA5B4GLPDyFO8jQcyP-qZuQLwn5MKvaI',
            {
                email:email,
                password:password,
                returnSecureToken: true
            })
            .pipe(catchError(this.handleError));
    }

    signIn(email:string,password:string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAHA5B4GLPDyFO8jQcyP-qZuQLwn5MKvaI',
            {
                email:email,
                password:password,
                returnSecureToken: true
            })
            .pipe(catchError(this.handleError));
    }

    private handleError(errorMsg:HttpErrorResponse){
        console.log(errorMsg);
        let newError = 'An unknown error occurred!'

        if(!errorMsg.error || !errorMsg.error.error){
            return throwError(()=>new Error(newError));
        }

        switch(errorMsg.error.error.message){
            case 'EMAIL_EXISTS':
                newError = 'This email already exists.';
                break;
            case 'INVALID_PASSWORD':
                newError = 'Invalid Password.';
                break;
            case 'EMAIL_NOT_FOUND':
                newError = 'Email not found.';
                break;
                
        }

        return throwError(()=>new Error(newError));
    }
}