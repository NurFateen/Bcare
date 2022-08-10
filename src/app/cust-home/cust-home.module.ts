import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustHomePageRoutingModule } from './cust-home-routing.module';

import { CustHomePage } from './cust-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustHomePageRoutingModule
  ],
  declarations: [CustHomePage]
})
export class CustHomePageModule {}
