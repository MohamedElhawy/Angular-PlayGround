import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";




@Injectable()
export class LoginGuard implements CanActivateChild
{

    constructor( private login_s : LoginService )
    {

    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
    {

        return this.login_s.get_login_status();

    }


}