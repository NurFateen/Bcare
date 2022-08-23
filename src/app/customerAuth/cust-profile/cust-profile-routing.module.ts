import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustProfilePage } from './cust-profile.page';

const routes: Routes = [
  {
    path: '',
    component: CustProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustProfilePageRoutingModule {}
