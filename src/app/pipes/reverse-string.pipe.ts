import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name : "reverseString"
})
export class ReverseStringPipe implements PipeTransform
{

    transform(value: string , ...arg : string[]) : string 
    {

        let new_value = value.split("").reverse().join("");
        
        
        console.log(arg);

        arg.forEach((el)=>{console.log(el); new_value = new_value + el;});

        return new_value;
        
    }



}