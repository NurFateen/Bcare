import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscribedplanPage } from './subscribedplan.page';

const routes: Routes = [
  {
    path: '',
    component: SubscribedplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscribedplanPageRoutingModule {}
