import { Action } from "@ngrx/store";




export function SimpleReducer( state : string = "hi world, this is my first state." , action : Action )
{


    console.log('from simple.reducer - action type : ' , action.type , " & " , "state : ", state);


    switch( action.type )
    {

        case "SPANISH":
            return state = "Hola Mundo";

        case "FRENCH":
            return state = "Bonjour le monde";

        default:
            return state;

    }


}