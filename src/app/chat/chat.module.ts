import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";

import { ChannelComponent } from './channel/channel.component';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'id',
        component: ChannelComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    ChannelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    HomeComponent,
  ]
})
export class ChatModule { }
