import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, DocumentData, DocumentReference, Firestore, getDoc, setDoc, docData } from '@angular/fire/firestore';
import { User, reauthenticateWithCredential, EmailAuthProvider, updateEmail, updatePassword } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { UserProfile } from 'src/app/models/user';
import { map, catchError, switchMap, tap, concatMap, first } from 'rxjs/operators';
import { EMPTY, forkJoin, from, Observable } from 'rxjs';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadString,
} from '@angular/fire/storage';

//need to install using this command: npm i @capacitor/camera @capacitor/filesystem
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class CustProfileService {
  public currentUser: User;

  constructor(
    private firestore: Firestore, 
    private authService: AuthService,
    private storage: Storage,
    private auth: Auth,
  ) { }

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
    const path = `uploads/${user.uid}/profile.jpeg`;
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

  updateCustName(fullName: string): Observable<DocumentReference<DocumentData>> {
    return this.getUserProfileReference().pipe(
      tap({
        next: userProfileReference => setDoc(userProfileReference, { fullName }, { merge: true }),
        error: error => console.error(error),
      }),
      catchError(() => EMPTY)
    );
  }

  updateCustPhone(phonenum: string): Observable<DocumentReference<DocumentData>> {
    return this.getUserProfileReference().pipe(
      tap({
        next: userProfileReference => setDoc(userProfileReference, { phonenum }, { merge: true }),
        error: error => console.error(error),
      }),
      catchError(() => EMPTY)
    );
  }

  updateCustAddress(address: string): Observable<DocumentReference<DocumentData>> {
    return this.getUserProfileReference().pipe(
      tap({
        next: userProfileReference => setDoc(userProfileReference, { address }, { merge: true }),
        error: error => console.error(error),
      }),
      catchError(() => EMPTY)
    );
  }

}
