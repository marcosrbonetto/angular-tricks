import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { BehaviorSubject, Subject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

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

    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer:any;
    
    constructor(private http:HttpClient, private router:Router){}

    logout(){
        this.user.next(null);
        localStorage.removeItem('userData'); // or: localStorage.clear();
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
        this.router.navigate(['/auth']);
    }

    autoLogin(){
        const userData : {email:string, id:string, _token:string, _tokenExpirationDate:string} = JSON.parse(localStorage.getItem('userData'));
        if(!userData){
            return;
        }
        const expDate = new Date(userData._tokenExpirationDate);
        const loadedUser = new User(userData.email, userData.id, userData._token, expDate);
        if(loadedUser.token){
            this.autoLogout(new Date(userData._tokenExpirationDate).getTime()- new Date().getTime());
            this.user.next(loadedUser);
        }
    }

    autoLogout(ms:number){
        this.tokenExpirationTimer= setTimeout(() => {
            this.logout();
        }, ms);
    }

    signUp(email:string,password:string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ environment.firebaseAPIKey,
            {
                email:email,
                password:password,
                returnSecureToken: true
            })
            .pipe(
                catchError(this.handleError),
                 tap(respData => {
                    this.handleAuthentication(respData);
                })
            );
    }

    signIn(email:string,password:string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ environment.firebaseAPIKey,
            {
                email:email,
                password:password,
                returnSecureToken: true
            })
            .pipe(
                catchError(this.handleError),
                tap(respData => {
                    this.handleAuthentication(respData);
           })
       );
    }

    private handleAuthentication(respData:AuthResponseData){
        const expDate = new Date(new Date().getTime()+ (+respData.expiresIn*1000)) ;
        const user=new User(respData.email, respData.localId, respData.idToken, expDate);
        this.user.next(user); 
        localStorage.setItem('userData', JSON.stringify(user));
        this.autoLogout(+respData.expiresIn*1000);
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