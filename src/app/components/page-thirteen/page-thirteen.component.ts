import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-thirteen',
  templateUrl: './page-thirteen.component.html',
  styleUrls: ['./page-thirteen.component.css']
})
export class PageThirteenComponent implements OnInit {


  private _message : string = "mesage";

  private _number : number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  get message() : string
  {
    return this._message + " : " + this._number;
  }


  set number(value : number)
  {
    this._number += value;
  }


}
