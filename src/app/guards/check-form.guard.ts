import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CreateUserFormComponent } from "../components/create-user-form/create-user-form.component";





@Injectable()
export class CheckFormGuard implements CanDeactivate<CreateUserFormComponent>
{

    canDeactivate(component: CreateUserFormComponent): any
    {

        if ( component.form.dirty )
        {
            let response = confirm("are you sure you wanna leave?");
            if ( response )
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return true;

        }

    }

}
