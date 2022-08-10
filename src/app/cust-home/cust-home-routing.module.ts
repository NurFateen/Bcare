import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustHomePage } from './cust-home.page';

const routes: Routes = [
  {
    path: '',
    component: CustHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustHomePageRoutingModule {}
