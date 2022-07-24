import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-nine',
  templateUrl: './page-nine.component.html',
  styleUrls: ['./page-nine.component.css']
})
export class PageNineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  do_something()
  {
    return "hi";    
  }

  do_something_else()
  {
    return true;    
  }


}
