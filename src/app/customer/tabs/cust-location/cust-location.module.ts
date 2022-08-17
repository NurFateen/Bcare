import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustLocationPageRoutingModule } from './cust-location-routing.module';

import { CustLocationPage } from './cust-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustLocationPageRoutingModule
  ],
  declarations: [CustLocationPage]
})
export class CustLocationPageModule {}
