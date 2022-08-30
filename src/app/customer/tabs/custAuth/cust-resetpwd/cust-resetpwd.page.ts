import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-resetpwd',
  templateUrl: './cust-resetpwd.page.html',
  styleUrls: ['./cust-resetpwd.page.scss'],
})
export class CustResetpwdPage implements OnInit {
  @ViewChild(AuthFormComponent)
  CustresetPasswordForm: AuthFormComponent;
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
  }

  async CustresetPassword(credentials: UserCredential): Promise<void> {
    try {
      await this.authService.CustresetPassword(credentials.email);
      await this.CustresetPasswordForm.hideLoading();
      const alert = await this.alertCtrl.create({
        message: 'Check your inbox for the password reset link',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              this.router.navigateByUrl('cust-login');
            }
          }
        ]
      });
      await alert.present();
    } catch (error) {
      await this.CustresetPasswordForm.hideLoading();
      this.CustresetPasswordForm.handleError(error);
    }
  }
}
