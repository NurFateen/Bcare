import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProaddPage } from './proadd.page';

const routes: Routes = [
  {
    path: '',
    component: ProaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProaddPageRoutingModule {}
