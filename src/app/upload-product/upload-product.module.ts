import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadProductPageRoutingModule } from './upload-product-routing.module';

import { UploadProductPage } from './upload-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadProductPageRoutingModule
  ],
  declarations: [UploadProductPage]
})
export class UploadProductPageModule {}
