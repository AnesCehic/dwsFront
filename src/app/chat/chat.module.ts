import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ChannelComponent } from './channel/channel.component';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes : Routes = [
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
  {
    path: 'addChannel',
    component: AddChannelComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    ChannelComponent,
    AddChannelComponent,
    NavbarComponent,
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
