import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PageTwoService } from 'src/app/services/page-two-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loging_in()
  {
    console.log("logging_in 🔌");
  }









}
