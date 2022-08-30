import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeplanPage } from './changeplan.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeplanPageRoutingModule {}
