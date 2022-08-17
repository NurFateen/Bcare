import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustFaqPage } from './cust-faq.page';

const routes: Routes = [
  {
    path: '',
    component: CustFaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustFaqPageRoutingModule {}
