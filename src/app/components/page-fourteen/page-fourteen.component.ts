import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageInterface } from 'src/app/interfaces/message.interface';
import { Person } from 'src/app/interfaces/person.model';

@Component({
  selector: 'app-page-fourteen',
  templateUrl: './page-fourteen.component.html',
  styleUrls: ['./page-fourteen.component.css']
})
export class PageFourteenComponent implements OnInit {

  constructor(private store : Store<MessageInterface>) { }

  ngOnInit(): void {

    this.store.select("message");



  }

}
