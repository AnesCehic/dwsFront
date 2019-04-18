import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from "@angular/router";

import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  message: string = "";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
    })
  }

  send() {
    console.log(this.message);
  }

}
