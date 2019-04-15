import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from "@angular/material/form-field";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: "",
    password: "",
  }

  constructor() { }

  ngOnInit() {
    console.log("Loaded");
  }

  handleLogin() : any {
    console.log(this.user);
  }
}
