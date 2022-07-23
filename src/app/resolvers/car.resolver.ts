import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Car } from "../interfaces/car.interface";
import { CarService } from "../services/car.service";


@Injectable()
export class CarResolver implements Resolve<Car[]>
{

    constructor( private car_s : CarService )
    {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Car[] 
    {
        return this.car_s.get_cars();
    }



}