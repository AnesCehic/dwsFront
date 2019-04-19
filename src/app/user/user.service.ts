import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  logUserIn(user: User): any {
    return this.http.post("https://localhost:44338/api/login", user);
  }

  registerUser(user: User): any {
    return this.http.post("https://localhost:44338/api/register", user);
  }

  saveToken(token: string): any {
    localStorage.setItem('token', `Bearer ${token}`);
    console.log(localStorage.getItem('token'));
  }
}
