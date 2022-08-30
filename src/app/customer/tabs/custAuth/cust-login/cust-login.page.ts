import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cust-login',
  templateUrl: './cust-login.page.html',
  styleUrls: ['./cust-login.page.scss'],
})
export class CustLoginPage implements OnInit {
  @ViewChild (AuthFormComponent) CustloginForm: AuthFormComponent;
  constructor(
    private authService: AuthService, 
    private router: Router) {}

  ngOnInit() {}

  async loginCust (credentials: UserCredential): Promise<void> {
    try {
      const userCredential = await this.authService.login(credentials.email, credentials.password);
      this.authService.userId = userCredential.user.uid;
      await this.CustloginForm.hideLoading();
      this.router.navigateByUrl('cust-profile');
    } catch (error) {
      await this.CustloginForm.hideLoading();
      this.CustloginForm.handleError(error);
    }
  }

}
