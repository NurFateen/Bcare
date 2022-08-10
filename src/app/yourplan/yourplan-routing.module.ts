import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourplanPage } from './yourplan.page';

const routes: Routes = [
  {
    path: '',
    component: YourplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourplanPageRoutingModule {}
