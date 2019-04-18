import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.css']
})
export class AddChannelComponent implements OnInit {

  channelName: string = "";

  constructor() { }

  ngOnInit() {
  }

  addChannel(): any {
    console.log(this.channelName);
  }

}
