import { Component, OnInit } from '@angular/core';
import { User } from '../User';

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

  constructor() { }

  ngOnInit() {
  }

  registerUser(e) {
    e.preventDefault();
    console.log(this.user)
  }

}
