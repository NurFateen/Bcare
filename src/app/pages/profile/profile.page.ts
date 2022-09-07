import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserProfile } from 'src/app/models/user';
import { ProfileService } from './profile.service';
import { Observable, Subscription } from 'rxjs';
import { first, finalize, tap } from 'rxjs/operators';
import { ProfileStore } from './profile.store';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { AngularFireStorage, AngularFireUploadTask, } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection,} from '@angular/fire/compat/firestore';
import { Auth } from '@angular/fire/auth';

export interface FILE {
  name: string;
  filepath: string;
  size: number;
}

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

  // for upload pdf to firestore
  ngFireUploadTask: AngularFireUploadTask;

  progressNum: Observable<number>;

  progressSnapshot: Observable<any>;

  fileUploadedPath: Observable<string>;

  files: Observable<FILE[]>;

  FileName: string;
  FileSize: number;

  isImgUploading: boolean;
  isImgUploaded: boolean;

  private ngFirestoreCollection: AngularFirestoreCollection<FILE>;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private profileService: ProfileService,
    private alertCtrl: AlertController,
    private readonly profileStore: ProfileStore,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage,
   
  ) {
    this.profileService.getUserProfile()
    .subscribe((data) => {
      this.profile = data;
    });

    // upload pdf to firestore
    this.isImgUploading = false;
    this.isImgUploaded = false;
    this.ngFirestoreCollection = angularFirestore.collection<FILE>('MohCertificate');
    this.files = this.ngFirestoreCollection.valueChanges();
  }

  ngOnInit(): void {
    this.userProfileSubscription = this.profileService
      .getUserProfile()
      .subscribe((userProfile: UserProfile) => this.profileStore.setState(userProfile));
  }

  ngOnDestroy(): void {
    this.userProfileSubscription?.unsubscribe();
  }

  fileUpload(event: FileList) {
      
    const file = event.item(0)

    if (file.type == 'pdf') { 
      console.log('File type is not supported!')
      return;
    }

    this.isImgUploading = true;
    this.isImgUploaded = false;

    this.FileName = file.name;

    const fileStoragePath = `MohCertificate/${new Date().getTime()}_${file.name}`;

    const imageRef = this.angularFireStorage.ref(fileStoragePath);

    this.ngFireUploadTask = this.angularFireStorage.upload(fileStoragePath, file);

    this.progressNum = this.ngFireUploadTask.percentageChanges();
    this.progressSnapshot = this.ngFireUploadTask.snapshotChanges().pipe(
      
      finalize(() => {
        this.fileUploadedPath = imageRef.getDownloadURL();
        
        this.fileUploadedPath.subscribe(resp=>{
          this.fileStorage({
            name: file.name,
            filepath: resp,
            size: this.FileSize
          });
          this.isImgUploading = false;
          this.isImgUploaded = true;
        },error => {
          console.log(error);
        })
      }),
      tap(snap => {
          this.FileSize = snap.totalBytes;
      })
    )
}

fileStorage(image: FILE) {
    const ImgId = this.angularFirestore.createId();
    
    this.ngFirestoreCollection.doc(ImgId).set(image).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
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
