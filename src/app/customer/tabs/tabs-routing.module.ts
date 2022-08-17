import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'cust-homepage',
        loadChildren: () => import('./cust-homepage/cust-homepage.module').then( m => m.CustHomepagePageModule)
      },
      {
        path: 'cust-profile',
        loadChildren: () => import('../cust-profile/cust-profile.module').then( m => m.CustProfilePageModule)
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
        path: '',
        redirectTo: '/tabs/cust-homepage',
        pathMatch: 'full'
      },
 
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
