import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustHomepagePageRoutingModule } from './cust-homepage-routing.module';

import { CustHomepagePage } from './cust-homepage.page';
import { SwiperModule } from 'swiper/angular';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustHomepagePageRoutingModule,
    SwiperModule,
    ProductCardModule,
  ],
  declarations: [CustHomepagePage]
})
export class CustHomepagePageModule {}
