import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustResetpwdPageRoutingModule } from './cust-resetpwd-routing.module';

import { CustResetpwdPage } from './cust-resetpwd.page';
import { AuthModule } from 'src/app/shared-modules/auth.module';


const routes: Routes = [
  {
    path: '',
    component: CustResetpwdPage
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
  declarations: [CustResetpwdPage]
})
export class CustResetpwdPageModule {}
