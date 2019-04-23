import { Component, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.css']
})
export class AddChannelComponent implements OnInit {

  channelName: string = "";

  constructor(
    private chatService: ChatService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addChannel(): any {
    console.log(this.channelName);
    this.chatService.createChannel(this.channelName).subscribe(
      (res: Response) => {
        console.log(res);
        alert("Success");
        this.router.navigate(['/chat']);
      }
    );
  }

}
