import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscribePage } from './subscribe.page';

const routes: Routes = [
  {
    path: '',
    component: SubscribePage
  },
  {
    path: 'cancelplan',
    loadChildren: () => import('./cancelplan/cancelplan.module').then( m => m.CancelplanPageModule)
  },
  {
    path: 'reg-subscribeplan',
    loadChildren: () => import('./reg-subscribeplan/reg-subscribeplan.module').then( m => m.RegSubscribeplanPageModule)
  },
  {
    path: 'yourplan',
    loadChildren: () => import('./yourplan/yourplan.module').then( m => m.YourplanPageModule)
  },
  {
    path: 'changeplan',
    loadChildren: () => import('./changeplan/changeplan.module').then( m => m.ChangeplanPageModule)
  },
  {
    path: 'subscribedplan',
    loadChildren: () => import('./subscribedplan/subscribedplan.module').then( m => m.SubscribedplanPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscribePageRoutingModule {}
