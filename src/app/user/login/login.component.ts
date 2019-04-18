import { Component, OnInit } from '@angular/core';

import { User } from "../User";
import { LoginService } from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: "",
    password: "",
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  handleLogin(e): any {
    e.preventDefault();
    this.loginService.logUserIn(this.user).subscribe(
      (res: Response) => { console.log(res); },
      error => console.log(error)
    );
  }

}
