import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  },
  {
    path: 'cust-homepage',
    loadChildren: () => import('./cust-homepage/cust-homepage.module').then( m => m.CustHomepagePageModule)
  },
  {
    path: 'cust-cart',
    loadChildren: () => import('./cust-cart/cust-cart.module').then( m => m.CustCartPageModule)
  },
  {
    path: 'cust-location',
    loadChildren: () => import('./cust-location/cust-location.module').then( m => m.CustLocationPageModule)
  },
  {
    path: 'cust-auth',
    loadChildren: () => import('./cust-auth/cust-auth.module').then( m => m.CustAuthPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
