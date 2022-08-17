import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustCheckoutPage } from './cust-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: CustCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustCheckoutPageRoutingModule {}
