import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Cat } from "./shared/cat.model";
import { Observable } from "rxjs";
import { AppService } from "./app-service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CatResolveGuard implements Resolve<Cat>{
    constructor(private service:AppService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Cat | Observable<Cat> | Promise<Cat> {
        return this.service.fetchCatData();
    }
}