import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerPage } from './customer.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerPage
  },
  {
    path: 'cust-faq',
    loadChildren: () => import('./cust-faq/cust-faq.module').then( m => m.CustFaqPageModule)
  },
  {
    path: 'cust-checkout',
    loadChildren: () => import('./cust-checkout/cust-checkout.module').then( m => m.CustCheckoutPageModule)
  },
  {
    path: 'cust-profile',
    loadChildren: () => import('./cust-profile/cust-profile.module').then( m => m.CustProfilePageModule)
  },
  {
    path: 'cust-feedback',
    loadChildren: () => import('./cust-feedback/cust-feedback.module').then( m => m.CustFeedbackPageModule)
  },
  {
    path: 'cust-delivery',
    loadChildren: () => import('./cust-delivery/cust-delivery.module').then( m => m.CustDeliveryPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerPageRoutingModule {}
