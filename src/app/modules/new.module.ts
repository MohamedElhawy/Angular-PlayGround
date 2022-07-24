import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MessageComponent } from "../components/message/message.component";
import { NewRoutingModule } from "./new-routing.module";





@NgModule({
    declarations:[
        MessageComponent
    ],
    exports: [
        MessageComponent
    ],
    imports: [
        CommonModule,
        NewRoutingModule
    ],
    providers: [],
})
export class NewModule
{

}