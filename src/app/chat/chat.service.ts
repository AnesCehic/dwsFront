import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as jwt_decode from 'jwt-decode';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('token')
    })
  };

  getIdFromToken(): any {
    let token = jwt_decode(localStorage.getItem('token').split(" ")[1]);
    return token['id'];
  }

  getChannels(): any {
    let token = this.getIdFromToken();
    return this.http.get(`https://localhost:44338/${token}/channels`, this.httpOptions);
  }

  getChannelById(id: number): any {
    return this.http.get(`https://localhost:44338/channels/${id}`);
  }

  createChannel(name2: string): any {
    let token = this.getIdFromToken();
    return this.http.post(`https://localhost:44338/${token}/channels/create`, {
      "Name": name2,
    }, this.httpOptions);
  }
}
