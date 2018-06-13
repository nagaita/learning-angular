import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // TODO: コンストラクタに渡したフィールドは自動でインスタンス変数になる?
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
