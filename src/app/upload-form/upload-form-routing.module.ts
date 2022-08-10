import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadFormPage } from './upload-form.page';

const routes: Routes = [
  {
    path: '',
    component: UploadFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadFormPageRoutingModule {}
