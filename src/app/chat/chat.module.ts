import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ChannelComponent } from './channel/channel.component';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddUsersComponent } from './add-users/add-users.component';

const routes : Routes = [
  {
    path: 'addChannel',
    component: AddChannelComponent
  },
  {
    path: 'addUsers',
    component: AddUsersComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ':id',
        component: ChannelComponent
      },
    ]
  },
  
]

@NgModule({
  declarations: [
    HomeComponent,
    ChannelComponent,
    AddChannelComponent,
    NavbarComponent,
    AddUsersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
  ]
})
export class ChatModule { }
