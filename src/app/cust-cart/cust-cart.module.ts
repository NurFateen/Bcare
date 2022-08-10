import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustCartPageRoutingModule } from './cust-cart-routing.module';

import { CustCartPage } from './cust-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustCartPageRoutingModule
  ],
  declarations: [CustCartPage]
})
export class CustCartPageModule {}
