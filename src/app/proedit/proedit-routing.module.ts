import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProeditPage } from './proedit.page';

const routes: Routes = [
  {
    path: '',
    component: ProeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProeditPageRoutingModule {}
