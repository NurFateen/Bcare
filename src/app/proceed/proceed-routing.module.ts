import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProceedPage } from './proceed.page';

const routes: Routes = [
  {
    path: '',
    component: ProceedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProceedPageRoutingModule {}
