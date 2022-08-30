import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorHomePageRoutingModule } from './vendor-home-routing.module';

import { VendorHomePage } from './vendor-home.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
         component: VendorHomePage
      }
    ])
  ],
  declarations: [VendorHomePage]
})
export class VendorHomePageModule {}
