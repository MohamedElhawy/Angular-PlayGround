import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-ten',
  templateUrl: './page-ten.component.html',
  styleUrls: ['./page-ten.component.css']
})
export class PageTenComponent implements OnInit {


  form! : FormGroup;
  form_image : any;

  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void 
  {
    this.get_form();
  }


  get_form()
  {

    this.form = this.fb.group({
      name : [ "" , Validators.required ],
      age : [ "" , Validators.required ]
    });

  }



  send_form_data()
  {

    console.log(this.form.value);
    console.log(this.form_image);

    let fd = new FormData();

    fd.append("data" , this.form.value );
    fd.append("img" , this.form_image);


    


  }


  get_form_image(image : any)
  {
    this.form_image = image.files[0];

  }




}
