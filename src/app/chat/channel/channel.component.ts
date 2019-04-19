import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from "@angular/router";
import { ChatService } from "../chat.service";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  message: string = "";

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) { }

  currentChannel = 0;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentChannel = params.id
    });

    this.chatService.getChannelById(this.currentChannel).subscribe(
      (res: Response) => {
        console.log("res: " + res);
      }
    )
  }

  send() {
    console.log(this.message);
  }

}
