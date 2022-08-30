import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustSignupPageRoutingModule } from './cust-signup-routing.module';
import { CustSignupPage } from './cust-signup.page';
import { AuthModule } from 'src/app/shared-modules/auth.module';


const routes: Routes = [
  {
    path: '',
    component: CustSignupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AuthModule
  ],
  declarations: [CustSignupPage]
})
export class CustSignupPageModule {}
