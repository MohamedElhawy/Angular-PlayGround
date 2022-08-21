
import { Action } from "@ngrx/store";
import { Person } from "../interfaces/person.model";


// types of action


export const ADD_PERSON  : string = "[DUMMY] Add";
export const REMOVE_PERSON : string = "[DUMMY] Remove";



export class Add_Person implements Action
{

    readonly type = ADD_PERSON;
    payload : Person;

    constructor(data : Person){
        this.payload = data;
    }

}



export type Actions = Add_Person;
