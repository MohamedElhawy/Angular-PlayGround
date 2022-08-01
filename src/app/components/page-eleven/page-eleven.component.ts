import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-eleven',
  templateUrl: './page-eleven.component.html',
  styleUrls: ['./page-eleven.component.css']
})
export class PageElevenComponent implements OnInit , AfterViewInit {


  newData : string = "banana";

  child_data : number = 0;

  @ViewChild("textRef") text_element! : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    
  }


  update_child_value(data : number)
  {
    this.child_data = data;
  }


  sign_in()
  {
    this.newData = "sign in";
  }


  sign_out()
  {
    this.newData = "log out";
  }


  change_text()
  {
    this.text_element.nativeElement.textContent = "new text :D using Angular @ViewChild.";
  }

}
