import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-twelve',
  templateUrl: './page-twelve.component.html',
  styleUrls: ['./page-twelve.component.css']
})
export class PageTwelveComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }


  send_req()
  {
    this.http.get("https://ipharoh.com/api/data/json").subscribe(
      (data : any)=>{
        console.log("api data : " , data);
      },
      (err)=>{
        console.error(err);
      }
    );
  }

}
