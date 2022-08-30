import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustLoginPage } from './cust-login.page';

const routes: Routes = [
  {
    path: '',
    component: CustLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustLoginPageRoutingModule {}
