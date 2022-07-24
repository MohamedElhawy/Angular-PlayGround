import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-six',
  templateUrl: './page-six.component.html',
  styleUrls: ['./page-six.component.css']
})
export class PageSixComponent implements OnInit {


  today : string = new Date().toDateString();

  constructor() { }

  ngOnInit(): void 
  {

    


  }

}
