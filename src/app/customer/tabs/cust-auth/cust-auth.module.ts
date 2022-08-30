import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustAuthPageRoutingModule } from './cust-auth-routing.module';

import { CustAuthPage } from './cust-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustAuthPageRoutingModule
  ],
  declarations: [CustAuthPage]
})
export class CustAuthPageModule {}
