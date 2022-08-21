
import * as person_actions from "../actions/dummy.action";
import { Person } from "../interfaces/person.model";




let initial_state : Person = {
    id : 1,
    name : "mohamed",
    age : 25,
    job : "angular developer",
    achievement : ["engineer" , "developer" , "programmer" , "artist"],
    spoose : []
};

export function person_reducer( state : Person = initial_state , action : person_actions.Add_Person ) : Person
{

    switch( action.type )
    {

        case person_actions.ADD_PERSON:
            return action.payload;

        default:
            return state;

    }


}