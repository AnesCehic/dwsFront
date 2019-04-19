import { Component, OnInit } from '@angular/core';

import { User } from "../User";
import { UserService } from "../user.service";

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

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  handleLogin(e): any {
    e.preventDefault();
    this.userService.logUserIn(this.user).subscribe(
      (res: Response) => {
        this.userService.saveToken(res['title']);
      },
      error => console.log(error)
    );
  }
}
