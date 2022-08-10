import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { ProfileService } from './profile.service';

export interface ProfileState {
  email: string;
  fullName: string;
  address: string;
}

@Injectable()
export class ProfileStore extends ComponentStore<ProfileState> {
  constructor(private readonly profileService: ProfileService) {
    super({ email: '', fullName: '', address: ''});
  }

  readonly userProfile$: Observable<ProfileState> = this.select(state => state);

  readonly updateEmail = this.updater((state, email: string) => ({ ...state, email }));

  readonly updateFullName = this.updater((state, fullName: string) => ({ ...state, fullName }));

  readonly updateCompanyAddress = this.updater((state, address: string) => ({ ...state, address }));

  //untuk update company name
  readonly updateUserName = this.effect((fullName$: Observable<string>) => {
    return fullName$.pipe(
      switchMap(fullName => {
        return this.profileService.updateName(fullName).pipe(
          tap({
            next: () => this.updateFullName(fullName),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

  //untuk update company address
  readonly updateUserAddress = this.effect((address$: Observable<string>) => {
    return address$.pipe(
      switchMap(address => {
        return this.profileService.updateAddress(address).pipe(
          tap({
            next: () => this.updateCompanyAddress(address),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

  
  //update email
  readonly updateUserEmail = this.effect((credential$: Observable<{ email: string; password: string }>) => {
    return credential$.pipe(
      switchMap(({ email, password }) =>
        this.profileService.updateEmail(email, password).pipe(
          tap({
            next: () => this.updateEmail(email),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

    //reset password
  readonly updateUserPassword = this.effect((passwords$: Observable<{ newPassword: string; oldPassword: string }>) => {
    return passwords$.pipe(
      switchMap(({ newPassword, oldPassword }) =>
        this.profileService.updatePassword(newPassword, oldPassword).pipe(
          tap({
            next: () => console.log('Updated Passwords'),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });
}
