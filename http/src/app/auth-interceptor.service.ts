import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next : HttpHandler){
        const modifiedRequest = req.clone(
        {
            //update header to put auth
            headers: req.headers.append('AuthNewHeader','111'),
        });
        console.log("Auth header added:");
        console.log(req.headers);

        return next.handle(modifiedRequest);
        
    }
}