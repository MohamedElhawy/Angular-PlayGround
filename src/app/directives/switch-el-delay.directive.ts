import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { PageSevenComponent } from "../components/page-seven/page-seven.component";




@Directive({
    selector: "[switchDelayDir]"
})
export class SwitchElDelayDirective implements OnInit
{

    @Input("switchDelayDir")  delay : number = 0;
    @Input("switchDelayDirSecond")  delay2 : number = 0;
    @Input("switchDelayDirThird")  delay3 : number = 0;
    @Input("switchDelayDirSelect")  select_mode : number = 0;
    @Input("switchDelayDirElRef")  anotherEl : any;

    constructor( private vcref : ViewContainerRef , private tref : TemplateRef<PageSevenComponent> ){}


    ngOnInit()
    {

        switch(this.select_mode)
        {
            case 0 :
                console.log(this.delay);
                this.operation(this.delay);
                break;
            case 1 :
                console.log(this.delay2);
                this.operation(this.delay2);
                break;
            case 2 :
                console.log(this.delay3);
                this.operation(this.delay3);
                break;
            default : 
                console.log(this.delay);
                this.operation(this.delay);
        }

    }


    operation(delay_value : number)
    {

        // render our el
        this.vcref.createEmbeddedView(this.tref);

        // start delay
        setTimeout(()=>{

            // replace our el with another el
            this.vcref.clear();

            this.vcref.createEmbeddedView(this.anotherEl);

        } , delay_value);

    }


}