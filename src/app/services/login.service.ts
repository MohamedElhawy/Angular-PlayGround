import { Injectable } from "@angular/core";




@Injectable()
export class LoginService
{

    private login_status : boolean = false;


    set_login_status(value : boolean)
    {
        this.login_status = value;
    }

    get_login_status() : boolean
    {
        return this.login_status;
    }



}