import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessageComponent } from "../components/message/message.component";


const routes : Routes = [
    {
        path : "",
        children : 
        [
            {
                path: "one",
                component : MessageComponent
            }
        ]
    }
];




@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class NewRoutingModule
{

}