import { Component, OnInit } from '@angular/core';
import {State} from './store/messages.reducer';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: State;

  constructor() {
  }

  ngOnInit(): void {
    this.messages = {
     chats: [
       {
         users: ['harry', 'liza'],
         messages: [
           {
             user: 'harry',
             text: 'hi',
             date: 'new Date()'
           }
         ]
       }
     ]
    };
  }

}
