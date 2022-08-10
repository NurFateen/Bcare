import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeplanPageRoutingModule } from './changeplan-routing.module';

import { ChangeplanPage } from './changeplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeplanPageRoutingModule
  ],
  declarations: [ChangeplanPage]
})
export class ChangeplanPageModule {}
