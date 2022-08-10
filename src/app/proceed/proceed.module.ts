import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProceedPageRoutingModule } from './proceed-routing.module';

import { ProceedPage } from './proceed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProceedPageRoutingModule
  ],
  declarations: [ProceedPage]
})
export class ProceedPageModule {}
