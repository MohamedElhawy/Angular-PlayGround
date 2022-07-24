import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewMessageComponent } from "../components/new-message/new-message.component";




const routes : Routes = [
    { 
        path: "" , 
        children : 
        [

            {
                path: "one",
                component : NewMessageComponent
            }

        ]
    }
];



@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AnotherRoutingModule
{

}