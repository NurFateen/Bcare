import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustCartPage } from './cust-cart.page';

const routes: Routes = [
  {
    path: '',
    component: CustCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustCartPageRoutingModule {}
