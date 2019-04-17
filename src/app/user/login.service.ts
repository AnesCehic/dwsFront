import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from './User';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  logUserIn(user: User): any {
    return this.http.post("https://localhost:44338/api/login", user);
  }
}
