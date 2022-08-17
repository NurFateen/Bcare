import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustDeliveryPageRoutingModule } from './cust-delivery-routing.module';

import { CustDeliveryPage } from './cust-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustDeliveryPageRoutingModule
  ],
  declarations: [CustDeliveryPage]
})
export class CustDeliveryPageModule {}
