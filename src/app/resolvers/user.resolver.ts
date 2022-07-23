import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Car } from "../interfaces/car.interface";
import { User } from "../interfaces/user.interface";
import { CarService } from "../services/car.service";
import { PageTwoService } from "../services/page-two-service.service";

@Injectable()
export class UserResolver implements Resolve<User[]>
{

    constructor( private page_2_s : PageTwoService , private car_s : CarService ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :  Observable<User[]> | Promise<User[]> | User[]
    {
        let data = this.page_2_s.get_users();
        console.log("passed data by resolver : " , data);

        return data;

    }



}