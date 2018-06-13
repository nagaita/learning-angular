import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);  // TODO Is `this` nessesary for instance field reference?
  }

  clear() {
    this.messages = [];
  }
}
