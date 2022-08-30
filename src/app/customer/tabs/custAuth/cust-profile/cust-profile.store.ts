import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { CustProfileService } from './cust-profile.service';

export interface ProfileState {
  profilepic: string,
  fullName: string;
  address: string;
  phonenum: string;
  file: string;
}

@Injectable()
export class CustProfileStore extends ComponentStore<ProfileState> {
  constructor(private readonly CustProfileService: CustProfileService) {
    super({profilepic: ' ', fullName: '', address: '', phonenum: '', file:''});
  }

  readonly userProfile$: Observable<ProfileState> = this.select(state => state);

  readonly updateFullName = this.updater((state, fullName: string) => ({ ...state, fullName }));

  readonly updateCustomerPhone = this.updater((state, phonenum: string) => ({ ...state, phonenum }));

  readonly updateCustomerAddress = this.updater((state, address: string) => ({ ...state, address }));

   //untuk update company name
   readonly updateCustName = this.effect((fullName$: Observable<string>) => {
    return fullName$.pipe(
      switchMap(fullName => {
        return this.CustProfileService.updateCustName(fullName).pipe(
          tap({
            next: () => this.updateFullName(fullName),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

  readonly updateCustPhonenum = this.effect((fullName$: Observable<string>) => {
    return fullName$.pipe(
        switchMap(fullName => {
            return this.CustProfileService.updateCustPhone(fullName).pipe(
              tap({
                next: () => this.updateCustomerPhone(fullName),
                error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

   //untuk update company address
   readonly updateCustsAddress = this.effect((address$: Observable<string>) => {
    return address$.pipe(
      switchMap(address => {
        return this.CustProfileService.updateCustAddress(address).pipe(
          tap({
            next: () => this.updateCustomerAddress(address),
            error: e => console.log(e),
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });



}