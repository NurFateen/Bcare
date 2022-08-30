import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegSubscribeplanPage } from './reg-subscribeplan.page';

const routes: Routes = [
  {
    path: '',
    component: RegSubscribeplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegSubscribeplanPageRoutingModule {}
