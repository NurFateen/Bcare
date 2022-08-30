import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, } from '@angular/fire/auth';

@Component({
  selector: 'app-cust-signup',
  templateUrl: './cust-signup.page.html',
  styleUrls: ['./cust-signup.page.scss'],
})
export class CustSignupPage implements OnInit {

  @ViewChild(AuthFormComponent)
  CustsignupForm: AuthFormComponent;
  constructor(
    private authService: AuthService, 
    private router: Router,
    private readonly auth: Auth
    ) {}


  ngOnInit() {}

  async CustsignupUser(credentials: UserCredential): Promise<void> {
    try {
      const user = await this.authService.Custsignup(credentials.email, credentials.password);
      this.authService.userId = user.uid;
      await this.CustsignupForm.hideLoading();
      this.router.navigateByUrl('cust-login');
    } catch (error) {
      await this.CustsignupForm.hideLoading();
      this.CustsignupForm.handleError(error);
    } window.alert(
      'Please refresh the page and check your email to verify your account. Thank you!'
    )
  }

}
