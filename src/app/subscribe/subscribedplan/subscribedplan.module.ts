import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscribedplanPageRoutingModule } from './subscribedplan-routing.module';

import { SubscribedplanPage } from './subscribedplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscribedplanPageRoutingModule
  ],
  declarations: [SubscribedplanPage]
})
export class SubscribedplanPageModule {}
