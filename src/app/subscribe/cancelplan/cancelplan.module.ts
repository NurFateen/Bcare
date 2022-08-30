import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelplanPageRoutingModule } from './cancelplan-routing.module';

import { CancelplanPage } from './cancelplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelplanPageRoutingModule
  ],
  declarations: [CancelplanPage]
})
export class CancelplanPageModule {}
