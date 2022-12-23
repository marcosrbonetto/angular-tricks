import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import {tap} from 'rxjs';

export class LoggingInterceptorService implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next :HttpHandler){
        return next.handle(req).pipe(
            tap(event => {
                if(event.type === HttpEventType.Response){
                    //Here access to the response and body
                    console.log("Received this body... ");
                    console.log(event.body);
                }
            })
        );
    }
}