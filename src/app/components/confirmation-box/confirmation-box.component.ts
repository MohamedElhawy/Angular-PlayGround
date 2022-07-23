import { Component, OnInit, Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-confirmation-box',
  templateUrl: './confirmation-box.component.html',
  styleUrls: ['./confirmation-box.component.css']
})
export class ConfirmationBoxComponent implements OnInit {

  @Output() notifi_action_value = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }


  notifi_action(value  : boolean)
  {

    console.log("from box: " , value);

    this.notifi_action_value.emit(value);

  }

}
