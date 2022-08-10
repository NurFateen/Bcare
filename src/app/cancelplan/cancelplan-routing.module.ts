import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelplanPage } from './cancelplan.page';

const routes: Routes = [
  {
    path: '',
    component: CancelplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelplanPageRoutingModule {}
