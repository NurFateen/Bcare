import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustSettingPageRoutingModule } from './cust-setting-routing.module';

import { CustSettingPage } from './cust-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustSettingPageRoutingModule
  ],
  declarations: [CustSettingPage]
})
export class CustSettingPageModule {}
