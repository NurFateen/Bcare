import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustSettingPage } from './cust-setting.page';

const routes: Routes = [
  {
    path: '',
    component: CustSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustSettingPageRoutingModule {}
