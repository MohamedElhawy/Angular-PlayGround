import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private login_s : LoginService) { }

  ngOnInit(): void {
  }

  loging_in()
  {
    console.log("logging_in 🔌");
  }









}
