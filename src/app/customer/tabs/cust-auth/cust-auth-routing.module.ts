import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustAuthPage } from './cust-auth.page';

const routes: Routes = [
  {
    path: '',
    component: CustAuthPage
  },
  {
    path: 'cust-login',
    loadChildren: () => import('../custAuth/cust-login/cust-login.module').then( m => m.CustLoginPageModule)
  },
  {
    path: 'cust-profile',
    loadChildren: () => import('../custAuth/cust-profile/cust-profile.module').then( m => m.CustProfilePageModule)
  },
  {
    path: 'cust-setting',
    loadChildren: () => import('../custAuth/cust-profile/cust-setting/cust-setting.module').then( m => m.CustSettingPageModule)
  },
  {
    path: 'cust-resetpwd',
    loadChildren: () => import('../custAuth/cust-resetpwd/cust-resetpwd.module').then( m => m.CustResetpwdPageModule)
  },
  {
    path: 'cust-signup',
    loadChildren: () => import('../custAuth/cust-signup/cust-signup.module').then( m => m.CustSignupPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustAuthPageRoutingModule {}
