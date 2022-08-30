import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProeditPageRoutingModule } from './proedit-routing.module';

import { ProeditPage } from './proedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProeditPageRoutingModule
  ],
  declarations: [ProeditPage]
})
export class ProeditPageModule {}
