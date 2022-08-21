import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MessageInterface } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  message_state : Observable<string>;

  constructor(
    private store : Store<MessageInterface>
  )
  {
    this.message_state = this.store.select("message");
  }

  send_message_in_spanish()
  {
    this.store.dispatch({ type: "SPANISH" });
  }

  send_message_in_french()
  {
    this.store.dispatch({ type : "FRENCH" });
  }
  


}


