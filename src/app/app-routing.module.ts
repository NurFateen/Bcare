import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'welcome', 
    pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./pages/reset-password/reset-password.module').then(
        m => m.ResetPasswordPageModule
      )
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  
  {
    path: 'upload-product',
    loadChildren: () => import('./upload-product/upload-product.module').then( m => m.UploadProductPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'upload-image',
    loadChildren: () => import('./upload-image/upload-image.module').then( m => m.UploadImagePageModule)
  },
  {
    path: 'cancelplan',
    loadChildren: () => import('./cancelplan/cancelplan.module').then( m => m.CancelplanPageModule)
  },
  {
    path: 'changeplan',
    loadChildren: () => import('./changeplan/changeplan.module').then( m => m.ChangeplanPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'proceed',
    loadChildren: () => import('./proceed/proceed.module').then( m => m.ProceedPageModule)
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
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./customer/tabs/tabs.module').then( m => m.TabsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
