import { Component, Input, OnInit, Output , EventEmitter, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit , OnChanges {

  count : number = 0;

  @Input() data : string = "apple";
  @Output() increase_count = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes : SimpleChanges)
  {

    console.log(changes);

    if ( changes['data'].currentValue == "sign in" )
    {
      console.log("welcome, back master.");
    }
    else if ( changes["data"].currentValue == "log out" )
    {
      console.log("signed out!");
    }

  }


  send_parent_inc_number()
  {
    this.count++;

    this.increase_count.emit(this.count);

  }

}
