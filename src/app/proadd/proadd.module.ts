import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProaddPageRoutingModule } from './proadd-routing.module';

import { ProaddPage } from './proadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProaddPageRoutingModule
  ],
  declarations: [ProaddPage]
})
export class ProaddPageModule {}
