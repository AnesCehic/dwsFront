import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from "@angular/router";
import { ChatService } from "../chat.service";
import * as signalR from '@aspnet/signalr';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  message: string = "";
  user: string = "";
  connection: any = new signalR.HubConnectionBuilder().withUrl('https://localhost:44338/chathub').build();
  messages: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) { }

  currentChannel = 0;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentChannel = params.id
      console.log(params.id)
    });

    this.connection.start().then(() => {
      alert("Connected");
    });

    let a = jwt_decode(localStorage.getItem('token'));
    this.user = a.sub;

    this.connection.on('ReceiveMessage', (user, message) => {
      let m = `${user}: ${message}`
      this.messages.push(m);
    })
  }

  send() {
    console.log(this.message);
    this.connection.invoke("SendMessage", this.user, this.message)
  }

}
