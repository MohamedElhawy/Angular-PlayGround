import { Injectable } from "@angular/core";
import { Car } from "../interfaces/car.interface";


@Injectable()
export class CarService
{

    private cars : Car[] = [
        { name: "black stick" , color : "white" , model: "toyota corola" },
        { name: "thunder" , color : "blue" , model: "lambergene 9800" },
    ]


    get_cars()
    {
        return this.cars;
    }


}