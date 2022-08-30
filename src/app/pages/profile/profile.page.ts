import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';
import { ProfileService } from './profile.service';
import { Observable, Subscription } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { ProfileStore } from './profile.store';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [ProfileStore],
})
export class ProfilePage {
  profile = null;

  public userProfile$: Observable<UserProfile> = this.profileStore.userProfile$;
  private userProfileSubscription: Subscription;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    private alertCtrl: AlertController,
    private readonly profileStore: ProfileStore,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {
    this.profileService.getUserProfile()
    .subscribe((data) => {
      this.profile = data;
    });
  }

  ngOnInit(): void {
    this.userProfileSubscription = this.profileService
      .getUserProfile()
      .subscribe((userProfile: UserProfile) => this.profileStore.setState(userProfile));
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
 
      const result = await this.profileService.uploadImage(image);
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
    this.router.navigateByUrl('login');
  }

  updateName(): void {
    this.userProfileSubscription = this.userProfile$.pipe(first()).subscribe(async userProfile => {
      const alert = await this.alertCtrl.create({
        subHeader: 'Your name',
        inputs: [
          {
            type: 'text',
            name: 'fullName',
            placeholder: 'Enter your company name',
            value: userProfile.fullName,
          },
        ],
        buttons: [
          { text: 'Cancel' },
          {
            text: 'Save',
            handler: data => {
              this.profileStore.updateUserName(data.fullName);
            },
          },
        ],
      });
      return await alert.present();
    });
  }


  updatePhone(): void {
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
              this.profileStore.updateUserPhonenum(data.phonenum);
            },
          },
        ],
      });
      return await alert.present();
    });
  }

  updateAddress(): void {
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
              this.profileStore.updateUserAddress(data.address);
            },
          },
        ],
      });
      return await alert.present();
    });
  }

 

  // async updateEmail(): Promise<void> {
  //   const alert = await this.alertCtrl.create({
  //     inputs: [
  //       { type: 'text', name: 'newEmail', placeholder: 'Your new email' },
  //       { name: 'password', placeholder: 'Your password', type: 'password' },
  //     ],
  //     buttons: [
  //       { text: 'Cancel' },
  //       {
  //         text: 'Save',
  //         handler: data => {
  //           this.profileStore.updateUserEmail({ email: data.newEmail, password: data.password });
  //         },
  //       },
  //     ],
  //   });
  //   return await alert.present();
  // }

  // async updatePassword(): Promise<void> {
  //   const alert = await this.alertCtrl.create({
  //     inputs: [
  //       { name: 'newPassword', placeholder: 'New password', type: 'password' },
  //       { name: 'oldPassword', placeholder: 'Old password', type: 'password' },
  //     ],
  //     buttons: [
  //       { text: 'Cancel' },
  //       {
  //         text: 'Save',
  //         handler: data => {
  //           this.profileStore.updateUserPassword({ newPassword: data.newPassword, oldPassword: data.oldPassword });
  //         },
  //       },
  //     ],
  //   });
  //   return await alert.present();
  // }
}
