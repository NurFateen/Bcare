import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorCustomerReviewsPageRoutingModule } from './vendor-customer-reviews-routing.module';

import { VendorCustomerReviewsPage } from './vendor-customer-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorCustomerReviewsPageRoutingModule
  ],
  declarations: [VendorCustomerReviewsPage]
})
export class VendorCustomerReviewsPageModule {}
