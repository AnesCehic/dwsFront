import { Component, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  channels: any = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getChannels().subscribe(
      (res: Response) => {
        this.channels = res;
      },
      error => console.log(error)
    );
  }

}
