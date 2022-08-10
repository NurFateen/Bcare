import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustProfilePageRoutingModule } from './cust-profile-routing.module';

import { CustProfilePage } from './cust-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustProfilePageRoutingModule
  ],
  declarations: [CustProfilePage]
})
export class CustProfilePageModule {}
