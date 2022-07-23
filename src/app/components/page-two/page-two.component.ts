import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/interfaces/car.interface';
import { User } from 'src/app/interfaces/user.interface';
import { LoginService } from 'src/app/services/login.service';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  users : User[] = [];
  cars : Car[] = [];

  constructor(private act_route : ActivatedRoute , private Per_s : PermissionService, private login_s : LoginService) { }

  ngOnInit(): void 
  {

    this.load_data();

  }


  load_data()
  {

    this.act_route.data.subscribe(
      (data : any) => { console.log("users : " , data.users_data); console.log( "cars : " , data.cars_data); this.users = data.users_data; this.cars = data.cars_data; },
      (err)=>{ console.log(err); }
    );

  }


  locking(status : boolean)
  {
    this.Per_s.set_permission(status);
  }


  unlock_loging_in()
  {
    this.login_s.set_login_status(true);
  }




}
