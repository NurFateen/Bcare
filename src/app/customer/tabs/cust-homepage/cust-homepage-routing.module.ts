import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustHomepagePage } from './cust-homepage.page';

const routes: Routes = [
  {
    path: '',
    component: CustHomepagePage
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustHomepagePageRoutingModule {}
