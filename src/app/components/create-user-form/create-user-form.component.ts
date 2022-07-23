import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent implements OnInit {


  show_notifi : boolean = false;
  notifi_value! : boolean;
  form! : FormGroup;

  constructor( private fb : FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      first_name : ["" , Validators.required]
    });
    

  }


  set_notifi_value(value  : boolean)
  {

    this.notifi_value = value;
    
    console.log("value : " , this.notifi_value);

    this.show_notifi = false;

    console.log("notification status : " , this.show_notifi);
  }


  submit_form()
  {
    console.log(this.form);

    console.log(this.form.dirty);

  }


}
