import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'welcome', 
    pathMatch: 'full' },
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
    path: 'vendor-home',
    loadChildren: () => import('./vendor-home/vendor-home.module').then( m => m.VendorHomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'proadd',
    loadChildren: () => import('./proadd/proadd.module').then( m => m.ProaddPageModule)
  },
  
  {
    path: 'proedit/:productId',
    loadChildren: () => import('./proedit/proedit.module').then( m => m.ProeditPageModule)
  },
  {
    path: 'subscribe',
    loadChildren: () => import('./subscribe/subscribe.module').then( m => m.SubscribePageModule)
  },
  {
    path: 'changeplan',
    loadChildren: () => import('./subscribe/changeplan/changeplan.module').then( m => m.ChangeplanPageModule)
  },
  {
    path: 'cancelplan',
    loadChildren: () => import('./subscribe/cancelplan/cancelplan.module').then( m => m.CancelplanPageModule)
  },
  {
    path: 'yourplan',
    loadChildren: () => import('./subscribe/yourplan/yourplan.module').then( m => m.YourplanPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'reg-subscribeplan',
    loadChildren: () => import('./subscribe/reg-subscribeplan/reg-subscribeplan.module').then( m => m.RegSubscribeplanPageModule)
  },
  {
    path: 'livechat',
    loadChildren: () => import('./livechat/livechat.module').then( m => m.LivechatPageModule)
  },
  {
    path: 'cust-login',
    loadChildren: () => import('./customer/tabs/custAuth/cust-login/cust-login.module').then( m => m.CustLoginPageModule)
  },
  {
    path: 'cust-resetpwd',
    loadChildren: () => import('./customer/tabs/custAuth/cust-resetpwd/cust-resetpwd.module').then( m => m.CustResetpwdPageModule)
  },
  {
    path: 'cust-signup',
    loadChildren: () => import('./customer/tabs/custAuth/cust-signup/cust-signup.module').then( m => m.CustSignupPageModule)
  },
  {
    path: 'cust-profile',
    loadChildren: () => import('./customer/tabs/custAuth/cust-profile/cust-profile.module').then( m => m.CustProfilePageModule)
  },
  {
    path: 'vendor-customer-reviews',
    loadChildren: () => import('./vendor-customer-reviews/vendor-customer-reviews.module').then( m => m.VendorCustomerReviewsPageModule)
  },  {
    path: 'apply-advert',
    loadChildren: () => import('./apply-advert/apply-advert.module').then( m => m.ApplyAdvertPageModule)
  },



  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
