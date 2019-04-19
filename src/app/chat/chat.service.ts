import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient
  ) { }

  getChannels(): any {
    return this.http.get("https://localhost:44338/channels");
  }

  getChannelById(id: number): any {
    return this.http.get(`https://localhost:44338/channels/${id}`);
  }
}
