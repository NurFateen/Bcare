import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustResetpwdPage } from './cust-resetpwd.page';

const routes: Routes = [
  {
    path: '',
    component: CustResetpwdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustResetpwdPageRoutingModule {}
