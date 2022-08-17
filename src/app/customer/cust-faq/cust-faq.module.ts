import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustFaqPageRoutingModule } from './cust-faq-routing.module';

import { CustFaqPage } from './cust-faq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustFaqPageRoutingModule
  ],
  declarations: [CustFaqPage]
})
export class CustFaqPageModule {}
