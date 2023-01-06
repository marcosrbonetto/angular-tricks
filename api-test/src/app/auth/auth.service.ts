import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";
import { EnvironmentInjector, Injectable } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { Router } from "@angular/router";

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


    userSession = new BehaviorSubject<User>(null);
    private sessionTimeOut:any;

    constructor(private http:HttpClient, private router:Router){}

    logIn(user:string, psw:string){

        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ environment.firebaseApiKey,
            {
                email:user,
                password:psw,
                returnSecureToken: true
            })
            .pipe(
                catchError(this.handleError),
                tap(resp=>{
                    this.handleAuthRespose(resp)
            })
        );
    }

    logOut(){
        this.userSession.next(null);
        localStorage.removeItem('userData');
        if(this.sessionTimeOut){
            clearTimeout(this.sessionTimeOut);
        }
        this.sessionTimeOut = null;
        this.router.navigate(['/home']);

    }

    autoLogOut(ms:number){
        this.sessionTimeOut = setTimeout(() => {
            this.logOut();
        }, ms);
    }

    handleAuthRespose(resp: AuthResponseData){
        const expDate = new Date(new Date().getTime()+(+resp.expiresIn*1000));
        const user = new User(resp.email, resp.localId, resp.idToken, expDate);

        this.userSession.next(user);

        console.log(JSON.stringify(user));
        localStorage.setItem('userData',JSON.stringify(user));
        this.autoLogOut(+resp.expiresIn*1000);
    }

    handleError(error:HttpErrorResponse){
        return throwError(()=>new Error(error.message));
    }

}