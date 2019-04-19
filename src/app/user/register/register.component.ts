import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from "../user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    email: "",
    password: "",
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  registerUser(e) {
    e.preventDefault();
    this.userService.registerUser(this.user).subscribe(
      (res) => {
        this.userService.saveToken(res['title']);
      }
    );
  }

}
