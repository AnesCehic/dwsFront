import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  logUserIn(user: User): any {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", {
      title: "Neko",
      body: "Nesto",
      userId: 11111
    });
  }
}
