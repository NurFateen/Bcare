import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, DocumentData, DocumentReference, Firestore, getDoc, setDoc, docData } from '@angular/fire/firestore';
import { User, reauthenticateWithCredential, EmailAuthProvider, updateEmail, updatePassword } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { UserProfile } from '../../models/user';
import { map, catchError, switchMap, tap, concatMap, first } from 'rxjs/operators';
import { EMPTY, forkJoin, from, Observable } from 'rxjs';
import { getDownloadURL, ref, Storage, uploadString, } from '@angular/fire/storage';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public currentUser: User;

  constructor(
    private firestore: Firestore, 
    private authService: AuthService,
    private storage: Storage,
    private auth: Auth,
    ) {}

  // getUserProfileReference(): Observable<DocumentReference<DocumentData>> {
  //   return this.authService.getUser().pipe(
  //     map(user => {
  //       this.currentUser = user;
  //       return doc(this.firestore, `users/${user.uid}`);
  //     }),
  //     catchError(() => EMPTY)
  //   );
  // }

  // async uploadImage(cameraFile: Photo) {
  //   return this.authService.getUser().pipe(
  //     map(async user => {
  //       this.currentUser = user;
     
  //     const path = `uploads/${user.uid}/profile.png`;
  //     const storageRef = ref(this.storage, path);
   
  //     try {
  //       await uploadString(storageRef, cameraFile.base64String, 'base64');
   
  //       const imageUrl = await getDownloadURL(storageRef);
   
  //       const userDocRef = doc(this.firestore, `users/${user.uid}`);
  //       await setDoc(userDocRef, {
  //         imageUrl,
  //       });
  //       return true;
  //     } catch (e) {
  //       return null;
  //     }
  //   })
  //   )
   
  // }
  getUserProfileReference(): Observable<DocumentReference<DocumentData>> {
    return this.authService.getUser().pipe(
      map(user => {
        this.currentUser = user;
        return doc(this.firestore, `users/${user.uid}`);
      }),
      catchError(() => EMPTY)
    );
  }

   getUserProfile(): Observable<UserProfile> {
    return this.getUserProfileReference().pipe(
      switchMap(userProfileReference => {
        return docData(userProfileReference) as Observable<UserProfile>;
      }),
      catchError(() => EMPTY)
    );
  }

  async uploadImage(cameraFile: Photo) {
    const user = this.auth.currentUser;
    const path = `profilepicture/${user.uid}/profile.jpeg`;
    const storageRef = ref(this.storage, path);
 
    try {
      await uploadString(storageRef, cameraFile.base64String, 'base64');
 
      const imageUrl = await getDownloadURL(storageRef);
 
      const userDocRef = doc(this.firestore, `users/${user.uid}`);
      await setDoc(userDocRef, {
        imageUrl,
      });
      return true;
    } catch (e) {
      return null;
    }
  }
  
  updateName(fullName: string): Observable<DocumentReference<DocumentData>> {
    return this.getUserProfileReference().pipe(
      tap({
        next: userProfileReference => setDoc(userProfileReference, { fullName }, { merge: true }),
        error: error => console.error(error),
      }),
      catchError(() => EMPTY)
    );
  }

  updatePhone(phonenum: string): Observable<DocumentReference<DocumentData>> {
    return this.getUserProfileReference().pipe(
      tap({
        next: userProfileReference => setDoc(userProfileReference, { phonenum }, { merge: true }),
        error: error => console.error(error),
      }),
      catchError(() => EMPTY)
    );
  }

  updateAddress(address: string): Observable<DocumentReference<DocumentData>> {
    return this.getUserProfileReference().pipe(
      tap({
        next: userProfileReference => setDoc(userProfileReference, { address }, { merge: true }),
        error: error => console.error(error),
      }),
      catchError(() => EMPTY)
    );
  }

  // updateEmail(newEmail: string, password: string): Observable<unknown> {
  //   return forkJoin([
  //     this.getUserProfile().pipe(first()),
  //     this.authService.getUser().pipe(first()),
  //     this.getUserProfileReference().pipe(first()),
  //   ]).pipe(
  //     concatMap(([userProfile, user, userProfileReference]) => {
  //       const credential = EmailAuthProvider.credential(userProfile.email, password);
  //       return from(reauthenticateWithCredential(user, credential)).pipe(
  //         tap({
  //           next: () =>
  //             from(
  //               updateEmail(user, newEmail).then(() =>
  //                 setDoc(userProfileReference, { email: newEmail }, { merge: true })
  //               )
  //             ),
  //           error: error => console.error(error),
  //         })
  //       );
  //     })
  //   );
  // }

  // updatePassword(newPassword: string, oldPassword: string): Observable<unknown> {
  //   return forkJoin([this.getUserProfile().pipe(first()), this.authService.getUser().pipe(first())]).pipe(
  //     concatMap(([userProfile, user]) => {
  //       const credential = EmailAuthProvider.credential(userProfile.email, oldPassword);
  //       return from(reauthenticateWithCredential(user, credential)).pipe(
  //         tap({
  //           next: () => {
  //             return from(updatePassword(user, newPassword));
  //           },
  //           error: error => console.error(error),
  //         })
  //       );
  //     })
  //   );
  // }
}
