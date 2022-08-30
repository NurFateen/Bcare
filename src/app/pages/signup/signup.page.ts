import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, } from '@angular/fire/auth';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild(AuthFormComponent)
  signupForm: AuthFormComponent;
  constructor(
    private authService: AuthService, 
    private router: Router,
    private readonly auth: Auth
    ) {}

  ngOnInit() {}

  async signupUser(credentials: UserCredential): Promise<void> {
    try {
      const user = await this.authService.signup(credentials.email, credentials.password);
      this.authService.userId = user.uid;
      await this.signupForm.hideLoading();
      this.router.navigateByUrl('login');
    } catch (error) {
      await this.signupForm.hideLoading();
      this.signupForm.handleError(error);
    } window.alert(
      'Please refresh the page and check your email to verify your account. Thank you!'
    )
  }
}

