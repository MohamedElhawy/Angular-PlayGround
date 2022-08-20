import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";





@Injectable({ providedIn : "root" })
export class TokenInterceptor implements HttpInterceptor
{


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        
        let new_req = req.clone({
            setHeaders : {
                Authorization : "bearer this is a token"
            }
        })



        return next.handle(new_req); 

    }



}