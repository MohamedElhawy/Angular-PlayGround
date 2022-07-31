import { Injectable } from "@angular/core";




@Injectable({ providedIn : "root" })
export class PermissionService
{

    private permission_status : boolean = false;


    set_permission(value : boolean)
    {
        this.permission_status = value;
    }

    get_permission() : boolean
    {
        return this.permission_status;
    }



}