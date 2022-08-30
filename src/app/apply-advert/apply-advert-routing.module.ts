import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyAdvertPage } from './apply-advert.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyAdvertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplyAdvertPageRoutingModule {}
