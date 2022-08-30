import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustSignupPage } from './cust-signup.page';

const routes: Routes = [
  {
    path: '',
    component: CustSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustSignupPageRoutingModule {}
