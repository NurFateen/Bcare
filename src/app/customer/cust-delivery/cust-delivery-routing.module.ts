import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustDeliveryPage } from './cust-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: CustDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustDeliveryPageRoutingModule {}
