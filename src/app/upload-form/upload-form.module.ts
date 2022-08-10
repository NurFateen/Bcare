import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadFormPageRoutingModule } from './upload-form-routing.module';

import { UploadFormPage } from './upload-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadFormPageRoutingModule
  ],
  declarations: [UploadFormPage]
})
export class UploadFormPageModule {}
