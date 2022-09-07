import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustHomepagePageRoutingModule } from './cust-homepage-routing.module';

import { CustHomepagePage } from './cust-homepage.page';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustHomepagePageRoutingModule,
    SwiperModule
  ],
  declarations: [CustHomepagePage]
})
export class CustHomepagePageModule {}
