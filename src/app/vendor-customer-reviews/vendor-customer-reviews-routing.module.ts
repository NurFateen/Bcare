import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorCustomerReviewsPage } from './vendor-customer-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: VendorCustomerReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorCustomerReviewsPageRoutingModule {}
