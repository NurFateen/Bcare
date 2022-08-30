import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';
import { CustProfileService } from './cust-profile.service';
import { Observable, Subscription } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { CustProfileStore } from './cust-profile.store';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';


@Component({
  selector: 'app-cust-profile',
  templateUrl: './cust-profile.page.html',
  styleUrls: ['./cust-profile.page.scss'],
  providers: [CustProfileStore],
})
export class CustProfilePage implements OnInit {
  profile = null;

  public userProfile$: Observable<UserProfile> = this.CustProfileStore.userProfile$;
  private userProfileSubscription: Subscription;
  

  constructor(
    private authService: AuthService,
    private router: Router,
    private CustProfileService: CustProfileService,
    private alertCtrl: AlertController,
    private readonly CustProfileStore: CustProfileStore,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    this.CustProfileService.getUserProfile()
    .subscribe((data) => {
      this.profile = data;
    });
  }

  ngOnInit(): void {
    this.userProfileSubscription = this.CustProfileService
    .getUserProfile()
    .subscribe((userProfile: UserProfile) => this.CustProfileStore.setState(userProfile));
}

ngOnDestroy(): void {
  this.userProfileSubscription?.unsubscribe();
}

async changeImage() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Base64,
    source: CameraSource.Photos, // Camera, Photos or Prompt!
  });

  if (image) {
    const loading = await this.loadingController.create();
    await loading.present();

    const result = await this.CustProfileService.uploadImage(image);
    loading.dismiss();

    if (!result) {
      const alert = await this.alertController.create({
        header: 'Upload failed',
        message: 'There was a problem uploading your avatar.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}

async logOut(): Promise<void> {
  await this.authService.logout();
  this.router.navigateByUrl('cust-login');
}

updateCustName(): void {
  this.userProfileSubscription = this.userProfile$.pipe(first()).subscribe(async userProfile => {
    const alert = await this.alertCtrl.create({
      subHeader: 'Your name',
      inputs: [
        {
          type: 'text',
          name: 'fullName',
          placeholder: 'Enter your Fullname',
          value: userProfile.fullName,
        },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.CustProfileStore.updateCustName(data.fullName);
          },
        },
      ],
    });
    return await alert.present();
  });
}

updateCustPhone(): void {
  this.userProfileSubscription = this.userProfile$.pipe(first()).subscribe(async userProfile => {
    const alert = await this.alertCtrl.create({
      subHeader: 'Phone number',
      inputs: [
        {
          type: 'number',
          name: 'phonenum',
          placeholder: 'Enter your phone number',
          value: userProfile.phonenum,
        },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.CustProfileStore.updateCustPhonenum(data.phonenum);
          },
        },
      ],
    });
    return await alert.present();
  });
}

updateCustAddress(): void {
  this.userProfileSubscription = this.userProfile$.pipe(first()).subscribe(async userProfile => {
    const alert = await this.alertCtrl.create({
      subHeader: 'Company Address',
      inputs: [
        {
          type: 'text',
          name: 'address',
          placeholder: 'Enter your address',
          value: userProfile.address,
        },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.CustProfileStore.updateCustsAddress(data.address);
          },
        },
      ],
    });
    return await alert.present();
  });
}

}
