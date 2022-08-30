import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ReactiveFormsModule } from '@angular/forms';
import { ChangeplanPageRoutingModule } from './changeplan-routing.module';
import { ChangeplanPage } from './changeplan.page';

import {AngularFireModule} from '@angular/fire/compat'
import {environment} from 'src/environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideFirebaseApp ,initializeApp} from '@angular/fire/app';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CrudService } from 'src/app/services/crud.service';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeplanPageRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    AngularFireDatabaseModule, 
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    HttpClientModule,
    
  ],
  declarations: [ChangeplanPage],
  providers:[],
  // bootstrap:[ChangeplanPage]
})
// @Injectable({ providedIn: 'root' })
export class ChangeplanPageModule {}
