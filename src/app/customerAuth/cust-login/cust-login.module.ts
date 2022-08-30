import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustLoginPageRoutingModule } from './cust-login-routing.module';

import { CustLoginPage } from './cust-login.page';
import { AuthModule } from 'src/app/shared-modules/auth.module';


const routes: Routes = [
  {
    path: '',
    component: CustLoginPage
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
  declarations: [CustLoginPage]
})
export class CustLoginPageModule {}
