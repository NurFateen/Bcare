import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivechatPageRoutingModule } from './livechat-routing.module';

import { LivechatPage } from './livechat.page';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({


  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivechatPageRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule
  ],

  providers: [Storage],
  declarations: [LivechatPage],
  bootstrap:[LivechatPage]
})

export class LivechatPageModule {}
