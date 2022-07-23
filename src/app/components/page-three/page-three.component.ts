import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {

  constructor(private login_s : LoginService) { }

  ngOnInit(): void {
  }





}
