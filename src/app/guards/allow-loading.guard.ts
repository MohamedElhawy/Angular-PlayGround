import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";




@Injectable({ providedIn : "root" })
export class AllowLoadingGuard implements CanLoad
{

    canLoad(): boolean
    {


        return false;

    }


}