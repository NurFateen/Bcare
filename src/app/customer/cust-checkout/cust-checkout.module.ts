import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustCheckoutPageRoutingModule } from './cust-checkout-routing.module';

import { CustCheckoutPage } from './cust-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CustCheckoutPageRoutingModule
  ],
  declarations: [CustCheckoutPage]
})
export class CustCheckoutPageModule {}
