import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';
import { PaymentPage } from './payment.page';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {FirebaseTSApp} from 'firebasets/firebasetsApp/firebaseTSApp';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  declarations: [PaymentPage]
})
export class PaymentPageModule {
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyC63PC3yES4VTHCYcHn3c2EttZgJ4muvG8",
      authDomain: "beautycare-2fd4f.firebaseapp.com",
      databaseURL: "https://beautycare-2fd4f-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "beautycare-2fd4f",
      storageBucket: "beautycare-2fd4f.appspot.com",
      messagingSenderId: "135520417062",
      appId: "1:135520417062:web:0626ca22d3521ed5aa7de7",
      measurementId: "G-T0BL3YPYBQ"
    };
    FirebaseTSApp.init(firebaseConfig);
  }
}
