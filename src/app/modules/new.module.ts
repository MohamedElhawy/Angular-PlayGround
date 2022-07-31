import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
        NewRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
})
export class NewModule
{

}