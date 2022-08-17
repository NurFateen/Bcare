import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustLocationPage } from './cust-location.page';

const routes: Routes = [
  {
    path: '',
    component: CustLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustLocationPageRoutingModule {}
