import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { PermissionService } from "../services/permission.service";




@Injectable()
export class PermissionGuard implements CanActivate
{

    constructor( private per_s : PermissionService )
    {

    }

    canActivate() : boolean
    {

        return this.per_s.get_permission();

    }


}