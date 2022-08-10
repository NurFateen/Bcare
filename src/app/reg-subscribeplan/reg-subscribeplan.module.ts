import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegSubscribeplanPageRoutingModule } from './reg-subscribeplan-routing.module';

import { RegSubscribeplanPage } from './reg-subscribeplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegSubscribeplanPageRoutingModule
  ],
  declarations: [RegSubscribeplanPage]
})
export class RegSubscribeplanPageModule {}
