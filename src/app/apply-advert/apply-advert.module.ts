import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyAdvertPageRoutingModule } from './apply-advert-routing.module';

import { ApplyAdvertPage } from './apply-advert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyAdvertPageRoutingModule
  ],
  declarations: [ApplyAdvertPage]
})
export class ApplyAdvertPageModule {}
