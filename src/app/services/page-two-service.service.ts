import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn:'root'})
export class PageTwoService {

  
  private users : User[] = [
    { name: "mohamed" , password : "123456abc" , age: 25 },
    { name: "jack" , password : "wefwef3243" , age: 73  },
    { name: "mars" , password : "dwefwef234234" , age: 55  },
  ];
  
  
  
  constructor() { }


  get_users()
  {
    return this.users;
  }



  
}
