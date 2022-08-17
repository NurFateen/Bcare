import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustEditprofilePageRoutingModule } from './cust-editprofile-routing.module';

import { CustEditprofilePage } from './cust-editprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustEditprofilePageRoutingModule
  ],
  declarations: [CustEditprofilePage]
})
export class CustEditprofilePageModule {}
